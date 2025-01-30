import Message from "@/components/Message";

interface MessageListProps {
  messages: Array<{ content: string; isUser: boolean }>;
}

const MessageList = ({ messages }: MessageListProps) => (
  <div className="space-y-4">
    {messages.map((message, index) => (
      <Message
        key={index}
        content={message.content}
        isUser={message.isUser}
        index={index}
      />
    ))}
  </div>
);

export default MessageList;