
import { cn } from "@/lib/utils";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

interface MessageProps {
  content: string;
  isUser?: boolean;
  className?: string;
  index: number;
}

const Message: React.FC<MessageProps> = ({ content, isUser, index }) => {
  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} ${
        index > 0 ? "opacity-0 animate-fade-in [animation-fill-mode:forwards]" : ""
      }`}
      style={{ animationDelay: index > 0 ? `${200 * (index % 3)}ms` : "0ms" }}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? "bg-[#F97316] text-white"
            : "border border-[#F97316]/20 bg-black text-white"
        }`}
      >
        <div className="markdown-content text-sm md:text-base">
          <ReactMarkdown 
            rehypePlugins={[rehypeSanitize]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Message;