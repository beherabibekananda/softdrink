"use client";

import React from "react";

export default function CompanyProfile() {
    return (
        <section id="about" className="bg-black py-16 md:py-24 px-6 md:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">

                {/* Who We Are */}
                <div className="grid md:grid-cols-2 gap-10 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-4">Who We Are</h2>
                        <h3 className="font-alpino text-4xl md:text-6xl font-black leading-none mb-6 md:mb-8">
                            Oxytrium Dynamics <br className="hidden md:block" /> Pvt. Ltd.
                        </h3>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                            Founded in 2025, we are passionate about revolutionizing the functional food and beverage industry.
                            We empower stressed students and professionals across India's fast-paced urban landscape with
                            science-backed wellness through convenient lifestyle products.
                        </p>
                    </div>
                    <div className="bg-white/5 rounded-[2rem] p-6 md:p-8 border border-white/10 backdrop-blur-xl">
                        <blockquote className="text-xl md:text-2xl font-medium italic text-slate-300">
                            "Our mission is to redefine health by moving beyond pills and powders, leading the market with innovative, everyday functional foods."
                        </blockquote>
                    </div>
                </div>

                {/* The Problem */}
                <div>
                    <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-10 md:mb-12 text-center">The Challenge</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* 01 Chronic Fatigue */}
                        <div className="group relative rounded-[3rem] md:rounded-[4rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-700 aspect-[3/4.5] sm:aspect-[2/3.5] overflow-hidden flex flex-col">
                            {/* Image Visual */}
                            <div className="absolute inset-0 h-3/5 overflow-hidden">
                                <img src="/challenges/chronic-fatigue.png" alt="Chronic Fatigue" className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
                            </div>

                            <div className="relative z-10 p-8 md:p-10 mt-auto text-center">
                                <span className="text-5xl md:text-6xl font-black text-white/10 mb-4 block group-hover:text-orange-500/20 transition-colors">01</span>
                                <h4 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight">Chronic Fatigue</h4>
                                <p className="text-slate-500 leading-relaxed text-sm md:text-base">Urban Indians (18-35) face extreme stress and weakened immunity due to demanding lifestyles.</p>
                            </div>
                        </div>

                        {/* 02 Synthetic Crashes */}
                        <div className="group relative rounded-[3rem] md:rounded-[4rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-700 aspect-[3/4.5] sm:aspect-[2/3.5] overflow-hidden flex flex-col">
                            {/* Image Visual */}
                            <div className="absolute inset-0 h-3/5 overflow-hidden">
                                <img src="/challenges/synthetic-crashes.png" alt="Synthetic Crashes" className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
                            </div>

                            <div className="relative z-10 p-8 md:p-10 mt-auto text-center">
                                <span className="text-5xl md:text-6xl font-black text-white/10 mb-4 block group-hover:text-pink-500/20 transition-colors">02</span>
                                <h4 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight">Synthetic Crashes</h4>
                                <p className="text-slate-500 leading-relaxed text-sm md:text-base">Traditional energy drinks cause crashes and jitters. Many are even banned in major universities.</p>
                            </div>
                        </div>

                        {/* 03 Market Gap */}
                        <div className="group relative rounded-[3rem] md:rounded-[4rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-700 aspect-[3/4.5] sm:aspect-[2/3.5] overflow-hidden flex flex-col sm:col-span-2 lg:col-span-1">
                            {/* Image Visual */}
                            <div className="absolute inset-0 h-3/5 overflow-hidden">
                                <img src="/challenges/market-gap.png" alt="Market Gap" className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
                            </div>

                            <div className="relative z-10 p-8 md:p-10 mt-auto text-center">
                                <span className="text-5xl md:text-6xl font-black text-white/10 mb-4 block group-hover:text-purple-500/20 transition-colors">03</span>
                                <h4 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight">Market Gap</h4>
                                <p className="text-slate-500 leading-relaxed text-sm md:text-base">Lack of convenient, liquid solutions for holistic energy, stress relief, and gut health.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Solution */}
                <div className="relative rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-8 md:p-24 border border-white/10 overflow-hidden group">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-4">Our Solution</h2>
                        <h3 className="font-alpino text-3xl md:text-7xl font-black leading-[1.1] md:leading-none mb-8 md:mb-10 tracking-tighter">
                            Instant Performance. <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Long-term Wellness.</span>
                        </h3>
                        <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-slate-400 leading-relaxed">
                            <p>
                                A sugar-free functional energy drink crafted with science-backed ingredients to deliver
                                active benefits: immunity support, stress relief, better focus, and gut health.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/80">
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-orange-500" /> Clean Energy
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-pink-500" /> Gut Friendly
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-purple-500" /> Stress Relief
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-white" /> Zero Sugar
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Decorative Glow */}
                    <div className="absolute -top-1/2 -right-1/4 w-[100%] h-[200%] bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 blur-[120px] rounded-full group-hover:opacity-40 transition-opacity duration-1000" />
                </div>

            </div>
        </section>
    );
}
