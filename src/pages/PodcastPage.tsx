import React from 'react';
import { motion } from 'motion/react';
import { Music2, Youtube, Play, SkipBack, SkipForward, Volume2, ArrowRight } from 'lucide-react';

export const PodcastPage = () => {
  const episodes = [
    { id: 1, title: "The R.I.S.E. Mission", guest: "Aarav Sharma", duration: "24:15", img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 2, title: "Tennis for All", guest: "Maya Patel", duration: "18:40", img: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 3, title: "Bay Area Impact", guest: "Sofia Rodriguez", duration: "22:10", img: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=200&h=200&auto=format&fit=crop" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-tennis-neon font-black uppercase tracking-widest text-sm mb-4 block bg-midnight inline-block px-4 py-1 rounded-full">Open Court Podcast</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Conversations <br /> on the Court.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-midnight/60 font-medium">
            Exploring the intersection of sports, community, and accessibility in the Bay Area.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Featured Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-[3rem] shadow-2xl bg-midnight text-white sticky top-32"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={episodes[0].img} 
                  alt="Podcast Cover" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-1">Ep. {episodes[0].id}: {episodes[0].title}</h4>
                <p className="text-tennis-neon font-bold uppercase tracking-wider text-xs">Now Playing • {episodes[0].duration}</p>
              </div>
            </div>

            <div className="flex items-end gap-1 h-24 mb-10">
              {[...Array(40)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [10, Math.random() * 80 + 10, 10] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                  className="flex-1 bg-tennis-neon/40 rounded-full"
                />
              ))}
            </div>

            <div className="flex items-center justify-between mb-10">
              <button className="text-white/40 hover:text-white transition-colors"><SkipBack size={32} /></button>
              <button className="w-20 h-20 bg-tennis-neon text-midnight rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-tennis-neon/20">
                <Play size={32} className="fill-current ml-1" />
              </button>
              <button className="text-white/40 hover:text-white transition-colors"><SkipForward size={32} /></button>
            </div>

            <div className="flex items-center gap-4 text-white/40">
              <Volume2 className="w-6 h-6" />
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-tennis-neon shadow-[0_0_10px_#DFFF00]"></div>
              </div>
            </div>
          </motion.div>

          {/* Episode List */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-midnight mb-8">All Episodes</h2>
            {episodes.map((ep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-6 p-6 bg-white rounded-3xl border border-midnight/5 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md">
                  <img src={ep.img} alt={ep.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-midnight group-hover:text-energetic-orange transition-colors">{ep.title}</h3>
                  <p className="text-midnight/40 font-bold text-sm uppercase tracking-widest">Guest: {ep.guest}</p>
                </div>
                <div className="text-midnight/30 font-bold text-sm">{ep.duration}</div>
                <div className="w-10 h-10 rounded-full bg-midnight/5 flex items-center justify-center group-hover:bg-tennis-neon group-hover:text-midnight transition-all">
                  <Play size={16} className="fill-current" />
                </div>
              </motion.div>
            ))}
            
            <div className="pt-12">
              <h3 className="text-2xl font-black text-midnight mb-6">Listen on Your Platform</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black hover:scale-105 transition-transform">
                  <Youtube size={20} /> YouTube
                </a>
                <a href="#" className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-2xl font-black hover:scale-105 transition-transform">
                  <Music2 size={20} /> Spotify
                </a>
                <a href="#" className="flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-2xl font-black hover:scale-105 transition-transform">
                  <Music2 size={20} /> Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
