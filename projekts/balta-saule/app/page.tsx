import About from "@/components/sections/About";
import Accommodation from "@/components/sections/Accommodation";
import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Accommodation />
      <Menu />
      <Events />
    </>
  );
}
