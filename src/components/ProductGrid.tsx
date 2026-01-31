"use client";

import React, { Suspense } from "react";
import { PRODUCTS } from "@/constants/products";
import { useCart } from "@/hooks/useCart";
import { View, Environment } from "@react-three/drei";
import { SodaCan } from "@/components/SodaCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

export default function ProductGrid() {
    const addItem = useCart((state) => state.addItem);
    const isDesktop = useMediaQuery("(min-width: 768px)", true);

    return (
        <section id="menu" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-xl bg-white/5 text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] border border-white/10 mb-6"
                    >
                        Active_Archive_v4.2
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-alpino text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 italic"
                    >
                        CHOOSE YOUR <br />
                        <span className="text-orange-500">POWER</span> SOURCE
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto font-medium"
                    >
                        Bio-engineered formulations for cognitive endurance and physical peak.
                    </motion.p>
                </div>

                {/* Tactical Scroll Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial="initial"
                            whileInView="active"
                            viewport={{ margin: "-10%" }}
                            className="group h-[800px] relative"
                        >
                            {/* Glass Chamber - Background */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0.1, scale: 0.95 },
                                    active: { opacity: 1, scale: 1 }
                                }}
                                className="absolute inset-x-2 inset-y-0 rounded-[3.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent transition-all duration-1000 z-[10]"
                            />

                            {/* Holographic Specification Blade - Top Left (Volume) */}
                            <div className="absolute top-12 left-0 z-[160] origin-left -rotate-90 md:rotate-0 md:top-10 md:left-10">
                                <div className="relative group/spec">
                                    <div
                                        className="px-6 py-2 bg-black/80 backdrop-blur-xl border-l-4 border-orange-500 flex items-center gap-4 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-[7px] font-mono font-black text-white/30 uppercase tracking-[0.3em]">Volume_Ref</span>
                                            <span className="text-2xl font-black text-white tracking-tighter">330<span className="text-[10px] ml-1 opacity-20">ML</span></span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center overflow-hidden relative">
                                            <div className="absolute inset-0 bg-orange-500/10 animate-pulse" />
                                            <span className="text-[8px] font-mono text-orange-500 font-bold">V4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prismatic Technical Badge - Top Right (Price) */}
                            <div className="absolute top-8 right-8 z-[170]">
                                <div className="relative">
                                    {/* The Glow */}
                                    <div
                                        className="absolute inset-0 blur-2xl opacity-20 transition-all duration-1000 group-hover:opacity-40"
                                        style={{ backgroundColor: product.color }}
                                    />

                                    {/* The Tactical Shape */}
                                    <div
                                        className="relative bg-white text-black p-5 pr-10 shadow-2xl flex items-center gap-6 overflow-hidden"
                                        style={{
                                            clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)'
                                        }}
                                    >
                                        {/* Holographic Scanline */}
                                        <div className="absolute inset-0 w-2 bg-black/5 -translate-x-full animate-scan-fast pointer-events-none" />

                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                <span className="text-[8px] font-black tracking-[0.4em] uppercase opacity-40">Mkt_Val</span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-sm font-black opacity-30">₹</span>
                                                <span className="text-4xl font-black italic tracking-tighter leading-none">{product.price}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center gap-1 opacity-20">
                                            <div className="h-6 w-[1px] bg-black" />
                                            <span className="text-[8px] font-mono font-black vertical-lr rotate-180 uppercase">AUTH</span>
                                        </div>
                                    </div>

                                    {/* Accent Corner */}
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                                </div>
                            </div>

                            {/* The Chamber - Layout shifts automatically on visit */}
                            <div className="relative h-full w-full flex flex-col items-center justify-between py-16">

                                {/* Background ID Text */}
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0.02, x: 0 },
                                        active: { opacity: 0.08, x: -30 }
                                    }}
                                    className="absolute inset-0 z-[5] select-none pointer-events-none overflow-hidden flex items-center justify-center"
                                >
                                    <h3 className="text-[25vw] md:text-[14rem] font-black text-white uppercase leading-none tracking-tighter italic">
                                        {product.id.split('-')[1].slice(0, 3)}
                                    </h3>
                                </motion.div>

                                {/* 3D Can - Tactical Shift Left on scroll visit */}
                                <motion.div
                                    variants={{
                                        initial: { x: 0, scale: 1 },
                                        active: { x: "-20%", scale: 1.15 }
                                    }}
                                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                    className="relative h-[500px] w-full pointer-events-none z-20"
                                >
                                    <div className="h-full w-full">
                                        <Suspense fallback={null}>
                                            <View className="h-full w-full">
                                                <ambientLight intensity={1.5} />
                                                <spotLight position={[5, 10, 5]} intensity={35} color={product.color} />
                                                <SodaCan
                                                    flavor={
                                                        product.id === "apex-black" || product.id === "apex-stealth"
                                                            ? "rebeliveApex"
                                                            : (product.id.split("-")[1] as any)
                                                    }
                                                    scale={isDesktop ? 1.7 : 1.4}
                                                />
                                                <Environment preset="city" />
                                            </View>
                                        </Suspense>
                                    </div>
                                </motion.div>

                                {/* Right Panel Dossier - Slides in automatically on scroll visit */}
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0, x: 20 },
                                        active: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-44 md:w-64 z-[160] pointer-events-none"
                                >
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-[11px] font-mono font-black border-l-3 border-orange-500 pl-4 uppercase tracking-[0.4em] italic" style={{ color: product.color }}>
                                                {product.mission}
                                            </span>
                                            <div className="h-[1px] w-full bg-white/10" />
                                        </div>

                                        <div className="p-6 rounded-[2rem] bg-[#0c0c0c]/80 border border-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                                            <div className="flex items-center gap-2 mb-4 opacity-40">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                <span className="text-[9px] font-mono uppercase tracking-[0.3em] font-bold">Subject_Notes</span>
                                            </div>
                                            <p className="text-[11px] md:text-sm leading-relaxed text-slate-100 font-medium italic">
                                                "{product.description}"
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-end px-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono uppercase text-white/20 tracking-widest">Protocol_Active</span>
                                                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bottom Purchase Bar */}
                                <motion.div
                                    variants={{
                                        initial: { y: 20, opacity: 0 },
                                        active: { y: 0, opacity: 1 }
                                    }}
                                    className="relative z-[180] w-full px-6 md:px-10 mt-auto"
                                >
                                    <div className="flex items-center justify-between p-5 md:p-6 rounded-[2rem] bg-[#0d0d0d]/95 border border-white/5 shadow-3xl backdrop-blur-3xl transition-colors hover:border-orange-500/50">
                                        <div className="flex flex-col">
                                            <h4 className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter uppercase italic">{product.name}</h4>
                                            <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/20 mt-2">Ref_Series_4.2.0</span>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                useAuth.getState().openAuth();
                                                addItem({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    flavor: product.flavor,
                                                    image: product.image
                                                });
                                                useCart.getState().triggerAnimation(product.image, e.clientX, e.clientY);
                                            }}
                                            className="group/buy relative h-12 w-12 md:h-14 md:w-14 flex items-center justify-center overflow-hidden rounded-[1.2rem] bg-white transition-all duration-500 hover:rotate-90 active:scale-90 shadow-2xl"
                                        >
                                            <svg className="relative z-10 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M12 5v14M5 12h14" /></svg>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Specs Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center"
                >
                    <div className="flex flex-wrap justify-center gap-6 opacity-30 font-mono text-[10px] tracking-[0.5em] uppercase">
                        <span>Zero_Sugar</span>
                        <span className="text-orange-500">◈</span>
                        <span>Natural_B-Engineered</span>
                        <span className="text-orange-500">◈</span>
                        <span>Gut_Optimal</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
