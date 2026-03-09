import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Trophy, Star } from 'lucide-react';

export const TeamPage = () => {
  const team = [
    { name: "Aarav Sharma", role: "Founder & Executive Director", bio: "A competitive tennis player with a passion for community service.", img: "https://picsum.photos/seed/aarav/400/400" },
    { name: "Maya Patel", role: "Director of Operations", bio: "Ensuring our clinics run smoothly across all Bay Area locations.", img: "https://picsum.photos/seed/maya/400/400" },
    { name: "Kevin Zhang", role: "Head of Coaching", bio: "Developing our curriculum to make tennis fun for absolute beginners.", img: "https://picsum.photos/seed/kevin/400/400" },
    { name: "Sofia Rodriguez", role: "Community Outreach", bio: "Connecting R.I.S.E. with local schools and community centers.", img: "https://picsum.photos/seed/sofia/400/400" },
    { name: "Jason Lee", role: "Podcast Host", bio: "Leading conversations on the Open Court podcast.", img: "https://picsum.photos/seed/jason/400/400" },
    { name: "Emily Chen", role: "Events Coordinator", bio: "Planning our fundraisers and community play days.", img: "https://picsum.photos/seed/emily/400/400" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">The Team</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Youth-Led. <br /> Community Driven.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-midnight/60 font-medium">
            Meet the passionate high school and college students who make R.I.S.E. Tennis possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-tennis-neon rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <Star className="text-midnight w-6 h-6 fill-current" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-midnight mb-1">{member.name}</h3>
              <p className="text-energetic-orange font-bold uppercase tracking-widest text-xs mb-4">{member.role}</p>
              <p className="text-midnight/60 font-medium leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-32 bg-midnight rounded-[4rem] p-12 md:p-24 text-white text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Want to Join the Team?</h2>
          <p className="max-w-2xl mx-auto text-xl text-white/60 font-medium mb-12">
            We are always looking for passionate high school students to help us expand our reach. Whether you're a tennis player or just want to help with operations, we have a spot for you.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-12 text-left">
            {[
              { title: "Coaching", icon: <Trophy className="text-tennis-neon" /> },
              { title: "Operations", icon: <Users className="text-tennis-neon" /> },
              { title: "Marketing", icon: <Heart className="text-tennis-neon" /> }
            ].map((role, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="mb-4">{role.icon}</div>
                <h4 className="text-xl font-black mb-2">{role.title}</h4>
                <p className="text-white/40 text-sm">Help us grow our impact in the Bay Area.</p>
              </div>
            ))}
          </div>
          <button className="bg-tennis-neon text-midnight px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-tennis-neon/20">
            Apply to Join
          </button>
        </div>
      </div>
    </div>
  );
};
