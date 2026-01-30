"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";

export default function Toast() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const items = useCart((state) => state.items);
    const [lastCount, setLastCount] = useState(0);

    useEffect(() => {
        const currentCount = items.reduce((acc, item) => acc + item.quantity, 0);
        if (currentCount > lastCount) {
            const lastItem = items[items.length - 1];
            setMessage(`${lastItem.name} added to pack!`);
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
        setLastCount(currentCount);
    }, [items]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className="fixed bottom-10 left-1/2 z-[100] -translate-x-1/2 pointer-events-none"
                >
                    <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-2xl shadow-orange-500/20 border border-orange-500/10">
                        <div className="flex size-8 items-center justify-center rounded-full bg-orange-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        </div>
                        <span className="font-bold text-black uppercase tracking-wider text-sm">
                            {message}
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
