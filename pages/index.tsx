import Head from "next/head";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Rodrigues — AI & Staff Mobile Engineer</title>
        <meta
          name="description"
          content="AI Engineer & Staff-Level Mobile Engineer — RAG, MCP, LLM agents, vector search, and 11+ years of production mobile engineering across iOS, Android, and Flutter."
        />
      </Head>

      <Nav />

      <main className="mx-auto max-w-[80rem] space-y-24 px-6 py-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
