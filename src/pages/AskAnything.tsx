
import { useState } from "react";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import InsightCards from "@/components/InsightCards";

const AskAnything = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      content: inputMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-white font-quicksand">
      <div className="w-full px-4 py-2 bg-white">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <InsightCards />
        </div>
        <div className="max-w-4xl mx-auto mb-20 mt-8">
          <MessageList messages={messages} />
        </div>
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AskAnything;
