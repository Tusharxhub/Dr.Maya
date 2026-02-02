
"use client"

import Head from "next/head";
import Nav from "./components/Nav";
import { AboutSection } from "./profile/About";
import { Contact } from "./profile/Contact";
import { MayaHero } from "./profile/MayaHero";
import {Navigation} from "./profile/Navigation";
import { Philosophy } from "./profile/Philosophy";
import { Services } from "./profile/Services";
import Hero from "./home/Hero";

export default function Home() {
  return (

    <>
    {/* <Nav/>
    <Hero/> */}

     <div className="bg-[#f9f7f3] min-h-screen selection:bg-[#1a1714] selection:text-[#f9f7f3]">
      <Head>
        <title>Dr. Maya Reynolds, PsyD | Clinical Psychologist</title>
        <meta name="description" content="Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, and burnout." />
      </Head>

      <Navigation />
      
      <main>
        <MayaHero />
        <Philosophy />
        <Services />
        <AboutSection />
        <Contact />
      </main>
    </div>
    </>
  
  );
}
