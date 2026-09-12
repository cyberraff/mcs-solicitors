import { team } from "@/lib/data/team";
import { Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-4">About MCS Solicitors</h1>
      <p className="text-charcoal-800 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
        MCS Solicitors is a criminal defence law firm based in Birmingham, serving clients across the country. We provide comprehensive legal representation at every stage of a case — from the police station through to the Court of Appeal — and we prepare every case meticulously to achieve the strongest possible outcome for our clients.
      </p>

      <section className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-950 mb-8">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member) => (
            <article key={member.name} className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-950 to-navy-900 rounded-full mb-5 flex items-center justify-center text-white font-heading text-xl font-semibold shadow-inner">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-950 mb-1">{member.name}</h3>
              {member.credentials && (
                <p className="text-sm text-charcoal-800 font-medium mb-1">{member.credentials}</p>
              )}
              {member.title && (
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">{member.title}</p>
              )}
              {member.bio ? (
                <p className="text-sm text-charcoal-800 leading-relaxed">{member.bio}</p>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800 font-medium">Bio coming soon</p>
                  <p className="text-xs text-amber-600 mt-1">A 2–3 sentence bio and headshot will be added before final launch.</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-950 mb-6">Our Accreditations</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Solicitors Regulation Authority (SRA No. 819841)",
            "Criminal Defence Service",
            "The Law Society",
            "SQM (Specialist Quality Mark)",
            "Cyber Essentials Certified",
          ].map((acc) => (
            <li key={acc} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-slate-200 shadow-sm text-sm text-charcoal-800">
              <Award size={18} className="text-gold-500 shrink-0" strokeWidth={1.5} />
              {acc}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
