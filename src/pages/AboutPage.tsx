import React from 'react';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      {/* Header Section */}
      <section className="bg-midnight pt-40 pb-20 text-center">
        <h1 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter">
          About Us
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Quote and Founders Images Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -top-10 -left-6 text-midnight/10 text-9xl font-serif">&ldquo;</span>
              <p className="text-4xl text-midnight font-medium leading-relaxed italic relative z-10" style={{ fontFamily: "'Georgia', serif" }}>
                RISE Tennis was founded because tennis changed our lives. Now, we want to change others'.
              </p>
              <span className="absolute -bottom-16 right-10 text-midnight/10 text-9xl font-serif">&rdquo;</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              <div className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl translate-y-8">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600&h=800&auto=format&fit=crop"
                  alt="Founder 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-48 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&auto=format&fit=crop"
                  alt="Founder 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Cards */}
        <section className="mb-32 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-midnight/5 rounded-[2rem] p-12 text-center shadow-sm hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-black text-midnight mb-4">Our Mission</h2>
            <div className="w-12 h-0.5 bg-energetic-orange mx-auto mb-8"></div>
            <p className="text-midnight/70 text-xl italic font-serif leading-relaxed">
              Breaking barriers so anyone can play tennis and experience the sport's physical, mental, and social benefits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-midnight/5 rounded-[2rem] p-12 text-center shadow-sm hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-black text-midnight mb-4">Our Vision</h2>
            <div className="w-12 h-0.5 bg-tennis-neon mx-auto mb-8"></div>
            <p className="text-midnight/70 text-xl italic font-serif leading-relaxed">
              A world where everyone can play tennis no matter what their situation may be.
            </p>
          </motion.div>
        </section>

        {/* Two Pillars Section */}
        <section className="mb-40 text-center">
          <h2 className="text-4xl font-black text-midnight mb-4 tracking-tighter">Our Two Pillars</h2>
          <p className="text-midnight/60 mb-16 text-lg max-w-2xl mx-auto font-medium">
            Our mission: Break barriers to tennis access and inspire youth everywhere. Here's how we're making it happen.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 border border-midnight/5 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-tennis-neon/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-6 h-6 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-midnight mb-4">Access & Equipment</h3>
              <p className="text-midnight/60 mb-10 font-medium">
                Clinics, fundraisers, and equipment drives so every youth can play, regardless of background.
              </p>
              <div className="w-full mb-2">
                <div className="flex justify-center mb-3">
                  <span className="text-energetic-orange font-bold text-sm">2025 Goal: $5,000</span>
                </div>
                <div className="w-full bg-midnight/5 rounded-full h-3">
                  <div className="bg-tennis-neon h-3 rounded-full shadow-sm shadow-tennis-neon/30" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-center mt-3">
                  <span className="text-midnight/50 text-sm font-bold">$5,300 raised of $5,000</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-10 border border-midnight/5 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-energetic-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-6 h-6 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-midnight mb-4">Awareness & Outreach</h3>
              <p className="text-midnight/60 mb-10 font-medium">
                Storytelling, podcasting, and social content to spark inspiration and spread the benefits of tennis.
              </p>
              <div className="w-full mb-2">
                <div className="flex justify-center mb-3">
                  <span className="text-energetic-orange font-bold text-sm">2025 Goal: 100,000 views</span>
                </div>
                <div className="w-full bg-midnight/5 rounded-full h-3">
                  <div className="bg-energetic-orange h-3 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="flex justify-center mt-3">
                  <span className="text-midnight/50 text-sm font-bold">50,000 reached of 100,000</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">Our Journey</span>
            <h2 className="font-display text-5xl md:text-7xl font-black text-midnight tracking-tighter">
              Our Story
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-midnight/10 hidden md:block"></div>

            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-32">
              <div className="hidden md:block absolute left-1/2 -ml-2.5 w-5 h-5 bg-tennis-neon rounded-full z-10 shadow-lg shadow-tennis-neon/30"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0">
                <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[3/2]">
                  <img src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=800&h=533&auto=format&fit=crop" alt="Tennis court action" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%]">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-midnight/5">
                  <h3 className="text-2xl font-black text-midnight mb-4">The Foundation</h3>
                  <p className="text-midnight/60 leading-relaxed font-medium">
                    For both of us, the sport has been more than just a game. Over the years, it has shaped our character — giving us the discipline to set ambitious goals, the mindset to train with intention, and the mental toughness to push through setbacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row-reverse justify-between items-center w-full mb-32">
              <div className="hidden md:block absolute left-1/2 -ml-2.5 w-5 h-5 bg-energetic-orange rounded-full z-10 shadow-lg shadow-energetic-orange/30"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0">
                <div className="flex gap-4 h-full justify-center md:justify-start">
                  <div className="rounded-[2rem] overflow-hidden shadow-lg w-1/2 aspect-square">
                    <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=400&h=400&auto=format&fit=crop" alt="Founder 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-lg w-1/2 aspect-square">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop" alt="Founder 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[45%]">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-midnight/5">
                  <h3 className="text-2xl font-black text-midnight mb-4">The Bond</h3>
                  <p className="text-midnight/60 leading-relaxed font-medium">
                    It's kept us focused, balanced, and resilient. On and off the court, tennis formed our foundation through shared experiences and challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-32">
              <div className="hidden md:block absolute left-1/2 -ml-2.5 w-5 h-5 bg-tennis-neon rounded-full z-10 shadow-lg shadow-tennis-neon/30"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0">
                <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[3/2]">
                  <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&h=533&auto=format&fit=crop" alt="Tennis rackets" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%]">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-midnight/5">
                  <h3 className="text-2xl font-black text-midnight mb-4">The Recognition</h3>
                  <p className="text-midnight/60 leading-relaxed font-medium">
                    Our passion turned into purpose when we realized that tennis isn't equally available to everyone. Cost and access issues create barriers that prevent many from experiencing the transformative power of the sport.
                  </p>
                </div>
              </div>
            </div>

            {/* Event 4 */}
            <div className="relative flex flex-col md:flex-row-reverse justify-between items-center w-full">
              <div className="hidden md:block absolute left-1/2 -ml-2.5 w-5 h-5 bg-energetic-orange rounded-full z-10 shadow-lg shadow-energetic-orange/30"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0 flex justify-center md:justify-end">
                <div className="bg-midnight p-16 rounded-[2rem] shadow-xl flex items-center justify-center w-full aspect-square md:aspect-auto">
                  <svg className="w-32 h-32 text-tennis-neon/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              </div>
              <div className="w-full md:w-[45%]">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-midnight/5">
                  <h3 className="text-2xl font-black text-midnight mb-4">The Formation of RISE</h3>
                  <p className="text-midnight/60 leading-relaxed font-medium">
                    We founded RISE Tennis with one goal in mind: to spread the love of tennis. Starting with social media posts and team building, we launched in the summer and have been growing our organization ever since.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
