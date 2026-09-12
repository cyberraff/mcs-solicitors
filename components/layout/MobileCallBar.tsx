import { Phone } from "lucide-react";

export default function MobileCallBar() {
  return (
    <a
      href="tel:01218125587"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gold-500 text-navy-950 px-6 py-4 flex items-center justify-center gap-3 font-medium text-base shadow-[0_-4px_20px_rgba(201,162,39,0.25)]"
      aria-label="Call MCS Solicitors now"
    >
      <Phone size={22} strokeWidth={1.5} />
      Call Now — 0121 812 5587
    </a>
  );
}
