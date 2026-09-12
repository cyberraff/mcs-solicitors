import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesHub() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-6">Our Services</h1>
      <p className="text-charcoal-800 text-base md:text-lg leading-relaxed max-w-3xl mb-12">
        Whatever you're facing, our team has the experience to defend you. Below are the areas of criminal law we specialise in — each page covers exactly what's involved and how we can help.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group block bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
            <p className="text-sm text-charcoal-800 leading-relaxed mb-4">{service.intro}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-500">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
