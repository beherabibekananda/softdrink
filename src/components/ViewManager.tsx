"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import ProductGrid from "@/components/ProductGrid";
import CompanyProfile from "@/components/CompanyProfile";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

type ViewManagerProps = {
    slices: any;
};

const SECTIONS = [
    { id: "experience", label: "Experience", icon: "✨" },
    { id: "science", label: "The Science", icon: "🔬" },
    { id: "store", label: "Store", icon: "🥤" },
    { id: "team", label: "Squad", icon: "👥" },
];

export default function ViewManager({ slices }: ViewManagerProps) {
    const [activeTab, setActiveTab] = useState("experience");

    // Handle Hash Navigation
    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "experience") setActiveTab("experience");
            else if (hash === "menu") setActiveTab("store");
            else if (hash === "about") setActiveTab("science");
            else if (hash === "contact") setActiveTab("team");
        };

        handleHash();
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    // Scroll to top on tab change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "experience":
                return (
                    <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SliceZone slices={slices} components={components} />
                    </motion.div>
                );
            case "science":
                return (
                    <motion.div
                        key="science"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CompanyProfile />
                    </motion.div>
                );
            case "store":
                return (
                    <motion.div
                        key="store"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductGrid />
                    </motion.div>
                );
            case "team":
                return (
                    <motion.div
                        key="team"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TeamSection />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen bg-black">
            {/* Dynamic Navigation Sidebar/Bottom Bar */}
            <nav className="fixed left-0 top-0 bottom-0 z-[60] hidden flex-col justify-center gap-4 px-6 lg:flex">
                {SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${activeTab === section.id
                            ? "bg-white text-black shadow-2xl shadow-white/20"
                            : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        <span className="text-xl">{section.icon}</span>
                        <span className="absolute left-full ml-4 whitespace-nowrap rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-black opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                            {section.label}
                        </span>
                        {activeTab === section.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute -left-2 h-8 w-1 rounded-full bg-orange-500"
                            />
                        )}
                    </button>
                ))}
            </nav>

            {/* Mobile Bottom Navigation - Floating Glassmorphism */}
            <nav className="fixed bottom-8 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-1 rounded-[2.5rem] bg-black/60 p-2 backdrop-blur-3xl border border-white/10 lg:hidden shadow-2xl shadow-orange-500/10">
                {SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={`relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${activeTab === section.id
                            ? "text-black"
                            : "text-white/40 hover:text-white"
                            }`}
                    >
                        {activeTab === section.id && (
                            <motion.div
                                layoutId="mobile-active-bg"
                                className="absolute inset-0 rounded-full bg-white shadow-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 text-xl">{section.icon}</span>
                    </button>
                ))}
            </nav>

            {/* Content Area */}
            <main className="lg:pl-24 pb-32 lg:pb-0">
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </main>

            {/* Premium Footer */}
            <Footer />
        </div>
    );
}
