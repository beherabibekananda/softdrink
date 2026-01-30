"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
  rebeliveApex: "/labels/apex-black.png",
  neon: "/labels/neon.png",
  volcano: "/labels/volcano-v2.png",
  frost: "/labels/frost.png",
  midnight: "/labels/midnight.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.2,
  metalness: 1,
  color: "#d1d1d1",
});

const bodyMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.4,
  metalness: 0.2,
  color: "#111111", // Dark base for "pasted" look
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "rebeliveApex",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);

  // Fix texture wrapping and centering
  Object.values(labels).forEach((tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 1);
    tex.offset.set(0, 0);
  });

  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;
  labels.rebeliveApex.flipY = false;
  labels.neon.flipY = false;
  labels.volcano.flipY = false;
  labels.frost.flipY = false;
  labels.midnight.flipY = false;

  // Flavor specific alignment fixes
  if (flavor === "neon") {
    labels.neon.offset.set(0, 0); // Adjust if logo is off-center
    labels.neon.repeat.set(1, 1);
  }

  const label = labels[flavor];
  label.anisotropy = 16;
  label.colorSpace = THREE.SRGBColorSpace;

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      {/* Main Body with Label */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial
          map={label}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Top and Bottom Metallic Rims */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />

      {/* Can Tab */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
