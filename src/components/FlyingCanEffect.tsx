"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";

export default function FlyingCanEffect() {
    const { animatingCan, clearAnimation } = useCart();
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateTarget = () => {
            const cartBtn = document.getElementById("cart-button");
            if (cartBtn) {
                const rect = cartBtn.getBoundingClientRect();
                setTargetPos({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                });
            }
        };

        updateTarget();
        window.addEventListener("resize", updateTarget);
        return () => window.removeEventListener("resize", updateTarget);
    }, []);

    return (
        <AnimatePresence>
            {animatingCan && (
                <motion.div
                    initial={{
                        position: "fixed",
                        left: animatingCan.x,
                        top: animatingCan.y,
                        x: "-50%",
                        y: "-50%",
                        scale: 1,
                        opacity: 1,
                        zIndex: 9999,
                        pointerEvents: "none"
                    }}
                    animate={{
                        left: targetPos.x,
                        top: targetPos.y,
                        scale: 0.2,
                        opacity: [1, 1, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.45, 0, 0.55, 1]
                    }}
                    onAnimationComplete={clearAnimation}
                >
                    <div className="relative h-24 w-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                        {animatingCan.image && (
                            <img
                                src={animatingCan.image}
                                alt="flying beverage"
                                className="h-full object-contain"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
