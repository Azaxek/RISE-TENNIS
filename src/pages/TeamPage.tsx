import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Trophy, Star } from 'lucide-react';

export const TeamPage = () => {
  const team = [
    { name: "Harshil Shah", role: "President", team: "Executive", bio: "Executive leader of R.I.S.E. Tennis.", img: "https://picsum.photos/seed/harshil/400/400" },
    { name: "Ananya Rawlani", role: "President", team: "Executive", bio: "Executive leader of R.I.S.E. Tennis.", img: "https://picsum.photos/seed/ananya/400/400" },
    { name: "Harshal Shah", role: "Vice President", team: "Executive", bio: "Executive team member of R.I.S.E. Tennis.", img: "https://picsum.photos/seed/harshal/400/400" },
    { name: "Moksha Rawlani", role: "Vice President", team: "Executive", bio: "Executive team member of R.I.S.E. Tennis.", img: "https://picsum.photos/seed/moksha/400/400" },
    { name: "Rishabh Shah", role: "Vice President", team: "Executive", bio: "Executive team member of R.I.S.E. Tennis.", img: "https://picsum.photos/seed/rishabh/400/400" },
    { name: "Rahul", role: "Head Manager", team: "Management", bio: "Head Manager of operations.", img: "https://picsum.photos/seed/rahul/400/400" },
    { name: "Arjan", role: "Chief Technology Officer", team: "Website", bio: "Handling website architecture and all things technology for R.I.S.E. Tennis.", img: "https://picsum.photos/seed/arjan/400/400" },
    { name: "Ishaan Joshi", role: "Outreach Director", team: "Outreach", bio: "Leading outreach efforts in New Jersey.", img: "https://picsum.photos/seed/ishaan/400/400" },
    { name: "Riddhi C.", role: "Outreach Director", team: "Outreach", bio: "Leading outreach efforts in Fremont, CA.", img: "https://picsum.photos/seed/riddhi/400/400" },
    { name: "Avanthika", role: "Outreach Director", team: "Outreach", bio: "Leading outreach efforts in Philadelphia, PA.", img: "https://picsum.photos/seed/avanthika/400/400" },
    { name: "Saanvi Bachamada", role: "Volunteer", team: "Outreach", bio: "Outreach volunteer based in Fremont, CA.", img: "https://picsum.photos/seed/saanvi/400/400" },
    { name: "Elizabeth George", role: "Volunteer", team: "Outreach", bio: "Outreach volunteer based in Fremont, CA.", img: "https://picsum.photos/seed/elizabeth/400/400" },
    { name: "Avinash Kasturi", role: "Volunteer", team: "Outreach", bio: "Outreach volunteer based in Texas.", img: "https://picsum.photos/seed/avinash/400/400" },
    { name: "Anushka", role: "Volunteer", team: "Outreach", bio: "Outreach volunteer based in CA.", img: "https://picsum.photos/seed/anushka/400/400" },
    { name: "Mishka", role: "Volunteer", team: "Outreach", bio: "Outreach volunteer based in CA.", img: "https://picsum.photos/seed/mishka/400/400" },
    { name: "Sharon Lui", role: "Coach", team: "Coaching", bio: "Tennis coach in Fremont, CA.", img: "https://picsum.photos/seed/sharon/400/400" },
    { name: "Aniketh Nadipati", role: "Coach", team: "Coaching", bio: "Tennis coach in San Jose, CA.", img: "https://picsum.photos/seed/aniketh/400/400" },
    { name: "Arjun Sachadeva", role: "Coach", team: "Coaching", bio: "Tennis coach in Fremont, CA.", img: "https://picsum.photos/seed/arjun/400/400" },
    { name: "Disha", role: "Coach", team: "Coaching", bio: "Tennis coach in Fremont, CA.", img: "https://picsum.photos/seed/disha/400/400" },
    { name: "Lucas", role: "Coach", team: "Coaching", bio: "Tennis coach in San Jose, CA.", img: "https://picsum.photos/seed/lucas/400/400" }
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
