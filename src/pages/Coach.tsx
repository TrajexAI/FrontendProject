
import { useState } from "react";
import Message from "@/components/Message";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";

let sessionId = localStorage.getItem('finagent_session_id');
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
  const [suggestions, setSuggestions] = useState<string[]>(["Could you give me a general breakdown of my business?", "Could you explain to me what you can do?", "Are there any upcoming regulations that I should be aware of?"]);

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

    try {
      const response = await fetch("http://127.0.0.1:10000/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { 
            'query': inputMessage,
          }
        ),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Received main response")
      if (data.session_id) {
        sessionId = data.session_id;
        localStorage.setItem('finagent_session_id', sessionId);
      } 
        const aiResponse = {
        content: data.answer,
        isUser: false,
        showAdvisorPrompt: true,
      }
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
      
      // Update suggestions if available in response
      if (data.suggestions && Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
        console.log("received suggestions")
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      
      // Add specific handling for connection refused errors
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        console.log("Connection refused or server not running at http://127.0.0.1:10000");
        setMessages((prev) => [...prev, {
          content: "Unable to connect to the server. Please check if the backend service is running.",
          isUser: false
        }]);
      } else {
        // Handle other errors
        setMessages((prev) => [...prev, {
          content: "Error retrieving data. Please try again later.",
          isUser: false
        }]);
      }
      
      setIsLoading(false);
    }

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
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 flex flex-nowrap overflow-x-auto gap-2 justify-start max-w-4xl mx-auto">
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => {
            setInputMessage(suggestion);
            handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                }}
                className="bg-[#F97316] text-white px-3 py-1.5 rounded hover:bg-[#F97316]/90 transition-colors text-sm"
              >
                {suggestion}
              </button>
            ))}
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
