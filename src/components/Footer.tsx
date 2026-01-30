"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-black to-[#050505] text-white py-24 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">Let's Connect.</h2>
            <p className="text-xl text-slate-500 max-w-md">
              Join us in our journey to redefine energy and wellness for the modern world.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-white/30 block mb-2">Email Us</span>
              <a href="mailto:sai.vaishno@rebelive.com" className="text-2xl font-bold hover:text-orange-500 transition-colors">
                sai.vaishno@rebelive.com
              </a>
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-white/30 block mb-2">Call Us</span>
              <a href="tel:+916204395289" className="text-2xl font-bold hover:text-orange-500 transition-colors">
                +91 6204395289
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <span className="text-3xl font-black tracking-tighter">REBELIVE</span>
          <p className="text-sm text-slate-600">
            © 2026 Oxytrium Dynamics Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}