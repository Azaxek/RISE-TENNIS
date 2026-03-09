import React from 'react';
import { Trophy, Instagram, Youtube, Linkedin, Music2, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-midnight text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-tennis-neon rounded flex items-center justify-center">
                <Trophy className="text-midnight w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter">R.I.S.E. TENNIS</span>
            </div>
            <p className="text-white/50 font-medium leading-relaxed mb-8">
              Empowering the next generation of athletes through accessibility and community.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/rise.tennis/", label: "Instagram" },
                { Icon: Youtube, href: "https://www.youtube.com/@rise.tennis", label: "YouTube" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/risetennis", label: "LinkedIn" },
                { Icon: Music2, href: "https://open.spotify.com/show/75nco6taCiXwgdpVnusTkf", label: "Spotify" },
                { Icon: Facebook, href: "https://www.facebook.com/people/RISE-Tennis/61577964309677/", label: "Facebook" }
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-tennis-neon hover:text-midnight transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-tennis-neon">Quick Links</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-tennis-neon">Locations</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li>Fremont, CA</li>
              <li>San Jose, CA</li>
              <li>Bay Area, California</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-tennis-neon">Stay Updated</h4>
            <p className="text-white/50 text-sm font-medium mb-6">Join our newsletter for the latest updates and events.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-tennis-neon transition-colors"
              />
              <button className="bg-white text-midnight py-3 rounded-xl font-black text-sm hover:bg-tennis-neon transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/5 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 R.I.S.E. Tennis. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/admin" className="text-white/15 text-[10px] font-bold uppercase tracking-widest hover:text-white/40 transition-colors">
            Blogger Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
};
