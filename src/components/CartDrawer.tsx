"use client";

import React, { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function CartDrawer() {
    const { items, isOpen, toggleCart, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            setIsSuccess(true);
            setTimeout(() => {
                clearCart();
            }, 500);
        }, 2000);
    };

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
                <div className="flex h-full flex-col p-6 md:p-8 relative overflow-hidden">
                    {/* Success Screen */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0f0f] p-8 text-center"
                            >
                                <div className="size-32 rounded-full bg-orange-500/10 flex items-center justify-center mb-8 relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 10 }}
                                        className="size-20 rounded-full bg-orange-500 flex items-center justify-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5" /></svg>
                                    </motion.div>
                                    {/* Confetti-like bits */}
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute size-2 rounded-sm bg-orange-500"
                                            initial={{ scale: 0, x: 0, y: 0 }}
                                            animate={{
                                                scale: [0, 1, 0],
                                                x: Math.cos(i * 45) * 60,
                                                y: Math.sin(i * 45) * 60,
                                                rotate: 360
                                            }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Mission <br /> Accomplished</h2>
                                <p className="text-gray-400 mb-10">Your REBELIVE fuel is being prepared for dispatch. Prepare for peak performance.</p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        toggleCart();
                                    }}
                                    className="w-full rounded-2xl border-2 border-white/10 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    Back to Base
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

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
                        {items.length === 0 && !isSuccess ? (
                            <div className="flex flex-1 flex-col items-center justify-center text-center p-4">
                                <div className="size-24 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Your pack is thirsty</h3>
                                <p className="text-gray-500 text-sm max-w-[200px] mb-8">Add some REBELIVE fuel to your collection to get started.</p>
                                <button
                                    onClick={() => {
                                        window.location.hash = "#menu";
                                        toggleCart();
                                    }}
                                    className="rounded-full bg-white/10 px-8 py-3 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center group">
                                    <div className="h-24 w-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-2 flex items-center justify-center border border-white/10 overflow-hidden">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="h-full object-contain transform group-hover:scale-110 transition-transform" />
                                        ) : (
                                            <div className="h-full w-4 rounded-sm bg-white/20 shadow-lg" />
                                        )}
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
                                            <span className="font-bold text-white">₹{(item.price * item.quantity).toFixed(0)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 text-gray-600 hover:text-red-500 transition-colors bg-white/5 rounded-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t border-white/5 pt-6 bg-[#0f0f0f] relative z-20">
                            <div className="flex items-center justify-between font-black text-2xl text-white mb-2">
                                <span className="text-sm uppercase tracking-[0.2em] text-white/40">Total Amount</span>
                                <span>₹{totalPrice().toFixed(0)}</span>
                            </div>
                            <button
                                disabled={isCheckingOut}
                                onClick={handleCheckout}
                                className={clsx(
                                    "mt-4 w-full rounded-2xl py-4 text-center font-black uppercase text-white shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3",
                                    isCheckingOut ? "bg-white/10 text-white" : "bg-orange-500 hover:bg-orange-600 shadow-orange-500/20 hover:shadow-orange-500/40"
                                )}
                            >
                                {isCheckingOut ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Verifying...
                                    </>
                                ) : (
                                    "Checkout Now"
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
