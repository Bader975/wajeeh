import React, { useState } from 'react';
import axios from 'axios';
import {Button, TextField ,} from "@radix-ui/themes";
const Chat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSend = async () => {
    const userMessage = input;
    setMessages([...messages, `user: ${userMessage}`]);
    setInput('');

    const payload = {
        model:"gpt-3.5-turbo",
      role: 'user',
      content: [
        {
          type: 'text',
          text: userMessage,
        },
      ],
    };

    try {
      const response = await axios.post('/api/chat', payload);
      const botMessage = response.data.message;
      setMessages([...messages, `المستخدم: ${userMessage}`, `المساعد الافتراضي: ${botMessage}`]);

      const speech = new SpeechSynthesisUtterance(botMessage);
      speech.lang = /[\u0600-\u06FF]/.test(botMessage) ? 'ar-SA' : 'en-US'; // Check if the text is in Arabic
      speech.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="scroll-area">
      <div className="messages">

        {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.startsWith('user') ? 'user' : 'assistant'}`}>
                {msg}
              </div>
        ))}

      </div>
      </div>
      <div className="input-container">
      <TextField.Root
        type="text"
        value={input}
        className="border-2 "
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button color="cyan" variant="soft" onClick={handleSend} disabled={isSpeaking}>
ارسال

      </Button>

      
    </div>
    </div>
  );
};

export default Chat;
