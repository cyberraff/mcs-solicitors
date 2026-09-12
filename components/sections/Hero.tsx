import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950/90" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <span className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 border border-gold-500/20 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
          24/7 Emergency Police Station Support
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-6 tracking-tight">
          Get The Specialist Criminal Defence Solicitors You Need
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-2">
          Located in Birmingham. Serving clients nationwide.
        </p>
        <p className="text-base md:text-lg text-slate-400 mb-8">
          If you want the best possible legal representation, call us now:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:01218125587" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded-lg font-medium text-base transition-colors shadow-lg shadow-gold-500/20">
            <Phone size={20} strokeWidth={1.5} /> Call 0121 812 5587
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium text-base transition-colors">
            <MessageSquare size={20} strokeWidth={1.5} /> Send a Confidential Message
          </Link>
        </div>
      </div>
    </section>
  );
}
