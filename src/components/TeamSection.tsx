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
        <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/40 mb-12 text-center">Our Founding Team</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5">
                            <div className="size-32 rounded-full bg-white/5 mb-8 flex items-center justify-center border border-white/10">
                                <span className="text-4xl">👤</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2">{member.name}</h3>
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">{member.title}</span>
                            <p className="text-slate-500">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
