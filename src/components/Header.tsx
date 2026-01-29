"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import clsx from "clsx";

export default function Header() {
  const toggleCart = useCart((state) => state.toggleCart);
  const totalItems = useCart((state) => state.totalItems());

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/10 backdrop-blur-md">
      <Link href="/" className="group flex items-center gap-2">
        <span className="text-2xl font-black tracking-tighter text-white md:text-3xl">
          REBELIVE
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-slate-300">
          Home
        </Link>
        <Link href="#about" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-slate-300">
          Who We Are
        </Link>
        <Link href="#menu" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-slate-300">
          Products
        </Link>
        <Link href="#contact" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-slate-300">
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleCart}
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Toggle Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white ring-2 ring-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}