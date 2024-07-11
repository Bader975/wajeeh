"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRecordVoice } from "@/hooks/useRecordVoice";
import * as Tabs from "@radix-ui/react-tabs";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "./tabStyles";
import ChatBot from "./chat-bot";
import HrChat from "./hr-chat";
import ChallengesChat from "./challenges-chat";
import AdviserChat from "./Adviser-chat";
import ProgressIndicator from "./ProgressIndicator";
import GuideMe from "./guideMe";
import CvChat from "./cv-chat";
import ChallengeChat from "./challenges-chat";

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
    <div className="my-40 max-w-[900px] w-full">
      <TabsRoot as={Tabs.Root} defaultValue="tab1">
        <TabsList as={Tabs.List} aria-label="Manage your account">
          <TabsTrigger as={Tabs.Trigger} value="tab1">
            وجهني
          </TabsTrigger>
          <TabsTrigger as={Tabs.Trigger} value="tab2">
            تحديات وجيه
          </TabsTrigger>
          <TabsTrigger as={Tabs.Trigger} value="tab3">
            CV وجيه
          </TabsTrigger>
          <TabsTrigger as={Tabs.Trigger} value="tab4">
            وجيه HR
          </TabsTrigger>
          <TabsTrigger as={Tabs.Trigger} value="tab5">
            مستشار
          </TabsTrigger>
        </TabsList>

        <TabsContent as={Tabs.Content} value="tab1">
          {/* <ChatBot /> */}
          <GuideMe />
        </TabsContent>

        <TabsContent as={Tabs.Content} value="tab2">
          <ChallengeChat />
        </TabsContent>

        <TabsContent as={Tabs.Content} value="tab3">
          <CvChat/>
        </TabsContent>

        <TabsContent as={Tabs.Content} value="tab4">
          {/* <HrChat /> */}
          <ChatBot /> 
        </TabsContent>

        <TabsContent as={Tabs.Content} value="tab5">
          <AdviserChat />
        </TabsContent>
      </TabsRoot>
    </div>
  );
};

export default Chat;
