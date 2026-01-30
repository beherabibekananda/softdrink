"use client";

import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import clsx from "clsx";
import { WavyCircles } from "./WavyCircles";
import { Group } from "three";

import gsap from "gsap";
import { useCart } from "@/hooks/useCart";

const SPINS_ON_CHANGE = 8;

const FLAVORS = [
  { id: "apex-black", flavor: "rebeliveApex" as const, color: "#000000", name: "REBELIVE Apex", price: 125, flavor_tag: "Original Energy", image: "/labels/apex-black.png" },
  { id: "apex-stealth", flavor: "rebeliveApex" as const, color: "#1e1e1e", name: "Apex Stealth", price: 125, flavor_tag: "Zero Sugar", image: "/labels/apex-black.png" },
  { id: "apex-midnight", flavor: "rebeliveApex" as const, color: "#3d00ad", name: "Apex Midnight", price: 150, flavor_tag: "Mental Focus", image: "/labels/midnight.png" },
  { id: "apex-volcano", flavor: "rebeliveApex" as const, color: "#690B3D", name: "Apex Volcano", price: 145, flavor_tag: "Thermogenic Fusion", image: "/labels/volcano.png" },
  { id: "apex-neon", flavor: "rebeliveApex" as const, color: "#164405", name: "Apex Neon", price: 145, flavor_tag: "Electrolyte Boost", image: "/labels/neon.png" },
];

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const addItem = useCart((state) => state.addItem);
  const toggleCart = useCart((state) => state.toggleCart);

  const sodaCanRef = useRef<Group>(null);

  // cycle through an array repeatedly without needing conditionals to check the bounds.
  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}` // -ve 8 rotations
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    )
      .to(
        ".background, .wavy-circles-outer, .-wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: -10,
          opacity: 0,
        },
        0,
      )
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: 0,
          opacity: 1,
        },
        0.7,
      );

  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carousel grid-rows-[auto, 4fr, auto] relative grid h-screen justify-center overflow-hidden bg-black py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#1a1a1a] opacity-50" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#333]" />

      <h2 className="relative text-center text-5xl font-bold">
        The APEX Range
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* left */}

        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="left"
          label="Previous Flavor"
        ></ArrowButton>

        {/* can */}

        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavorIndex].flavor}
              ref={sodaCanRef}
            />
          </Center>
          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />

          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        {/* right */}

        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="right"
          label="Next Flavor"
        ></ArrowButton>
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-black uppercase tracking-tight">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>

        <div className="mt-2 text-2xl font-bold text-orange-500">
          ₹{FLAVORS[currentFlavorIndex].price}
        </div>

        <button
          onClick={(e) => {
            const product = FLAVORS[currentFlavorIndex];
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              flavor: product.flavor_tag,
              image: product.image
            });
            toggleCart();
            useCart.getState().triggerAnimation(product.image, e.clientX, e.clientY);
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black uppercase text-black transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Add to Pack
        </button>
      </div>
    </section>
  );
};

type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
};

function ArrowButton({
  label,
  direction = "right",
  onClick,
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Carousel;
