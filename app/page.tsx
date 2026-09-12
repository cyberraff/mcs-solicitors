import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowWeHelp from "@/components/sections/HowWeHelp";
import PracticeAreaGrid from "@/components/sections/PracticeAreaGrid";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import { PHONE, EMAIL, ADDRESS, HOURS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <HowWeHelp />
      <WhyChooseUs />
      <PracticeAreaGrid />
      <TestimonialCarousel />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "MCS Solicitors",
            "description": "Specialist criminal defence solicitors in Birmingham. 35+ years of experience, SRA regulated, available 24/7.",
            "url": "https://mcs-solicitors.com",
            "telephone": "0121 812 5587",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10th Floor, McLaren Building, 46 The Priory Queensway",
              "addressLocality": "Birmingham",
              "postalCode": "B4 7LR",
            },
          }),
        }}
      />

      <section className="bg-navy-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Contact Us In Confidence Now</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-slate-300">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold-500 transition-colors"><Phone size={18} strokeWidth={1.5} /> {PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold-500 transition-colors"><Mail size={18} strokeWidth={1.5} /> {EMAIL}</a>
          </div>
          <p className="text-xs text-slate-500 mt-4">{ADDRESS} · {HOURS}</p>
        </div>
      </section>
    </>
  );
}
