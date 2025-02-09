
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
        content: "Your have exceeded your profit target for 2 months in a row so now is a good time to consider hiring to offset possible tax liabilities. If you hire a junior sales person on 1rst March, your profit should be positive again by the end of May, assuming this person would deliver a sales increase on par with your current sales team.",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="flex-1 overflow-hidden flex flex-col p-4 pt-20 pb-24">
        <div className="max-w-4xl mx-auto w-full flex-1 overflow-y-auto">
          <MessageList messages={messages} />
        </div>
        <div className="fixed bottom-16 left-0 right-0">
          <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Coach;

