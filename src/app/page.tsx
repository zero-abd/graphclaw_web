import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Architecture } from "@/components/architecture";
import { Memory } from "@/components/memory";
import { Skills } from "@/components/skills";
import { Install } from "@/components/install";
import { Channels } from "@/components/channels";
import { BuiltOn } from "@/components/built-on";
import { Footer } from "@/components/footer";
import { Win } from "@/components/win";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Win />
        <Features />
        <Architecture />
        <Memory />
        <Skills />
        <Channels />
        <Comparison />
        <Install />
        <BuiltOn />
      </main>
      <Footer />
    </>
  );
}
