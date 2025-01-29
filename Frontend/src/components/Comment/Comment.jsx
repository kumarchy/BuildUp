import { Send, X } from "lucide-react";
import { useState } from "react";

const Comment = ({ isOpen, onClose }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content:
        "This is an amazing project! The attention to detail is impressive.",
      time: "2 hours ago",
      likes: 5,
    },
    {
      id: 2,
      user: "Alex Morgan",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      content: "I love the color scheme and the overall design. Great work!",
      time: "5 hours ago",
      likes: 3,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: "You",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content: comment,
      time: "Just now",
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-xl animate-in fade-in duration-200">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Comments
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors"
            aria-label="Close comments"
          >
            <X className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-[60vh] space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 group">
              <img
                src={comment.avatar}
                alt={comment.user}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-700"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {comment.user}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {comment.time}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mt-1">
                  {comment.content}
                </p>
                <div className="mt-2 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <button className="hover:text-blue-500 transition-colors">
                    Like ({comment.likes})
                  </button>
                  <button className="hover:text-blue-500 transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur supports-[backdrop-filter]:bg-white/80"
        >
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="Your avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-700"
            />
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 bg-zinc-100 dark:bg-zinc-700 border-0 rounded-lg px-4 py-2 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!comment.trim()}
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
