import About from "@/components/sections/About";
import Accommodation from "@/components/sections/Accommodation";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Accommodation />
        <Menu />
        <Events />
        {/* Nākamās sadaļas tiks pievienotas šeit */}
      </main>
      <Footer />
    </>
  );
}
