import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedItems from "@/components/FeaturedItems";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedItems />
    </main>
  );
}
