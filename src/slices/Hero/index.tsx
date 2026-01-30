"use client";

import { asText, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
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

  // we only render our view component if isDesktop is true
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      // if not ready, then don't load anything
      if (!ready) return;

      const introTL = gsap.timeline();

      introTL
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 4,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 0.8,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

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
          {
            backgroundColor: "#1a1a1a",
          },
          {
            backgroundColor: "#000000",
            overwrite: "auto",
          },
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
      className="hero opacity-0"
    >
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen">
        <Scene />
        <Bubbles speed={2} />
      </View>

      <div className="grid">
        <div className="grid h-screen place-content-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-5xl font-black uppercase leading-[.8] text-white sm:text-7xl md:text-[9rem] lg:text-[13rem]">
              <span className="hero-header-word block">REBELIVE</span>
            </h1>

            <div className="hero-subheading mt-8 text-3xl font-semibold text-slate-300 sm:text-5xl lg:text-6xl text-balance">
              Redefining Energy with Science-Backed Wellness.
            </div>

            <div className="hero-body mt-4 text-lg font-normal text-slate-400 max-w-2xl sm:text-2xl">
              Empowering stressed students and professionals to enhance performance and productivity.
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
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
                className="hero-button w-full sm:w-auto inline-block rounded-xl bg-white px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-black transition-colors duration-150 hover:bg-orange-500 hover:text-white md:text-2xl shadow-xl shadow-white/10"
              >
                Buy Now — ₹125
              </button>
              <a
                href="#menu"
                className="hero-button w-full sm:w-auto inline-block rounded-xl border-2 border-white/20 px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-all duration-150 hover:bg-white/10 md:text-2xl"
              >
                View Collection
              </a>
            </div>
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-side-heading text-balance text-4xl font-black uppercase text-white sm:text-6xl lg:text-8xl">
              Modern Wellness
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-lg font-normal text-slate-300 sm:text-xl">
              Oxytrium Dynamics is leading the market with innovative, everyday functional foods and beverages. Lead the movement.
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
