import { useEffect, useState, useRef } from "react";
import { blobToBase64 } from "@/utils/blobToBase64";
import { createMediaStream } from "@/utils/createMediaStream";

export const useRecordVoice = () => {
  const [text, setText] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const isRecording = useRef(false);
  const chunks = useRef<Blob[]>([]);
  const startTime = useRef<number | null>(null);

  const startRecording = () => {
    if (mediaRecorder) {
      isRecording.current = true;
      mediaRecorder.start();
      setRecording(true);
      startTime.current = Date.now();
      console.log("Recording started");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      isRecording.current = false;
      mediaRecorder.stop();
      setRecording(false);
      console.log("Recording stopped");
    }
  };

  const getText = async (base64data: string) => {
    try {
      const response = await fetch("/api/speechToText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audio: base64data,
        }),
      }).then((res) => res.json());
      const { text } = response;
      setText(text);
    } catch (error) {
      console.log("Error converting audio to text:", error);
    }
  };

  const initialMediaRecorder = (stream: MediaStream) => {
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.onstart = () => {
      createMediaStream(stream, isRecording, (peak: number) => {
        console.log("Peak level:", peak);
      });
      chunks.current = [];
    };

    mediaRecorder.ondataavailable = (event) => {
      chunks.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const endTime = Date.now();
      const duration = (endTime - (startTime.current ?? 0)) / 1000;
      console.log(`Recording duration: ${duration} seconds`);

      // Ensure the recording is at least 0.1 seconds
      if (duration < 0.1) {
        console.error("Recording is too short.");
        return;
      }

      const audioBlob = new Blob(chunks.current, { type: "audio/wav" });
      console.log("Audio blob created", audioBlob);
      blobToBase64(audioBlob, getText);
    };

    setMediaRecorder(mediaRecorder);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(initialMediaRecorder)
        .catch((err) => {
          console.error("Error accessing microphone:", err);
        });
    }
  }, []);

  return { recording, startRecording, stopRecording, text };
};
