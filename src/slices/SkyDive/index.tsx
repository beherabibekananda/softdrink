"use client"

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Scene from "./Scene";
import { View } from "@react-three/drei";

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-[70vh] md:h-screen"
    >
      <View className="h-[70vh] md:h-screen w-screen">
        <Scene flavor={slice.primary.flavor} sentence="REBELIVE APEX ENERGY" />
      </View>
      <h2 className="sr-only">REBELIVE APEX ENERGY</h2>
    </Bounded>
  );
};




export default SkyDive;
