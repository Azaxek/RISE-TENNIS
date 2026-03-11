import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Heart, ArrowRight, Music2, Youtube, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tennis3DAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-midnight flex items-center justify-center" style={{ perspective: "1200px" }}>
      {/* 3D Court Floor */}
      <motion.div
        initial={{ rotateX: 60, y: 100 }}
        className="relative w-[120%] h-[150%] border-[4px] border-white/20 bg-emerald-900/20 shadow-[0_0_100px_rgba(16,185,129,0.1)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Court Lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div className="h-1 bg-white/30 w-full"></div>
          <div className="h-1 bg-white/30 w-full"></div>
        </div>
        <div className="absolute inset-y-0 left-1/2 w-1 bg-white/40 -translate-x-1/2"></div>
        <div className="absolute inset-x-0 top-1/2 h-1 bg-white/20 -translate-y-1/2"></div>

        {/* Net (Vertical in 3D) */}
        <div
          className="absolute top-1/2 left-0 right-0 h-24 bg-white/10 border-t-2 border-white/40 -translate-y-full flex items-center justify-center overflow-hidden"
          style={{ transform: "rotateX(-90deg)", transformOrigin: "bottom" }}
        >
          <div className="w-full h-full opacity-20" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "4px 4px" }}></div>
        </div>

        {/* Far Player (Top) */}
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ transform: "translateZ(0)" }}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-tennis-neon flex items-center justify-center shadow-[0_0_20px_#DFFF00]">
            <Users className="text-tennis-neon w-8 h-8" />
          </div>
          <div className="w-1 h-16 bg-gradient-to-b from-tennis-neon to-transparent opacity-50"></div>
        </motion.div>

        {/* Near Player (Bottom) */}
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-energetic-orange flex items-center justify-center shadow-[0_0_30px_#F97316]">
            <Users className="text-energetic-orange w-12 h-12" />
          </div>
          <div className="w-1.5 h-24 bg-gradient-to-t from-energetic-orange to-transparent opacity-50"></div>
        </motion.div>

        {/* 3D Ball Arc */}
        <motion.div
          animate={{
            top: ["15%", "85%", "15%"],
            x: ["-15%", "15%", "-15%"],
            scale: [0.5, 1.5, 0.5],
            y: [0, -100, 0, -100, 0], // Simulating bounces
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-tennis-neon rounded-full shadow-[0_0_30px_#DFFF00] z-50"
        />
      </motion.div>

      {/* Atmospheric Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-midnight/80 pointer-events-none"></div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <Tennis3DAnimation />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md overflow-hidden">
          <img src="/rise-logo.png" alt="R.I.S.E. Tennis Logo" className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover shadow-[0_0_80px_rgba(223,255,0,0.4)]" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]"
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="w-8 h-14 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-1.5 h-3 bg-tennis-neon rounded-full shadow-[0_0_10px_#DFFF00]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const MissionHeadline = () => {
  return (
    <section className="py-24 bg-midnight text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-tennis-neon/20 text-tennis-neon text-xs font-black uppercase tracking-widest mb-6 border border-tennis-neon/30">
          Bay Area Youth-Led Non-Profit
        </span>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
          REACH.<br />
          <span className="text-tennis-neon">INSPIRE.</span><br />
          SERVE.<br />
          <span className="text-energetic-orange">EMPOWER.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-medium mb-12 leading-relaxed">
          Breaking financial and social barriers to make tennis accessible for every child in the Bay Area. Join our mission to transform lives through sport.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/programs" className="w-full sm:w-auto bg-tennis-neon text-midnight px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-tennis-neon/20 text-center">
            Find a Program
          </Link>
          <Link to="/about" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all duration-300 text-center">
            Our Mission
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=800&h=1000&auto=format&fit=crop"
                alt="Tennis community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-xl max-w-[240px] -rotate-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-energetic-orange rounded-full flex items-center justify-center">
                  <Heart className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-midnight tracking-tight">Youth-Led</span>
              </div>
              <p className="text-sm text-midnight/60 font-medium">
                Driven by passionate students who believe in the power of community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="font-display text-5xl md:text-6xl font-black text-midnight mb-8 leading-[1.1] tracking-tighter">
              More Than Just A Game.
            </h2>
            <div className="space-y-6 text-lg text-midnight/70 font-medium leading-relaxed">
              <p>
                R.I.S.E. Tennis was founded on a simple belief: every child, regardless of their background or financial situation, deserves the chance to pick up a racket and play.
              </p>
              <p>
                Based in Fremont and San Jose, we are a youth-led organization dedicated to removing the barriers that keep kids away from the court.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <h4 className="text-3xl font-black text-midnight mb-1">500+</h4>
                  <p className="text-sm text-midnight/50 font-bold uppercase tracking-wider">Kids Reached</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-midnight mb-1">100%</h4>
                  <p className="text-sm text-midnight/50 font-bold uppercase tracking-wider">Youth Driven</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 font-black text-midnight hover:gap-4 transition-all pt-4">
                Read Our Full Story <ArrowRight className="w-5 h-5 text-energetic-orange" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Fremont Spring Session",
      desc: "Our flagship program offering free lessons for all skill levels. All equipment provided. Sign up now!",
      icon: <Users className="w-6 h-6" />,
      color: "bg-tennis-neon",
      textColor: "text-midnight",
      link: "https://forms.gle/oYZfbAQ8E2e5b9K19"
    },
    {
      title: "Community Events",
      desc: "From local fundraisers to family play days, we bring the Bay Area together through the love of tennis.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-energetic-orange",
      textColor: "text-white"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-black text-midnight mb-6 tracking-tighter">
            Our Programs
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-midnight/60 font-medium">
            Tailored experiences for every skill level, focused on growth, accessibility, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-[#F8F9FA] border border-midnight/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-14 h-14 ${p.color} ${p.textColor} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                {p.icon}
              </div>
              <h3 className="text-2xl font-black text-midnight mb-4 tracking-tight">{p.title}</h3>
              <p className="text-midnight/60 font-medium mb-8 leading-relaxed">
                {p.desc}
              </p>
              {(p as any).link ? (
                <a href={(p as any).link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-midnight group-hover:gap-4 transition-all duration-300">
                  Register Now <ArrowRight className="w-5 h-5 text-energetic-orange" />
                </a>
              ) : (
                <Link to="/programs" className="flex items-center gap-2 font-black text-midnight group-hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5 text-energetic-orange" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Podcast = () => {
  return (
    <section id="podcast" className="py-24 bg-midnight text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
              <Music2 className="w-4 h-4 text-tennis-neon" />
              <span className="text-xs font-black uppercase tracking-widest">Featured Episode</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter">
              Tune into the <br />
              <span className="text-tennis-neon">Open Court</span> Podcast.
            </h2>
            <p className="text-xl text-white/60 font-medium mb-10 leading-relaxed max-w-xl">
              Conversations with players, coaches, and community leaders about sports accessibility and the transformative power of tennis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=AZff2TpCNkk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-midnight px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-tennis-neon transition-colors"
              >
                <Youtube className="w-5 h-5 text-red-600" /> Watch on YouTube
              </a>
              <a
                href="https://open.spotify.com/show/75nco6taCiXwgdpVnusTkf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-white/20 transition-colors"
              >
                <Play className="fill-current w-4 h-4" /> Listen on Spotify
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="Podcast Cover"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-1">Ep. 1: The R.I.S.E. Mission</h4>
                  <p className="text-white/40 font-bold uppercase tracking-wider text-xs">Open Court Podcast</p>
                </div>
              </div>

              <div className="flex items-end gap-1 h-16 mb-10">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, Math.random() * 60 + 10, 10] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                    className="flex-1 bg-tennis-neon/40 rounded-full"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button className="text-white/40 hover:text-white transition-colors"><SkipBack /></button>
                <a
                  href="https://www.youtube.com/watch?v=AZff2TpCNkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-tennis-neon text-midnight rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-tennis-neon/20"
                >
                  <Play className="fill-current ml-1" />
                </a>
                <button className="text-white/40 hover:text-white transition-colors"><SkipForward /></button>
                <div className="flex items-center gap-2 text-white/40">
                  <Volume2 className="w-5 h-5" />
                  <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-tennis-neon"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="events" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-energetic-orange font-black uppercase tracking-widest text-sm mb-4 block">Community Impact</span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-midnight mb-6 tracking-tighter">
            Our Courts, Our Community
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img
            src="/collage.png"
            alt="RISE Tennis Community Collage"
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-tennis-neon to-energetic-orange p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-midnight/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-black text-midnight mb-8 tracking-tighter leading-[0.9]">
            READY TO MAKE <br />A DIFFERENCE?
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-midnight/80 font-bold mb-12">
            We are always looking for passionate volunteers, coaches, and leaders to join our youth-led team.
          </p>
          <Link to="/team" className="inline-block bg-midnight text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-midnight/20">
            Join Our Team
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MissionHeadline />
      <About />
      <Programs />
      <Gallery />
      <Podcast />
      <CTA />
    </>
  );
};
