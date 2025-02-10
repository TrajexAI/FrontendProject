
import { useState } from "react";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";

interface Message {
  content: string;
  isUser: boolean;
  showAdvisorPrompt?: boolean;
}

const Coach = () => {
  const [messages, setMessages] = useState<Array<Message>>([
    {
      content: "Need more details? Or about to take a business decision? Ask any question and get data-driven scenario analysis answers here",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdvisorResponse = (response: boolean) => {
    const responseMessage = response 
      ? "I'll notify your advisor to schedule a follow-up discussion about this topic."
      : "Alright, let me know if you have any other questions!";
    
    setMessages(prev => [
      ...prev,
      {
        content: responseMessage,
        isUser: false,
      }
    ]);
  };

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
        showAdvisorPrompt: true,
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
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <Message
                  content={message.content}
                  isUser={message.isUser}
                  index={index}
                />
                {message.showAdvisorPrompt && (
                  <div className="flex w-full justify-start mt-4 opacity-0 animate-fade-in [animation-delay:750ms] [animation-fill-mode:forwards]">
                    <div className="max-w-[80%] rounded-2xl px-4 py-2 border bg-black text-white border-[#F97316]/20">
                      <p className="text-sm md:text-base mb-3">Would you like to discuss this further with your advisor?</p>
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => handleAdvisorResponse(true)}
                          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                        >
                          Yes
                        </Button>
                        <Button 
                          onClick={() => handleAdvisorResponse(false)}
                          variant="outline"
                          className="border-[#F97316]/20 text-[#F97316] hover:bg-[#F97316]/10"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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

