// app/contact/page.js
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
  return (
    <div className="bg-[#120805] text-amber-50">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  );
}
