"use client";

import React from "react";

export default function TeamSection() {
    const team = [
        {
            name: "Krishna Yadav",
            title: "CEO",
            desc: "Visionary leader with 2+ years of experience in digital innovation."
        },
        {
            name: "Sai Vaishno",
            title: "COO",
            desc: "Leads operations, team building and global strategic partnerships."
        }
    ];

    return (
        <section className="bg-black py-16 md:py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-10 md:mb-12 text-center">Our Founding Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-white/20 aspect-auto md:aspect-[4/5] justify-center overflow-hidden py-16 md:py-12">
                            {/* Accent Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 size-32 md:size-40 rounded-full bg-white/5 mb-8 md:mb-10 flex items-center justify-center border-2 border-white/10 group-hover:border-orange-500/50 transition-colors duration-500 overflow-hidden">
                                <span className="text-5xl md:text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">👤</span>
                            </div>

                            <div className="relative z-10">
                                <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 block">{member.title}</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter">{member.name}</h3>
                                <p className="text-slate-500 max-w-xs mx-auto text-base md:text-lg leading-relaxed">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
