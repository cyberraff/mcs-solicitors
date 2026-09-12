import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowLeft, Phone, MessageSquare } from "lucide-react";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <Link href="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-500 transition-colors mb-6">
        <ArrowLeft size={16} strokeWidth={1.5} /> Back to Services
      </Link>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-6">{service.title}</h1>
      <p className="text-charcoal-800 text-base md:text-lg leading-relaxed mb-8">{service.intro}</p>

      <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm mb-8">
        <h2 className="font-heading text-xl font-semibold text-navy-950 mb-4">We provide legal services regarding:</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {service.offences.map((offence) => (
            <li key={offence} className="flex items-start gap-2 text-sm text-charcoal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
              {offence}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-navy-950 text-white rounded-xl p-6 md:p-8 mb-8">
        <h3 className="font-heading text-xl font-semibold mb-4">Why Choose MCS Solicitors</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>• 35+ years of combined criminal defence experience</li>
          <li>• Directed by Hockam Salhan LLB (Hons), a Higher Rights Advocate</li>
          <li>• Full SRA, Law Society, and SQM accreditation</li>
          <li>• Access to leading barristers and forensic specialists</li>
          <li>• 24/7 emergency police station support</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:01218125587" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3 rounded-lg font-medium transition-colors">
          <Phone size={18} strokeWidth={1.5} /> Call 0121 812 5587
        </a>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors bg-navy-900">
          <MessageSquare size={18} strokeWidth={1.5} /> Send a Confidential Message
        </Link>
      </div>
    </div>
  );
}
