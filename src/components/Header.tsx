"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const toggleCart = useCart((state) => state.toggleCart);
  const totalItems = useCart((state) => state.totalItems());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Science", href: "#about" },
    { name: "Store", href: "#menu" },
    { name: "Squad", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-black/10 backdrop-blur-xl border-b border-white/[0.03]">
        <Link href="#experience" className="group flex items-center gap-2">
          <div className="flex items-center">
            {"REBELIVE".split("").map((char, i) => (
              <span
                key={i}
                className="text-xl md:text-3xl font-black tracking-tighter text-white group-hover:text-orange-500 transition-colors duration-300"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="h-1 w-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          {/* Login Trigger */}
          <button
            onClick={() => useAuth.getState().openAuth()}
            className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            aria-label="Login"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity block border border-black" />
          </button>

          {/* Cart Trigger */}
          <button
            id="cart-button"
            onClick={toggleCart}
            className="group relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white text-black shadow-2xl transition-all hover:scale-105 active:scale-95"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-lg bg-orange-500 text-[10px] font-black text-white ring-2 ring-black animate-bounce">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <div className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`} />
              <div className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <div className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[190] bg-[#0d0d0d] pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-4">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Corporate_Protocol</span>
                <p className="text-slate-500 text-sm">Oxytrium Dynamics © 2026. <br />All systems operational.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}