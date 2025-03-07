import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

// Import components using relative paths
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function InstagramPost() {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <Card className="w-96 p-4 mx-auto mt-10 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10"
        />
        <span className="font-bold">user_id_name</span>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt="Post Image"
        className="w-full rounded-lg mb-4"
      />
      <div className="flex justify-between mb-4">
        <Button onClick={() => setLikes(likes + 1)} className="flex items-center gap-1">
          <Heart className="w-5 h-5 text-red-500" /> {likes}
        </Button>
        <Button onClick={() => setShares(shares + 1)} className="flex items-center gap-1">
          <Share2 className="w-5 h-5 text-blue-500" /> {shares}
        </Button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Comments</h3>
        <ul className="text-left border rounded p-2 max-h-40 overflow-auto">
          {comments.map((comment, index) => (
            <li key={index} className="border-b py-2 text-sm">{comment}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1"
        />
        <Button onClick={addComment} className="bg-blue-500 hover:bg-blue-700">
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
