"use client";

import React from "react";
import { PRODUCTS } from "@/constants/products";
import { useCart } from "@/hooks/useCart";
import { View, Environment, ContactShadows } from "@react-three/drei";
import { SodaCan } from "@/components/SodaCan";

export default function ProductGrid() {
    const addItem = useCart((state) => state.addItem);

    return (
        <section id="menu" className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#1a1a1a] via-[#222] to-[#1a1a1a] relative z-10">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/70 font-bold text-xs uppercase tracking-[0.3em] border border-white/15 mb-6">
                        Premium Collection
                    </span>
                    <h2 className="font-alpino text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
                        Choose Your <br />
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Power Source
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-lg mx-auto">
                        Six unique formulations. Zero sugar. Infinite possibilities.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PRODUCTS.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Can-Inspired Card */}
                            <div className="relative flex flex-col rounded-[3rem] md:rounded-[4rem] bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] p-6 md:p-8 transition-all duration-700 hover:scale-[1.05] hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-white/5 hover:border-white/20 aspect-[3/4.5] sm:aspect-[2/3.5] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">

                                {/* Metallic Sheen Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Product Glow Gradient */}
                                <div
                                    className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[150%] h-[60%] rounded-full blur-[100px] opacity-20 group-hover:opacity-60 transition-opacity duration-1000"
                                    style={{ backgroundColor: product.color }}
                                />

                                {/* 3D Can View - Enhanced Scale */}
                                <div className="relative h-[55%] mb-4 flex items-center justify-center pointer-events-auto">
                                    <div className="h-full w-full cursor-grab active:cursor-grabbing transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-3">
                                        <View className="h-full w-full">
                                            <ambientLight intensity={0.8} />
                                            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
                                            <SodaCan
                                                flavor={
                                                    product.id === "apex-black" || product.id === "apex-stealth"
                                                        ? "rebeliveApex"
                                                        : (product.id.split("-")[1] as any)
                                                }
                                                scale={1.4}
                                            />
                                            <ContactShadows opacity={0.4} scale={10} blur={3} far={1} />
                                            <Environment preset="city" />
                                        </View>
                                    </div>
                                </div>

                                {/* Product Info Section */}
                                <div className="relative z-10 mt-auto flex flex-col items-center text-center">
                                    {/* Flavor Badge */}
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 md:mb-4 backdrop-blur-md">
                                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-white/60">
                                            {product.flavor}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-alpino text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter">
                                        {product.name}
                                    </h3>

                                    {/* CTA Area */}
                                    <div className="w-full pt-4 md:pt-6 border-t border-white/5 flex flex-col items-center gap-3 md:gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xl md:text-2xl font-black text-white">₹{product.price}</span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                addItem({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    flavor: product.flavor,
                                                    image: product.image
                                                });
                                                useCart.getState().triggerAnimation(
                                                    product.image,
                                                    e.clientX,
                                                    e.clientY
                                                );
                                            }}
                                            className="w-full flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-white px-4 md:px-6 py-3 md:py-4 font-black uppercase text-black text-[10px] md:text-xs transition-all duration-300 hover:bg-orange-500 hover:text-white active:scale-95 shadow-2xl"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                                            Add to Pack
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Glow Accent */}
                                <div
                                    className="absolute -bottom-[10%] left-0 right-0 h-1/4 blur-[60px] opacity-10"
                                    style={{ backgroundColor: product.color }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className="text-slate-400 mb-4">All products contain zero sugar and natural caffeine</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest border border-white/10">
                            ✓ Sugar Free
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest border border-white/10">
                            ✓ Low Caffeine
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest border border-white/10">
                            ✓ Gut Friendly
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
