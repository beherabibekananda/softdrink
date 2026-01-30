import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "REBELIVE - Science-Backed Functional Energy",
    description: "Oxytrium Dynamics presents REBELIVE: A sugar-free functional energy drink for peak performance and sustainable wellness.",
    openGraph: {
      title: "REBELIVE - Redefining Energy",
      images: [{ url: "/labels/rebelive-apex.png" }],
    },
  };
}

import ProductGrid from "@/components/ProductGrid";
import CompanyProfile from "@/components/CompanyProfile";
import TeamSection from "@/components/TeamSection";
import ViewManager from "@/components/ViewManager";

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  let slices = [];

  try {
    const home = await client.getByUID("page", "home");
    slices = home.data.slices;
  } catch (e) {
    console.error("Prismic fetch failed:", e);
  }

  return (
    <ViewManager slices={slices} />
  );
}
