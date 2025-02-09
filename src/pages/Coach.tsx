
import { useState } from "react";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import TopBanner from "@/components/TopBanner";

const Coach = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([
    {
      content: "Need more details? Or about to take a business decision? Ask any question and get data-driven scenario analysis answers here",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      content: inputMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response with a delay
    setTimeout(() => {
      const aiResponse = {
        content: "I'm a demo AI assistant. I'm not connected to a real AI model yet, but I can simulate responses!",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
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
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
