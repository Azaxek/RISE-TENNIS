import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProgramsPage = () => {
  const programs = [
    {
      title: "Fremont Spring Session",
      location: "Central Park, Fremont",
      time: "Sign Ups Open",
      desc: "Our flagship program offering weekly sessions for all skill levels. All equipment is provided, including rackets and balls. Sign up through our registration form!",
      details: ["Ages 6-14", "Beginner to Intermediate", "Free Equipment Provided", "Student-to-Coach ratio 4:1"],
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-tennis-neon",
      textColor: "text-midnight",
      link: "https://forms.gle/oYZfbAQ8E2e5b9K19",
      cta: "Register Now"
    },
    {
      title: "Community Outreach",
      location: "Various Bay Area Parks",
      time: "Monthly Events",
      desc: "One-day clinics and community play days designed to bring families together and spark an interest in tennis.",
      details: ["All Ages Welcome", "Family Friendly", "Community Building", "Guest Speakers"],
      icon: <Users className="w-8 h-8" />,
      color: "bg-energetic-orange",
      textColor: "text-white"
    },
    {
      title: "Become a Member",
      location: "R.I.S.E. Tennis",
      time: "Always Open",
      desc: "Officially join the R.I.S.E. Tennis family! Fill out our membership form to stay connected, receive updates, and be part of our growing community.",
      details: ["All Ages Welcome", "Stay Informed", "Community Access", "Support Our Mission"],
      icon: <Users className="w-8 h-8" />,
      color: "bg-midnight",
      textColor: "text-tennis-neon",
      link: "https://docs.google.com/forms/d/1Bk3P6-7Gxs6Q7mMyaYFTpO1Xnaz-yqRW7AUNvZtabsA/viewform",
      cta: "Join Now"
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
          <span className="text-tennis-neon font-black uppercase tracking-widest text-sm mb-4 block bg-midnight inline-block px-4 py-1 rounded-full">Our Programs</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Find Your <br /> Perfect Program.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-midnight/60 font-medium">
            We offer a variety of programs across the Bay Area designed to make tennis fun, accessible, and inclusive for everyone.
          </p>
        </motion.div>

        <div className="space-y-12">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-midnight/5 flex flex-col lg:flex-row"
            >
              <div className={`lg:w-1/3 ${p.color} ${p.textColor} p-12 flex flex-col justify-between`}>
                <div>
                  <div className="mb-8">{p.icon}</div>
                  <h2 className="text-3xl font-black mb-2 tracking-tight">{p.title}</h2>
                  <p className="font-bold opacity-70 uppercase tracking-widest text-xs">{p.location}</p>
                </div>
                <div className="mt-8">
                  <span className="text-sm font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-full">
                    {p.time}
                  </span>
                </div>
              </div>
              <div className="lg:w-2/3 p-12 flex flex-col justify-between">
                <div>
                  <p className="text-xl text-midnight/70 font-medium leading-relaxed mb-8">
                    {p.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {p.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-midnight/60 font-bold">
                        <div className="w-2 h-2 rounded-full bg-tennis-neon"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="bg-midnight text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 self-start hover:bg-tennis-neon hover:text-midnight transition-all">
                    {(p as any).cta ?? 'Register Now'} <ArrowRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-black text-midnight mb-12 tracking-tight">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { q: "Do I need my own racket?", a: "No! We provide rackets and balls for all participants during our sessions." },
              { q: "Is there a cost to join?", a: "Most of our programs are completely free. Some specialized clinics may have a nominal fee to cover court costs." },
              { q: "What should I wear?", a: "Comfortable athletic clothing and non-marking tennis shoes or sneakers are recommended." },
              { q: "How do I volunteer?", a: "Check out our 'Join Our Team' section on the Get Involved page!" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-midnight/5 shadow-sm">
                <h4 className="text-lg font-black text-midnight mb-3">{item.q}</h4>
                <p className="text-midnight/60 font-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
