import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  isUser?: boolean;
  className?: string;
  index: number;
}

const Message = ({ content, isUser = false, className, index }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full opacity-0",
        isUser ? "justify-end" : "justify-start",
        `animate-fade-in [animation-delay:${index * 750}ms] [animation-fill-mode:forwards]`,
        className
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 shadow-lg backdrop-blur-sm",
          isUser
            ? "bg-gold text-black"
            : "bg-forest-light text-white",
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default Message;