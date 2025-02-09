
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
          "max-w-[80%] rounded-2xl px-4 py-2 border",
          isUser
            ? "bg-[#F97316] text-white border-[#F97316]/20"
            : "bg-black text-white border-[#F97316]/20",
        )}
      >
        <p className="text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default Message;
