import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

export default function PracticeAreaGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-950 mb-10">Practice Areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              <p className="text-sm text-charcoal-800 leading-relaxed mb-4">Specialist defence across every stage — from initial police interview through to Crown Court trial.</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-500">Read more <ArrowRight size={16} strokeWidth={1.5} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
