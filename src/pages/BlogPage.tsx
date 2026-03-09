import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Inbox, ArrowRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

export const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setPosts([]); setLoading(false); });
  }, []);

  if (selectedPost) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-energetic-orange font-black text-sm uppercase tracking-widest mb-8 inline-block hover:gap-2 transition-all"
          >
            ← Back to Blog
          </button>
          {selectedPost.imageUrl && (
            <div className="rounded-[2rem] overflow-hidden shadow-xl mb-10 aspect-video">
              <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-black text-midnight mb-4 tracking-tighter">
            {selectedPost.title}
          </h1>
          <p className="text-midnight/40 font-bold text-sm uppercase tracking-widest mb-10">
            By {selectedPost.author} · {selectedPost.date}
          </p>
          <div className="prose prose-lg max-w-none text-midnight/70 font-medium leading-relaxed whitespace-pre-wrap">
            {selectedPost.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-tennis-neon font-black uppercase tracking-widest text-sm mb-4 block bg-midnight inline-block px-4 py-1 rounded-full">The Baseline Blog</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Stories from <br /> the Court.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-midnight/60 font-medium">
            Updates, stories, and insights from our community, coaches, and students.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-midnight/40 font-bold py-20">Loading posts...</div>
        ) : posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#F8F9FA] rounded-[4rem] p-12 md:p-24 border border-midnight/5 text-center flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-midnight/5">
              <Inbox className="text-midnight/20 w-12 h-12" />
            </div>
            <h2 className="text-3xl font-black text-midnight mb-4 tracking-tight">No posts yet!</h2>
            <p className="max-w-md mx-auto text-midnight/40 font-medium leading-relaxed mb-10">
              We're currently working on some exciting stories and updates. Check back soon to read about our latest impact in the Bay Area.
            </p>
            <div className="flex items-center gap-2 text-energetic-orange font-black uppercase tracking-widest text-xs">
              <BookOpen className="w-4 h-4" /> Coming Soon
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-white rounded-[2rem] border border-midnight/5 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {post.imageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8">
                  <p className="text-energetic-orange font-bold uppercase tracking-widest text-xs mb-3">{post.date}</p>
                  <h3 className="text-xl font-black text-midnight mb-3 tracking-tight group-hover:text-energetic-orange transition-colors">{post.title}</h3>
                  <p className="text-midnight/50 font-medium text-sm mb-6 line-clamp-2">{post.excerpt || post.content.substring(0, 120) + '...'}</p>
                  <span className="flex items-center gap-2 font-black text-midnight text-sm group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4 text-energetic-orange" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Newsletter Signup for Blog */}
        <div className="mt-32 bg-midnight rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tennis-neon/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">Don't miss a beat.</h2>
              <p className="text-white/60 font-medium text-lg">Subscribe to get notified as soon as we publish a new story.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-tennis-neon transition-colors"
              />
              <button className="bg-tennis-neon text-midnight px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-tennis-neon/20">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
