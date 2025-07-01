
import { Room } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RoomSelectorProps {
  rooms: Room[];
  onRoomSelect: (room: Room) => void;
}

export const RoomSelector = ({ rooms, onRoomSelect }: RoomSelectorProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Welcome to ChatHub
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join one of our vibrant chat rooms and connect with people who share your interests
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {rooms.map((room) => (
          <Card 
            key={room.id} 
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => onRoomSelect(room)}
          >
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{room.icon}</div>
              <CardTitle className="text-white text-xl">{room.name}</CardTitle>
              <CardDescription className="text-gray-300">
                {room.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className={`w-full ${room.gradient} text-white border-0 hover:opacity-90 transition-opacity`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRoomSelect(room);
                }}
              >
                Join Room
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
