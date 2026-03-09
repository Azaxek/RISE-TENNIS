import React from 'react';
import { motion } from 'motion/react';
import { Heart, DollarSign, Gift, Users, ArrowRight } from 'lucide-react';

export const DonatePage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">Get Involved</span>
          <h1 className="font-display text-6xl md:text-8xl font-black text-midnight mb-8 tracking-tighter">
            Support Our <br /> Mission.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-midnight/60 font-medium">
            Your support helps us provide equipment, coaching, and court time to children across the Bay Area.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "One-Time Donation",
              desc: "Every dollar goes directly toward equipment and court fees.",
              icon: <DollarSign className="w-8 h-8" />,
              options: ["$25", "$50", "$100", "Custom"]
            },
            {
              title: "Equipment Donation",
              desc: "Donate new or gently used rackets, balls, and tennis gear.",
              icon: <Gift className="w-8 h-8" />,
              options: ["Drop-off", "Ship to Us", "Local Pickup"],
              mailto: "mailto:rise.tennis28@gmail.com?subject=Equipment%20Donation%20Inquiry"
            },
            {
              title: "Corporate Support",
              desc: "Partner with R.I.S.E. to support youth athletics in your community.",
              icon: <Users className="w-8 h-8" />,
              options: ["Sponsorship", "Matching Gifts", "Volunteer Days"],
              mailto: "mailto:rise.tennis28@gmail.com?subject=Corporate%20Support%20Inquiry"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-midnight/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-tennis-neon rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-midnight mb-4">{card.title}</h3>
                <p className="text-midnight/60 font-medium mb-8 leading-relaxed">{card.desc}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {card.options.map((opt, idx) => (
                    <button key={idx} className="px-4 py-2 rounded-xl border border-midnight/10 text-sm font-bold hover:bg-midnight hover:text-white transition-all">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              {card.mailto ? (
                <a href={card.mailto} className="w-full bg-midnight text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-tennis-neon hover:text-midnight transition-all">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <button className="w-full bg-midnight text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-tennis-neon hover:text-midnight transition-all">
                  Select Option <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-midnight rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tennis-neon/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Your Impact</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-tennis-neon font-black text-4xl">$25</div>
                  <p className="text-white/60 font-medium">Provides a new racket and a set of balls for one student.</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-tennis-neon font-black text-4xl">$100</div>
                  <p className="text-white/60 font-medium">Covers court fees for a full month of weekend clinics.</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-tennis-neon font-black text-4xl">$500</div>
                  <p className="text-white/60 font-medium">Funds an entire community outreach event for 50+ kids.</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=800&h=600&auto=format&fit=crop"
                alt="Happy kids with tennis rackets"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
