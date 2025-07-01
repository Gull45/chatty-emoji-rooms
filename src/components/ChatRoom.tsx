
import { useState, useRef, useEffect } from "react";
import { Room } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Image, Smile } from "lucide-react";
import { MessageList } from "@/components/MessageList";
import { EmojiPicker } from "@/components/EmojiPicker";

export interface Message {
  id: string;
  text: string;
  user: string;
  timestamp: Date;
  image?: string;
}

interface ChatRoomProps {
  room: Room;
  onBack: () => void;
}

export const ChatRoom = ({ room, onBack }: ChatRoomProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Welcome to ${room.name}! Start chatting with everyone here.`,
      user: "System",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addMessage = (text: string, image?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      user: "You",
      timestamp: new Date(),
      image
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      addMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        addMessage("", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setInputText(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className={`${room.gradient} p-4 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{room.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-white">{room.name}</h2>
              <p className="text-white/80 text-sm">{room.description}</p>
            </div>
          </div>
        </div>
        <div className="text-white/80 text-sm">
          Online: 42 users
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} />
      </div>

      {/* Input Area */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 p-4">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${room.name}...`}
              className="bg-white/10 border-white/20 text-white placeholder-white/60 pr-20"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-white/60 hover:text-white hover:bg-white/20 p-1"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => fileInputRef.current?.click()}
                className="text-white/60 hover:text-white hover:bg-white/20 p-1"
              >
                <Image className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSend}
            className={`${room.gradient} text-white border-0 hover:opacity-90`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {showEmojiPicker && (
          <div className="mt-2">
            <EmojiPicker onEmojiSelect={handleEmojiSelect} />
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};
