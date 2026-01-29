"use client";

import React from "react";
import { useCart } from "@/hooks/useCart";
import clsx from "clsx";

export default function CartDrawer() {
    const { items, isOpen, toggleCart, updateQuantity, removeItem, totalPrice } = useCart();

    return (
        <>
            {/* Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300",
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={toggleCart}
            />

            {/* Drawer */}
            <aside
                className={clsx(
                    "fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-[#0f0f0f] shadow-2xl transition-transform duration-500 ease-out md:rounded-l-3xl border-l border-white/5",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex h-full flex-col p-8">
                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                        <h2 className="font-alpino text-3xl font-black text-white">Your Pack</h2>
                        <button
                            onClick={toggleCart}
                            className="rounded-full p-2 text-white transition-colors hover:bg-white/5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-8 flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
                        {items.length === 0 ? (
                            <div className="flex h-40 flex-col items-center justify-center text-center">
                                <p className="text-gray-500 font-medium">Your pack is empty.</p>
                                <button
                                    onClick={toggleCart}
                                    className="mt-4 font-bold text-white underline decoration-2 underline-offset-4 hover:text-slate-300"
                                >
                                    Start Adding
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white/5 p-2 flex items-center justify-center border border-white/10">
                                        <div className="h-full w-4 rounded-sm bg-white/20 shadow-lg" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white">{item.name}</h3>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">{item.flavor}</p>
                                        <div className="mt-2 flex items-center gap-3">
                                            <div className="flex items-center rounded-full border border-white/10 p-1 bg-white/5">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 text-white"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 text-white"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-1 text-gray-600 hover:text-red-500 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t border-white/5 pt-6">
                            <div className="flex items-center justify-between font-black text-2xl text-white">
                                <span>Total</span>
                                <span>${totalPrice().toFixed(2)}</span>
                            </div>
                            <button className="mt-6 w-full rounded-2xl bg-white py-4 text-center font-black uppercase text-black shadow-xl shadow-white/5 transition-transform active:scale-95 hover:bg-slate-100">
                                Checkout Now
                            </button>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
