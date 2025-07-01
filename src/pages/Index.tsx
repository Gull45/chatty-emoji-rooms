
import { useState } from "react";
import { RoomSelector } from "@/components/RoomSelector";
import { ChatRoom } from "@/components/ChatRoom";

export type Room = {
  id: string;
  name: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
};

const rooms: Room[] = [
  {
    id: "general",
    name: "General Chat",
    description: "Main discussion room for everyone",
    color: "from-blue-500 to-purple-600",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    icon: "💬"
  },
  {
    id: "gaming",
    name: "Gaming Lounge",
    description: "Talk about your favorite games",
    color: "from-green-500 to-teal-600",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600",
    icon: "🎮"
  },
  {
    id: "music",
    name: "Music Corner",
    description: "Share and discuss music",
    color: "from-pink-500 to-rose-600",
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    icon: "🎵"
  },
  {
    id: "tech",
    name: "Tech Talk",
    description: "Technology and programming discussions",
    color: "from-orange-500 to-red-600",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    icon: "💻"
  }
];

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleBackToRooms = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {selectedRoom ? (
        <ChatRoom room={selectedRoom} onBack={handleBackToRooms} />
      ) : (
        <RoomSelector rooms={rooms} onRoomSelect={handleRoomSelect} />
      )}
    </div>
  );
};

export default Index;
