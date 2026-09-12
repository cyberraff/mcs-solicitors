import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialCarousel() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-950">What Our Clients Say</h2>
          <Link href="/testimonials" className="inline-flex items-center gap-1 text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors">Read all <ChevronRight size={16} strokeWidth={1.5} /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="text-gold-500 fill-gold-500" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-charcoal-800 text-sm md:text-base leading-relaxed mb-4 italic">"{t.quote}"</blockquote>
              <cite className="text-xs text-slate-400 not-italic">— {t.attribution}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
