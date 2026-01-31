"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

export default function AuthModal() {
    const { isOpen, closeAuth } = useAuth();
    const [step, setStep] = useState(1); // 1: Identity, 2: OTP
    const [identity, setIdentity] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [authType, setAuthType] = useState<"email" | "mobile">("email");

    // Reset internal state when closed
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setIdentity("");
                setOtp(["", "", "", "", "", ""]);
            }, 500);
        }
    }, [isOpen]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAuth}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal Console */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                    >
                        {/* High-tech Header Scanline */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan" />

                        {/* Content */}
                        <div className="p-8 md:p-10">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-[1px] bg-orange-500" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-orange-500">Subject_Auth_Sequence</span>
                                </div>
                                <h2 className="font-alpino text-4xl font-black text-white uppercase italic tracking-tighter">
                                    {step === 1 ? "Initialize Link" : "Verify Pulse"}
                                </h2>
                            </div>

                            <AnimatePresence mode="wait">
                                {step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                            Access your premium wellness dashboard. Enter your unique identifier to proceed.
                                        </p>

                                        {/* Toggle Type */}
                                        <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-xl border border-white/5">
                                            <button
                                                onClick={() => setAuthType("email")}
                                                className={`flex-1 py-2 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all ${authType === 'email' ? 'bg-white text-black' : 'text-white/40'}`}
                                            >
                                                Email_Protocol
                                            </button>
                                            <button
                                                onClick={() => setAuthType("mobile")}
                                                className={`flex-1 py-2 text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all ${authType === 'mobile' ? 'bg-white text-black' : 'text-white/40'}`}
                                            >
                                                Mobile_ID
                                            </button>
                                        </div>

                                        <div className="relative mb-8">
                                            <input
                                                type={authType === 'email' ? 'email' : 'tel'}
                                                placeholder={authType === 'email' ? 'Enter Email Address' : 'Enter Mobile Number'}
                                                value={identity}
                                                onChange={(e) => setIdentity(e.target.value)}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white text-lg font-mono focus:border-orange-500 transition-colors outline-none placeholder:text-white/10"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                                        </div>

                                        <button
                                            onClick={() => identity && setStep(2)}
                                            className="w-full group relative overflow-hidden rounded-xl bg-orange-500 py-4 font-black uppercase italic tracking-widest text-white transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(249,115,22,0.2)] disabled:opacity-50"
                                            disabled={!identity}
                                        >
                                            <span className="relative z-10">Request_Access_Code</span>
                                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 tilt-skew-x-12" />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                            Transmission successful. Enter the 6-digit verification sequence sent to <span className="text-white font-mono">{identity}</span>.
                                        </p>

                                        <div className="flex justify-between gap-2 mb-8">
                                            {otp.map((digit, idx) => (
                                                <input
                                                    key={idx}
                                                    id={`otp-${idx}`}
                                                    type="text"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                    className="w-full h-14 bg-white/[0.03] border border-white/10 rounded-xl text-center text-2xl font-black text-white focus:border-orange-500 transition-colors outline-none"
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={closeAuth}
                                            className="w-full group relative overflow-hidden rounded-xl bg-white py-4 font-black uppercase italic tracking-widest text-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl"
                                        >
                                            <span className="relative z-10">Verify_Sequence</span>
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500" />
                                        </button>

                                        <button
                                            onClick={() => setStep(1)}
                                            className="w-full mt-4 text-[10px] uppercase font-mono tracking-[0.3em] text-white/20 hover:text-orange-500 transition-colors"
                                        >
                                            Re-initialize_Protocol
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer Branding */}
                        <div className="px-8 py-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Oxytrium_Dynamics // Network_v4.2</span>
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-1 w-4 bg-orange-500/20 rounded-full" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
