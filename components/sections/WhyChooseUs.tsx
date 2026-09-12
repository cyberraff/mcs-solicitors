import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "35+ years of expertise — Decades of experience in criminal defence.",
    "Led by a trusted expert — Directed by Mr Hockam Salhan LLB (Hons), a Higher Rights Advocate.",
    "Specialists in serious cases — Including violent crime, fraud, and drug offences.",
    "Senior solicitor representation — Personal attention to your case from day one.",
    "Access to top legal experts — We work with leading barristers and forensic specialists.",
  ];
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-950 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {points.map((pt, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <CheckCircle2 size={22} className="text-gold-500 shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-charcoal-800 text-sm leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
