import { ShieldCheck, Scale, Gavel, Landmark } from "lucide-react";

export default function HowWeHelp() {
  const stages = [
    { title: "Police Station", desc: "24/7 legal support if you've been arrested.", icon: ShieldCheck },
    { title: "Magistrates' Court", desc: "Expert advice on the offence(s) you're charged with.", icon: Scale },
    { title: "Crown Court", desc: "Expert advocacy in serious trials.", icon: Gavel },
    { title: "Court of Appeal", desc: "Challenging convictions and sentences.", icon: Landmark },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-950 mb-4">How We Can Help You</h2>
        <p className="text-charcoal-800 text-sm md:text-base mb-10 max-w-2xl">We provide expert criminal defence representation at every stage of the legal process.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div key={stage.title} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <stage.icon size={28} className="text-gold-500 mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-navy-950 mb-2">{stage.title}</h3>
              <p className="text-charcoal-800 text-sm leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
