import ContactForm from "@/components/sections/ContactForm";
import { PHONE, EMAIL, ADDRESS, HOURS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-4">Contact MCS Solicitors</h1>
          <p className="text-charcoal-800 text-base md:text-lg leading-relaxed mb-8">Contact us in confidence. Whether you've been arrested, charged, or summoned, our team is available 24/7 to provide immediate expert advice.</p>

          <div className="space-y-4 mb-8">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm md:text-base text-charcoal-800 hover:text-gold-500 transition-colors">
              <Phone size={20} strokeWidth={1.5} className="text-gold-500" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm md:text-base text-charcoal-800 hover:text-gold-500 transition-colors">
              <Mail size={20} strokeWidth={1.5} className="text-gold-500" /> {EMAIL}
            </a>
            <p className="flex items-center gap-3 text-sm md:text-base text-charcoal-800">
              <MapPin size={20} strokeWidth={1.5} className="text-gold-500" /> {ADDRESS}
            </p>
            <p className="flex items-center gap-3 text-sm md:text-base text-charcoal-800">
              <Clock size={20} strokeWidth={1.5} className="text-gold-500" /> {HOURS}
            </p>
          </div>

          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="MCS Solicitors Office Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.6!2d-1.9!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870e3f8c8f8c8f8%3A0x8f8f8f8f8f8f8f8f!2sMcLaren+Building%2C+46+The+Priory+Queensway%2C+Birmingham+B4+7LR!5e0!3m2!1sen!2suk!4v1718200000000!5m2!1sen!2suk`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <h2 className="font-heading text-xl font-semibold text-navy-950 mb-5">Send a Confidential Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
