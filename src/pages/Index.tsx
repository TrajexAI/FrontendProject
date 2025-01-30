import { useState } from "react";
import Message from "@/components/Message";
import FinancialChart from "@/components/FinancialChart";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-xl bg-obsidian-light/30 p-6 backdrop-blur-lg">
          <h2 className="mb-4 text-xl font-semibold text-gold-light">Financial Overview</h2>
          <FinancialChart data={mockData} className="mb-6" />
          <div className="space-y-4">
            {messages.map((message, index) => (
              <Message
                key={index}
                content={message.content}
                isUser={message.isUser}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <Card className="glass-panel">
                  <CardHeader>
                    <CardTitle className="text-gold text-lg">Your profit, unlocked</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gold-light/80 text-sm">
                      Discover hidden opportunities and maximize your returns
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <Card className="glass-panel">
                  <CardHeader>
                    <CardTitle className="text-gold text-lg">Growth and trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gold-light/80 text-sm">
                      Analyze market patterns and growth trajectories
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <Card className="glass-panel">
                  <CardHeader>
                    <CardTitle className="text-gold text-lg">Contribution margin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gold-light/80 text-sm">
                      Track and optimize your profit margins
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Chat Input Section */}
        <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 p-4 bg-obsidian-dark/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto flex gap-2">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-obsidian-light/50 border-gold/30 text-gold-light placeholder:text-gold-light/50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;