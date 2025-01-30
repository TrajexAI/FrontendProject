import { Input } from "@/components/ui/input";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatInput = ({ inputMessage, setInputMessage, onSubmit }: ChatInputProps) => (
  <form onSubmit={onSubmit} className="fixed bottom-0 left-0 right-0 p-4 bg-obsidian-dark/80 backdrop-blur-md">
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
);

export default ChatInput;