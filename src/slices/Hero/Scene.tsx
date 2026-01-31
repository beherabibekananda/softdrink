"use client";

import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";
import { useRef } from "react";
import { Group } from "three";
import ScrollTrigger from "gsap/ScrollTrigger";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {};

export default function Scene({ }: Props) {

  const isReady = useStore((state) => state.isReady);

  const can1ref = useRef<Group>(null);
  const can2ref = useRef<Group>(null);
  const can3ref = useRef<Group>(null);
  const can4ref = useRef<Group>(null);
  const can5ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !can1ref.current ||
      !can2ref.current ||
      !can3ref.current ||
      !can4ref.current ||
      !can5ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady();

    // Animation

    gsap.set(groupRef.current.scale, {
      x: isDesktop ? 1 : 0.5,
      y: isDesktop ? 1 : 0.5,
      z: isDesktop ? 1 : 0.5
    });

    gsap.set(can1ref.current.position, { x: isDesktop ? -1.5 : -0.6 });
    gsap.set(can1ref.current.rotation, { z: -0.5 });

    gsap.set(can2ref.current.position, { x: isDesktop ? 1.5 : 0.6 });
    gsap.set(can2ref.current.rotation, { z: 0.5 });

    gsap.set(can3ref.current.position, { y: 5, z: 2 });
    gsap.set(can4ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5ref.current.position, { y: isDesktop ? -5 : -3 });

    const introTl = gsap.timeline({
      defaults: {
        // these properties will be applied to any tween on the intro timeline
        duration: 3,
        ease: "back.out(1.4)",
      },
    });


    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -5, x: isDesktop ? 1 : 0 }, 0)
        .from(can1GroupRef.current.rotation, { z: 3 }, 0)
        .from(can2GroupRef.current.position, { y: 5, x: isDesktop ? 1 : 0 }, 0)
        .from(can2GroupRef.current.rotation, { z: 3 }, 0);
    }



    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // these all will fire at start of our animation --

    scrollTl
      // rotate can group by 360 degrees
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // can1 - blackcherry
      .to(can1ref.current.position, { x: isDesktop ? -0.2 : -0.1, y: isDesktop ? -0.7 : -0.4, z: -2 }, 0)
      .to(can1ref.current.rotation, { z: 0.3 }, 0)

      // can2 - Lime
      .to(can2ref.current.position, { x: isDesktop ? 1 : 0.4, y: isDesktop ? -0.2 : -0.1, z: -1 }, 0)
      .to(can2ref.current.rotation, { z: 0 }, 0)

      // can3- grape
      .to(can3ref.current.position, { x: isDesktop ? -0.3 : -0.1, y: isDesktop ? 0.5 : 0.3, z: -1 }, 0)
      .to(can3ref.current.rotation, { z: -0.1 }, 0)

      // can4 - strawberryLemonade
      .to(can4ref.current.position, { x: 0, y: isDesktop ? -0.3 : -0.2, z: 0.5 }, 0)
      .to(can4ref.current.rotation, { z: 0.3 }, 0)

      // can5 - watermelon
      .to(can5ref.current.position, { x: isDesktop ? 0.3 : 0.1, y: isDesktop ? 0.5 : 0.3, z: -0.5 }, 0)
      .to(can5ref.current.rotation, { z: -0.25 }, 0)

      // now that all cans are on screen, shift the entire group towards right (less on mobile)
      .to(
        groupRef.current.position,
        {
          x: isDesktop ? 1 : 0,
          duration: 3,
          ease: "sign.inOut"
        },
        1.3,
      )
      .to(
        groupRef.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.in"
        },
        ">-=0.5" // Start scaling down 0.5s before the end of the previous movement
      );
  }, { dependencies: [isDesktop] });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1ref}
          flavor="rebeliveApex"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2ref}
          flavor="neon"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3ref} flavor="volcano" floatSpeed={FLOAT_SPEED} />

      <FloatingCan
        ref={can4ref}
        flavor="frost"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan ref={can5ref} flavor="midnight" floatSpeed={FLOAT_SPEED} />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
