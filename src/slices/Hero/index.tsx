"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { TextSplitter } from "@/components/TextSplitter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";

import { useStore } from "@/hooks/useStore";
import { useCart } from "@/hooks/useCart";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const addItem = useCart((state) => state.addItem);
  const toggleCart = useCart((state) => state.toggleCart);

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready) return;

      const introTL = gsap.timeline();

      introTL
        .set(".hero", { opacity: 1 })
        .from(".hero-char", {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          ease: "expo.out",
          duration: 1.5,
          delay: 0.5,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
          duration: 1,
        }, "-=0.5")
        .from(".hero-button", {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.3");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          { backgroundColor: "#0a0a0a" },
          { backgroundColor: "#000000", overwrite: "auto" },
          1.5,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready] },
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0 overflow-hidden"
    >
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen opacity-60">
        <Scene />
        <Bubbles speed={2} />
      </View>

      <div className="relative z-10 grid">
        <div className="grid min-h-screen place-content-center pt-20">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header perspective-1000 flex flex-wrap justify-center overflow-hidden">
              {"REBELIVE".split("").map((char, i) => (
                <span key={i} className="hero-char inline-block text-6xl font-black uppercase leading-[.8] text-white sm:text-8xl md:text-[12rem] lg:text-[15rem] italic tracking-tighter">
                  {char}
                </span>
              ))}
            </h1>

            <div className="hero-subheading mt-12 px-6 text-xl font-bold text-slate-200 sm:text-4xl lg:text-5xl text-balance max-w-4xl tracking-tight">
              REDEFINING <span className="text-orange-500">ENERGY</span> WITH SCIENCE-BACKED WELLNESS.
            </div>

            <div className="hero-body mt-6 px-6 text-base font-medium text-slate-400 max-w-2xl sm:text-xl lg:text-2xl leading-relaxed">
              Empowering high-performers to transcend cognitive boundaries and optimize physical output.
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 w-full max-w-md sm:max-w-none px-6">
              <button
                onClick={(e) => {
                  const image = "/labels/apex-black.png";
                  addItem({
                    id: "apex-black",
                    name: "REBELIVE Apex",
                    price: 125,
                    flavor: "Original Energy",
                    image: image
                  });
                  toggleCart();
                  useCart.getState().triggerAnimation(image, e.clientX, e.clientY);
                }}
                className="hero-button relative group overflow-hidden rounded-2xl bg-white px-10 py-5 text-center text-xl font-black uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">Deploy_Apex — ₹125</span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-black italic">
                  INITIALIZING...
                </span>
              </button>

              <a
                href="#menu"
                className="hero-button group rounded-2xl border-2 border-white/10 px-10 py-5 text-center text-xl font-black uppercase tracking-wider text-white transition-all hover:bg-white/5 hover:border-white/30 backdrop-blur-sm"
              >
                Access_Archive
              </a>
            </div>
          </div>
        </div>

        <div className="text-side relative z-[80] grid min-h-[70vh] items-center gap-12 md:grid-cols-2 py-32 px-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-xs font-mono uppercase tracking-[0.5em] text-orange-500 font-bold">Protocol_4.2</span>
            </div>
            <h2 className="text-side-heading text-balance text-5xl font-black uppercase text-white sm:text-7xl lg:text-9xl tracking-tighter italic">
              MODERN <br /> WELLNESS
            </h2>
            <div className="text-side-body max-w-xl text-balance text-lg font-medium text-slate-400 sm:text-xl leading-relaxed">
              Oxytrium Dynamics is architecting the future of human optimization. Bio-engineered functional nutrition for those who refuse to settle.
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="h-64 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
