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
  { content: "What happened in October?", isUser: true },
  { content: "Analysing marketing data....", isUser: false },
  { content: "It looks like content creation and posting was down 23% in September, which may have impacted sales.", isUser: false },
  { content: "Analysing marketing data....", isUser: false },
  { content: "Looking at the sales by product breakdown for October, it looks like the AW24 Suede boots sales volume was down 15% in October.", isUser: false },
  { content: "Looking at inventory for the period, the AW suede boots were out of stock from 25th September onwards for a period of 5 weeks. ", isUser: false },
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
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/f824e481-f31c-4e45-8dae-43f9616aa4d9.png" 
            alt="Trajex Logo" 
            className="h-24 object-contain"
          />
          <h1 className="text-2xl font-bold text-gold text-right mb-2">D'NA Boutique</h1>
        </div>
        <InsightCards />
      </div>
      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <ChartSection data={mockData} />
          <MessageList messages={messages} />
          <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
