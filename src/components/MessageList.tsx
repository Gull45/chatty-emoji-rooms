
import { useEffect, useRef } from "react";
import { Message } from "@/components/ChatRoom";
import { Card } from "@/components/ui/card";

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
          <div className="flex items-start justify-between mb-2">
            <span className="font-semibold text-white">
              {message.user}
            </span>
            <span className="text-xs text-white/60">
              {formatTime(message.timestamp)}
            </span>
          </div>
          
          {message.image && (
            <div className="mb-2">
              <img 
                src={message.image} 
                alt="Shared image" 
                className="max-w-xs max-h-64 rounded-lg object-cover"
              />
            </div>
          )}
          
          {message.text && (
            <p className="text-white/90 whitespace-pre-wrap break-words">
              {message.text}
            </p>
          )}
        </Card>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
