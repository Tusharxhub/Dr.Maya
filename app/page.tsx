
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

     <div className="bg-bg-primary min-h-screen selection:bg-accent/20 selection:text-text-primary">
      <Head>
        <title>Dr. Maya Reynolds, PsyD | Clinical Psychologist</title>
        <meta name="description" content="Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, and burnout." />
      </Head>

      <Navigation />
      
      <main className="space-y-24 md:space-y-32 lg:space-y-40 pb-24">
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
