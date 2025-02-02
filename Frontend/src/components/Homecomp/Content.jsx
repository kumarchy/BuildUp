import { Heart, MessageCircle, ThumbsDown, ExternalLink } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import { useNavigate, Link } from "react-router-dom";
import Comment from "../Comment/Comment";

const Content = () => {
  const { showAllPost, fetchAllPosts } = useContext(StoreContext);
  const [openCommentPostId, setOpenCommentPostId] = useState(null);

  useEffect(() => {
    if (!showAllPost) {
      fetchAllPosts();
    }
  }, [showAllPost, fetchAllPosts]);

  const navigate = useNavigate();

  const getDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDiff = currentDate - createdDate;
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "1 day ago";
    return `${daysAgo} days ago`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col gap-4 bg-zinc-100 p-4 md:p-8 dark:bg-zinc-900">
      {/* Projects */}
      {showAllPost &&
        showAllPost.map((project) => (
          <div
            key={project.id}
            className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800"
          >
            <div className="flex flex-col md:flex-row relative">
              {/* Left Section */}
              <section className="w-full md:w-[55%] p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-7 w-7 sm:h-10 sm:w-10 shrink-0">
                    <div
                      className="h-full w-full flex justify-center items-center text-white bg-blue-500 rounded-full text-2xl font-bold object-cover ring-2 ring-white dark:ring-zinc-700 cursor-pointer"
                      onClick={() =>
                        navigate(`/personalProjects/${project.user_id}`)
                      }
                    >
                      {project.user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <Link
                      to={`/projectDetail/${project.id}`}
                      className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700 cursor-pointer"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                        alt="Project Preview"
                        className="h-full w-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Right Section */}
              <section className="w-full md:w-[45%] border-t md:border-l md:border-t-0 border-zinc-200 dark:border-zinc-700 p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      {project.title}
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Posted by {project.user?.name} •{" "}
                      {getDaysAgo(project.created_at)}
                    </p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description.split(" ").slice(0, 25).join(" ")}
                    {project.description.split(" ").length > 25 ? "..." : ""}
                  </p>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-2 w-full flex-nowrap overflow-hidden">
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <Heart className="h-4 w-4" />
                      <span className="hidden sm:block">Like</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ThumbsDown className="h-4 w-4" />
                      <span className="hidden sm:block">Dislike</span>
                    </button>
                    <button  onClick={() =>
                    setOpenCommentPostId(openCommentPostId === project.id ? null : project.id)
                  } className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <MessageCircle className="h-4 w-4" />
                      <span className="hidden sm:block">Comment</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
            {openCommentPostId === project.id && (
              <Comment
                isOpen={true}
                onClose={() => setOpenCommentPostId(null)}
                comments={project.comment?.comment || []}
              />
            )}
          </div>
        ))}
        
    </div>
  );
};

export default Content;
