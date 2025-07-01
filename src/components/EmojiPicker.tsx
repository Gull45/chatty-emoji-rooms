
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export const EmojiPicker = ({ onEmojiSelect }: EmojiPickerProps) => {
  const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
    "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😔", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢",
    "👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉",
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔",
    "🔥", "⭐", "🌟", "✨", "🎉", "🎊", "💯", "💥", "💫", "💨"
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 max-w-md">
      <div className="grid grid-cols-10 gap-1 max-h-32 overflow-y-auto">
        {emojis.map((emoji, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => onEmojiSelect(emoji)}
            className="text-lg hover:bg-white/20 p-1 h-8 w-8"
          >
            {emoji}
          </Button>
        ))}
      </div>
    </Card>
  );
};
