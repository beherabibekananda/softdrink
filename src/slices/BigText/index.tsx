import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:min-h-screen w-screen overflow-hidden bg-black text-white"
    >
      <h2 className="grid w-full gap-[3vw] py-4 md:py-10 text-center font-black uppercase leading-[.8]">
        <div className="text-[22vw]">APEX</div>
        <div className="grid gap-[2vw] text-[15vw] md:flex md:text-[11vw] justify-center">
          <span className="inline-block">ENERGY</span>
          <span className="inline-block max-md:text-[12vw]">FOR</span>
          <span className="inline-block max-md:text-[15vw]">THE</span>
        </div>
        <div className="text-[20vw]">BOLD</div>
      </h2>
    </section>
  );
};

export default BigText;
