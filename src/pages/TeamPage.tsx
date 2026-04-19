import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Trophy, Star } from 'lucide-react';

import imgHarshil from '../assets/members/harshil.jpeg';
import imgAnanya from '../assets/members/ananya.jpg';
import imgHarshal from '../assets/members/harshal.webp';
import imgMoksha from '../assets/members/moksha.webp';
import imgRishabh from '../assets/members/rishabh.jpeg';
import imgIshaan from '../assets/members/ishaan.webp';
import imgSaanvi from '../assets/members/saanvi.webp';
import imgElizabeth from '../assets/members/elizabeth.webp';
import imgLeina from '../assets/members/leina.webp';
import imgAvinash from '../assets/members/avinash.webp';
import imgSharon from '../assets/members/sharon.webp';
import imgAniketh from '../assets/members/aniketh.jpeg';
import imgArjun from '../assets/members/arjun.png';
import imgDisha from '../assets/members/disha.jpg';

export const TeamPage = () => {
  const team = [
    {
      name: "Harshil Shah",
      role: "President",
      team: "Executive",
      bio: "I've been playing and competing in tennis for over five years, and it's become my passion and source of joy. I've realized the immense benefits the sport offers, and I want everyone to experience them.",
      img: imgHarshil
    },
    {
      name: "Ananya Rawlani",
      role: "President",
      team: "Executive",
      bio: "I have been playing tennis for almost ten years now. It is my all time favorite sport, and I love the way the game works. I hope that everyone has the ability to experience the joy I feel when I play the game!",
      img: imgAnanya
    },
    {
      name: "Harshal Shah",
      role: "Vice President",
      team: "Executive",
      bio: "I started playing tennis around 4 years ago, and started playing tournaments regularly around 3 years ago. I really enjoy this game since it helps build you physically and mentally. When I heard about RISE I was very excited to join and help introduce the awesomeness of tennis to younger kids. I look forward to contributing to RISE Tennis.",
      img: imgHarshal
    },
    {
      name: "Moksha Rawlani",
      role: "Vice President",
      team: "Executive",
      bio: "I've been playing tennis since the age of 5 or 6, and since then, it's been an integral part of my life. From playing with my dad and sister at a young age to being captain of the high school tennis team, I've always loved playing. I align with the goals of R.I.S.E. Tennis and hope to make tennis accessible for everyone.",
      img: imgMoksha
    },
    {
      name: "Rishabh Shah",
      role: "Vice President",
      team: "Executive",
      bio: "I started playing tennis back in COVID with my younger brother to stay active, and it slowly grew to be more than just a sport to me. Tennis has provided me with wonderful experiences, and I want to extend this opportunity to play sports to everyone.",
      img: imgRishabh
    },
    {
      name: "Rahul",
      role: "Head Manager",
      team: "Management",
      bio: "Head Manager of operations at R.I.S.E. Tennis, keeping everything running smoothly behind the scenes.",
      img: "https://picsum.photos/seed/rahul-rise/400/400"
    },
    {
      name: "Arjan",
      role: "Technology Director",
      team: "Website",
      bio: "Handling website architecture and all things technology for R.I.S.E. Tennis.",
      img: "https://picsum.photos/seed/arjan-rise/400/400"
    },
    {
      name: "Ishaan Joshi",
      role: "Outreach Director",
      team: "Outreach",
      bio: "I started playing tennis around two years ago, shortly before joining my high school team. The sport has given me wonderful friendships and moments that I'll always cherish. I chose to be a part of R.I.S.E. Tennis as a way to make the sport more accessible and share its benefits with others.",
      img: imgIshaan
    },
    {
      name: "Riddhi C.",
      role: "Outreach Director",
      team: "Outreach",
      bio: "Hi everyone! I'm Riddhi, a sophomore at American High School. I joined RISE because I loved the idea of being part of a team that values passion, hard work, and growth. I'm so excited to work, learn, improve, and have fun with all of you!",
      img: "https://picsum.photos/seed/riddhi-rise/400/400"
    },
    {
      name: "Avanthika",
      role: "Outreach Director",
      team: "Outreach",
      bio: "Leading outreach efforts in Philadelphia, PA, bringing the joy of tennis to new communities.",
      img: "https://picsum.photos/seed/avanthika-rise/400/400"
    },
    {
      name: "Saanvi Bachamada",
      role: "Volunteer",
      team: "Outreach",
      bio: "My best friend is a tennis player and I've seen how it has positively affected her life in so many ways. Tennis always seemed like an elite sport to me, so R.I.S.E. was the perfect opportunity to help make it more accessible and learn more about how to do that.",
      img: imgSaanvi
    },
    {
      name: "Elizabeth George",
      role: "Volunteer",
      team: "Outreach",
      bio: "I got introduced to tennis when my little brother started playing a year ago. I've watched my parents struggle to find good affordable coaches and courses for him and so when I saw R.I.S.E. Tennis applications I loved the goal and went for it!",
      img: imgElizabeth
    },
    {
      name: "Leina Ikeda",
      role: "Volunteer",
      team: "Outreach",
      bio: "Hi! I'm Leina, and I play numerous sports like cross country, soccer, and baseball. I have never played tennis before, but was intrigued by this program to make it accessible to all. I enjoy graphic design and website creation, and designing the RISE Tennis website has been a brilliant opportunity to apply these interests. I look forward to further contributing to RISE Tennis!",
      img: imgLeina
    },
    {
      name: "Avinash Kasturi",
      role: "Volunteer",
      team: "Outreach",
      bio: "I have been playing and competing competitively in tennis for around six years now, and want to share my passion with others. Some don't have access to tennis or have limited resources, so my goal is to change that!",
      img: imgAvinash
    },
    {
      name: "Karan",
      role: "Volunteer",
      team: "Outreach",
      bio: "Passionate volunteer helping to grow R.I.S.E. Tennis's outreach and community impact.",
      img: "https://picsum.photos/seed/karan-rise/400/400"
    },
    {
      name: "Anushka",
      role: "Volunteer",
      team: "Outreach",
      bio: "Hi everyone! My name is Anushka, and I'm a sophomore at River Island High School. I'm so grateful to be a part of RISE and I'm excited to work hard and grow alongside all of you. I can't wait to get to know everyone better and make the most of this experience!",
      img: "https://picsum.photos/seed/anushka-rise/400/400"
    },
    {
      name: "Mishka",
      role: "Volunteer",
      team: "Outreach",
      bio: "A dedicated volunteer contributing to R.I.S.E. Tennis's mission of making the sport accessible to all.",
      img: "https://picsum.photos/seed/mishka-rise/400/400"
    },
    {
      name: "Sharon Lui",
      role: "Coach",
      team: "Coaching",
      bio: "I started playing tennis for fun while testing out different sports at a young age. Tennis was the only sport that really stuck to me. I decided to come back to playing tennis recently and joined the MSJ girls' tennis team. I hope I can coach incoming players at RISE Tennis and help them overcome the difficulties that I went through while relearning how to play!",
      img: imgSharon
    },
    {
      name: "Aniketh Nadipati",
      role: "Coach",
      team: "Coaching",
      bio: "I'm Aniketh. I have played tennis for 4 years. I like tennis because it's fun to play. I played with Harshal for a year and a half. I was excited to join because I want to help young kids grow their passion for tennis.",
      img: imgAniketh
    },
    {
      name: "Arjun Sachadeva",
      role: "Coach",
      team: "Coaching",
      bio: "I've been playing tennis for almost 8 years now starting at the age of 7; unfortunately, half of those years were spent dealing with an arm injury. I finally decided to come back to tennis and joined JV for MSJ's tennis team. I hope I'll be able to help other players with difficulties while playing tennis.",
      img: imgArjun
    },
    {
      name: "Disha",
      role: "Coach",
      team: "Coaching",
      bio: "Hi, I'm Disha! I've been playing tennis for most of my life and although I didn't always like it, it's become a fundamental part of my life. I've gained so many friends and memories through it like joining the MSJ girls tennis team! I want to join RISE to help others have the same opportunities!",
      img: imgDisha
    },
    {
      name: "Shrisha",
      role: "Coach",
      team: "Coaching",
      bio: "A passionate tennis coach dedicated to helping young players develop their skills and love for the game at R.I.S.E. Tennis.",
      img: "https://picsum.photos/seed/shrisha-rise/400/400"
    },
    {
      name: "Lucas",
      role: "Coach",
      team: "Coaching",
      bio: "Helping young players grow their game and passion for tennis at R.I.S.E. Tennis.",
      img: "https://picsum.photos/seed/lucas-rise/400/400"
    }
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
