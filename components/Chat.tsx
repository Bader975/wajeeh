import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, TextField } from "@radix-ui/themes";
import { useRecordVoice } from "@/hooks/useRecordVoice";
import { FaMicrophone } from "react-icons/fa";
//hey
const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { startRecording, stopRecording, text } = useRecordVoice();
  const chatRef = useRef<any>(null);

  const handleSend = async () => {
    const userMessage = input || text;
    setMessages([...messages, `المستخدم: ${userMessage}`]);
    setInput("");

    const payload = {
      model: "gpt-3.5-turbo",
      role: "user",
      content: [
        {
          type: "text",
          text: userMessage,
        },
      ],
    };

    try {
      const response = await axios.post("/api/chat", payload);
      const botMessage = response.data.message;
      setMessages([
        ...messages,
        `المستخدم: ${userMessage}`,
        `المساعد الافتراضي: ${botMessage}`,
      ]);

      const speech = new SpeechSynthesisUtterance(botMessage);
      speech.lang = /[\u0600-\u06FF]/.test(botMessage) ? "ar-SA" : "en-US"; // Check if the text is in Arabic
      speech.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error("خطأ في إرسال الرسالة:", error);
    }
  };

  useEffect(() => {
    if (text) {
      handleSend();
    }
  }, [text]);

  return (
    <div className="chat-container shadow-xl">
      <div className="scroll-area">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.startsWith("المستخدم") ? "user" : "assistant"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <TextField.Root
          type="text"
          value={input}
          className="border-2"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="اكتب رسالتك هنا"
        />
        <Button
          color="cyan"
          variant="soft"
          onClick={handleSend}
          disabled={isSpeaking}
        >
          ارسال
        </Button>
        <Button
          color="gray"
          variant="soft"
          highContrast
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onTouchStart={startRecording}
          onTouchEnd={stopRecording}
          className="border-none bg-transparent w-10 microphone-button"

        >
          <FaMicrophone />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
