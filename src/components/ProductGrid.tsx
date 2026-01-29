"use client";

import React from "react";
import { PRODUCTS } from "@/constants/products";
import { useCart } from "@/hooks/useCart";
import { View } from "@react-three/drei";
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
                            {/* Card */}
                            <div className="relative flex flex-col rounded-[2rem] bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 border border-white/10 hover:border-white/25 overflow-hidden">

                                {/* Animated Gradient Border */}
                                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div
                                        className="absolute inset-[-1px] rounded-[2rem] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        style={{
                                            background: `linear-gradient(135deg, transparent, ${product.color}40, transparent)`
                                        }}
                                    />
                                </div>

                                {/* Product Glow */}
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 rounded-full blur-[80px] opacity-10 group-hover:opacity-40 transition-opacity duration-700"
                                    style={{ backgroundColor: product.color }}
                                />

                                {/* 3D Can View */}
                                <div className="relative aspect-square mb-6 flex items-center justify-center pointer-events-auto">
                                    <div className="h-full w-full cursor-grab active:cursor-grabbing transition-transform duration-500 group-hover:scale-110">
                                        <View className="h-full w-full">
                                            <SodaCan flavor="rebeliveApex" scale={1.2} />
                                        </View>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="relative z-10 flex-1 flex flex-col">
                                    {/* Flavor Tag */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: product.color }}
                                        />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                                            {product.flavor}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-alpino text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-white transition-colors">
                                        {product.name}
                                    </h3>

                                    {/* Price & CTA */}
                                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white/40 uppercase tracking-widest">Price</span>
                                            <span className="text-2xl font-black text-white">₹{product.price}</span>
                                        </div>
                                        <button
                                            onClick={() => addItem({
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                flavor: product.flavor,
                                                image: product.image
                                            })}
                                            className="relative overflow-hidden flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black text-sm transition-all duration-300 hover:bg-slate-100 active:scale-95 shadow-lg shadow-white/10 group/btn"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                                                Add
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${product.color}, transparent 70%)`
                                    }}
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
