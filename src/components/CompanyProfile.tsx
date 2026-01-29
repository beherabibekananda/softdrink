"use client";

import React from "react";

export default function CompanyProfile() {
    return (
        <section id="about" className="bg-black py-24 px-6 md:px-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Who We Are */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-4">Who We Are</h2>
                        <h3 className="font-alpino text-4xl md:text-6xl font-black leading-none mb-8">
                            Oxytrium Dynamics <br /> Pvt. Ltd.
                        </h3>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Founded in 2025, we are passionate about revolutionizing the functional food and beverage industry.
                            We empower stressed students and professionals across India's fast-paced urban landscape with
                            science-backed wellness through convenient lifestyle products.
                        </p>
                    </div>
                    <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur-xl">
                        <blockquote className="text-2xl font-medium italic text-slate-300">
                            "Our mission is to redefine health by moving beyond pills and powders, leading the market with innovative, everyday functional foods."
                        </blockquote>
                    </div>
                </div>

                {/* The Problem */}
                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-12 text-center">The Challenge</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-white/20 transition-colors">
                            <span className="text-5xl font-black text-white/10 mb-6 block">01</span>
                            <h4 className="text-xl font-bold mb-4">Chronic Fatigue</h4>
                            <p className="text-slate-500">Urban Indians (18-35) face extreme stress and weakened immunity due to demanding lifestyles.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-white/20 transition-colors">
                            <span className="text-5xl font-black text-white/10 mb-6 block">02</span>
                            <h4 className="text-xl font-bold mb-4">Synthetic Crashes</h4>
                            <p className="text-slate-500">Traditional energy drinks cause crashes and jitters. Many are even banned in major universities.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-white/20 transition-colors">
                            <span className="text-5xl font-black text-white/10 mb-6 block">03</span>
                            <h4 className="text-xl font-bold mb-4">Market Gap</h4>
                            <p className="text-slate-500">Lack of convenient, liquid solutions for holistic energy, stress relief, and gut health.</p>
                        </div>
                    </div>
                </div>

                {/* Our Solution */}
                <div className="relative rounded-[3rem] bg-gradient-to-br from-[#1a1a1a] to-black p-12 md:p-20 border border-white/10">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-4">Our Solution</h2>
                        <h3 className="font-alpino text-4xl md:text-6xl font-black leading-tight mb-8">
                            Instant Performance. <br /> Long-term Wellness.
                        </h3>
                        <div className="space-y-6 text-lg text-slate-400">
                            <p>
                                A sugar-free functional energy drink crafted with science-backed ingredients to deliver
                                active benefits: immunity support, stress relief, better focus, and gut health.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-white/60">
                                <li className="flex items-center gap-2">✓ Clean Energy</li>
                                <li className="flex items-center gap-2">✓ Gut Friendly</li>
                                <li className="flex items-center gap-2">✓ Stress Relief</li>
                                <li className="flex items-center gap-2">✓ Zero Sugar</li>
                            </ul>
                        </div>
                    </div>
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full" />
                </div>

            </div>
        </section>
    );
}
