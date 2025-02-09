
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const ChatInput = ({ inputMessage, setInputMessage, onSubmit, isLoading = false }: ChatInputProps) => (
  <form onSubmit={onSubmit} className="bg-black/80 backdrop-blur-md">
    <div className="max-w-4xl mx-auto flex gap-2 items-center p-4">
      <Input
        type="text"
        placeholder="Ask me anything..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        className="flex-1 bg-black border-[#F97316]/20 text-white placeholder:text-white/50"
        disabled={isLoading}
      />
      {isLoading && (
        <Loader2 className="w-6 h-6 text-[#F97316] animate-spin" />
      )}
    </div>
  </form>
);

export default ChatInput;
