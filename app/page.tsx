import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="bg-grid pointer-events-none absolute inset-0 h-[140vh]" aria-hidden />
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
