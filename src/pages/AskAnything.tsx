
import { useState } from "react";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import TopBanner from "@/components/TopBanner";

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
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="mb-20">
              <MessageList messages={messages} />
            </div>
            <ChatInput
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAnything;
