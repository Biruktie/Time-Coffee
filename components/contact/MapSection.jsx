// components/contact/MapSection.jsx
"use client";

export default function MapSection() {
  return (
    <section className="h-[400px] w-full" id="map">
      <iframe
        title="Cafe Location"
        src="https://maps.google.com/maps?q=Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </section>
  );
}
