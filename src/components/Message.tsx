import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isUser?: boolean;
  className?: string;
}

const Message = ({ content, isUser = false, className }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-fade-in",
        isUser ? "justify-end" : "justify-start",
        className
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 shadow-lg backdrop-blur-sm",
          isUser
            ? "bg-gold-dark/90 text-obsidian-dark"
            : "bg-obsidian-light/90 text-gold-light",
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default Message;