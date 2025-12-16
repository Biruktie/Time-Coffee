// app/page.js
import Hero from "@/components/homepage/Hero";
import Features from "@/components/homepage/Features";
import MenuPreview from "@/components/homepage/MenuPreview";
import Testimonials from "@/components/homepage/Testimonials";
import EventsPreview from "@/components/homepage/EventsPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MenuPreview />
      <Testimonials />
      <EventsPreview />
    </main>
  );
}
