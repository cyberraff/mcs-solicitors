import { testimonials } from "@/lib/data/testimonials";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Developer note: discrepancy flagged but NOT silently fixed */}
      {/* NOTE: One testimonial references "Stefan Salhan" — confirm with client before final launch. See mcs-solicitors-content-checklist.md. */}

      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-4">Client Testimonials</h1>
      <p className="text-charcoal-800 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">Read what our clients say about MCS Solicitors — 5-star rated criminal defence representation in Birmingham.</p>

      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <article key={i} className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={16} className="text-gold-500 fill-gold-500" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="text-charcoal-800 text-base md:text-lg leading-relaxed mb-4">"{t.quote}"</blockquote>
            <cite className="text-sm text-slate-400 not-italic">— {t.attribution}</cite>
          </article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "LegalService",
              "name": "MCS Solicitors",
              "serviceArea": "Birmingham",
            },
            "ratingValue": 5,
            "bestRating": 5,
            "ratingCount": testimonials.length,
          }),
        }}
      />
    </div>
  );
}
