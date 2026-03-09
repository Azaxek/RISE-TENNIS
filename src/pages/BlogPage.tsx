import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Inbox } from 'lucide-react';

export const BlogPage = () => {
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

        {/* Empty State */}
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

        {/* Newsletter Signup for Blog */}
        <div className="mt-32 bg-midnight rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tennis-neon/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">Don't miss a beat.</h2>
              <p className="text-white/60 font-medium text-lg">Subscribe to get notified as soon as we publish our first story.</p>
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
