import { useState } from "react";
import Message from "@/components/Message";
import FinancialChart from "@/components/FinancialChart";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light p-4 md:p-8 font-playfair">
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
      </div>
    </div>
  );
};

export default Index;