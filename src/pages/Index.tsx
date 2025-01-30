import { useState } from "react";
import ChartSection from "@/components/ChartSection";
import MessageList from "@/components/MessageList";
import InsightCards from "@/components/InsightCards";
import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";

const mockData = [
  { date: "Jan", value: 4000 },
  { date: "Feb", value: 3000 },
  { date: "Mar", value: 5000 },
  { date: "Apr", value: 2780 },
  { date: "May", value: 1890 },
  { date: "Jun", value: 2390 },
  { date: "Jul", value: 3490 },
];

const messages = [
  { content: "Here's the latest financial analysis for your portfolio.", isUser: false },
  { content: "I notice a significant uptrend in the last quarter.", isUser: true },
  { content: "Yes, there's been a 23% increase in overall performance.", isUser: false },
];

const Index = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    console.log("Message submitted:", inputMessage);
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light p-4 md:p-8 font-quicksand">
      <div className="mx-auto max-w-4xl space-y-6">
        <Message content="How is my top line? Trends over the past 2 quarters?" isUser={true} />
        <ChartSection data={mockData} />
        <MessageList messages={messages} />
        <InsightCards />
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Index;