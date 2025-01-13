import { Heart, MessageCircle, ThumbsDown, ExternalLink } from 'lucide-react';

const Content = () => {
  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <section className="w-full md:w-[55%] p-6">
            <div className="flex items-start gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="User"
                  className="h-full w-full rounded-full object-cover  ring-2 ring-white dark:ring-zinc-700"
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
                  Project Showcase
                </h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Posted by John Doe • 2 days ago
                </p>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                A beautifully crafted project that demonstrates the perfect balance between functionality and design. 
                Built with modern technologies and best practices, this showcase represents weeks of dedicated development 
                and thoughtful user experience considerations.
              </p>

              <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

              <div className="flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
                  <Heart className="h-4 w-4" /> Like
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
                  <ThumbsDown className="h-4 w-4" /> Dislike
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
                  <MessageCircle className="h-4 w-4" /> Comment
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
                  <ExternalLink className="h-4 w-4" /> Visit
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;