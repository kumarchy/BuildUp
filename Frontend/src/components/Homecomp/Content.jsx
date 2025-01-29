import { Heart, MessageCircle, ThumbsDown, ExternalLink } from "lucide-react";

const Content = () => {
  const { showPersonalPost, showProjects } =
  useContext(StoreContext);

useEffect(() => {
  showProjects();
}, [showProjects]);

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col gap-4 bg-zinc-100 p-4 md:p-8 dark:bg-zinc-900">
      {/* Projects */}
      {showPersonalPost &&
        showPersonalPost.map((project) => (
          <div
            key={project.id}
            className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800"
          >
            <div className="flex flex-col md:flex-row relative">
              {/* Left Section */}
              <section className="w-full md:w-[55%] p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-7 w-7 sm:h-10 sm:w-10 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="User"
                      className="h-full w-full rounded-full object-cover ring-2 ring-white dark:ring-zinc-700"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700">
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                        alt="Project Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
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
                      Posted by John Doe • 2 days ago
                    </p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
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
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <MessageCircle className="h-4 w-4" />
                      <span className="hidden sm:block">Comment</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden sm:block">Visit</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Content;
