import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">Our Mission</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Reach. Inspire. <br /> Serve. Empower.
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-midnight/60 font-medium leading-relaxed">
            R.I.S.E. Tennis is a youth-led non-profit based in the Bay Area, dedicated to making tennis accessible to all children, breaking financial and background barriers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=1000&h=1000&auto=format&fit=crop" 
                alt="Tennis community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-tennis-neon rounded-2xl flex items-center justify-center">
                  <Heart className="text-midnight w-6 h-6" />
                </div>
                <span className="font-black text-midnight text-xl">100% Youth-Led</span>
              </div>
              <p className="text-midnight/60 font-medium">
                Our organization is entirely run by passionate high school and college students.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black text-midnight tracking-tight">Breaking Barriers, One Swing at a Time.</h2>
            <p className="text-lg text-midnight/70 leading-relaxed">
              Tennis is often seen as an elite sport with high entry costs. Between rackets, balls, court fees, and professional coaching, the financial burden can be overwhelming for many families.
            </p>
            <p className="text-lg text-midnight/70 leading-relaxed">
              At R.I.S.E. Tennis, we believe that the physical, mental, and social benefits of tennis should be available to everyone. We provide high-quality coaching and all necessary equipment at no cost to our participants.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-midnight/5">
                <h3 className="text-3xl font-black text-midnight mb-2">500+</h3>
                <p className="text-sm font-bold text-midnight/40 uppercase tracking-widest">Students Taught</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-midnight/5">
                <h3 className="text-3xl font-black text-midnight mb-2">15+</h3>
                <p className="text-sm font-bold text-midnight/40 uppercase tracking-widest">Active Coaches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-midnight rounded-[4rem] p-12 md:p-24 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Reach", desc: "Connecting with underserved communities across the Bay Area." },
              { title: "Inspire", desc: "Motivating kids to pursue excellence both on and off the court." },
              { title: "Serve", desc: "Giving back to our community through the sport we love." },
              { title: "Empower", desc: "Building confidence and leadership skills in every child." }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="text-tennis-neon font-black text-5xl opacity-20">0{i+1}</div>
                <h3 className="text-2xl font-black text-tennis-neon">{value.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
