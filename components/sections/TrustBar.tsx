import { ShieldCheck, BadgeCheck, Clock, Landmark } from "lucide-react";

export default function TrustBar() {
  const items = [
    { label: "SRA Regulated", icon: ShieldCheck },
    { label: "Cyber Essentials Certified", icon: BadgeCheck },
    { label: "35+ Years Combined Experience", icon: Clock },
    { label: "Legal Aid & Private Funding", icon: Landmark },
  ];
  return (
    <section className="bg-navy-900 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-slate-400">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={18} className="text-gold-500" strokeWidth={1.5} />
              <span className="text-xs md:text-sm tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
