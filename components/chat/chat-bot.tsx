"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRecordVoice } from "@/hooks/useRecordVoice";
import Image from "next/image";
export default function ChatBot() {
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
      speech.lang = /[\u0600-\u06FF]/.test(botMessage) ? "ar-SA" : "en-US"; 
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

  useEffect(() => {
    const initialBotMessage = "ماذا الذي أقدر أساعدك فيه؟";
    setMessages([`المساعد الافتراضي: ${initialBotMessage}`]);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="chat-container">
        <div className="scroll-area">
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex message ${
                  msg.startsWith("المستخدم") ? "user" : "assistant"
                }`}
              >
                <Image
                  className="w-[34px] h-[34px]"
                  src={`/images/${
                    msg.startsWith("المساعد الافتراضي")
                      ? "wajeeh-man-icon.png"
                      : "user-chat.png"
                  }`}
                  alt="wajeeh man"
                  width={50}
                  height={50}
                />
                <div className="text p-2 mx-1">
                  {msg
                    .replace("المستخدم: ", "")
                    .replace("المساعد الافتراضي: ", "")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid input-container w-[550px]">
        <input
          type="text"
          className="p-2 text-right placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="اكتب هنا"
        />
        <div className="flex justify-center mt-5">
          <button
            className="bg-[#6FAD4F] text-white min-w-[150px] h-[40px] rounded-2xl font-bold"
            onClick={handleSend}
            disabled={isSpeaking}
          >
            ارسال
          </button>
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            className="microphone-button w-[200px] rounded-2xl max-w-xs h-10 text-[#94cc52] bg-[#13574f] font-bold"
          >
            تحدث الآن
          </button>
        </div>
      </div>
    </div>
  );
}
