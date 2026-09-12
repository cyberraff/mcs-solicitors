export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-950 mb-6">Who We Are</h2>
            <div className="space-y-4 text-charcoal-800 leading-relaxed">
              <p><strong>Leading Criminal Defence Firm</strong> — MCS Solicitors is a criminal defence law firm based in Birmingham, serving clients nationwide.</p>
              <p><strong>Comprehensive Legal Representation</strong> — Expert legal support at every stage of your case.</p>
              <p><strong>Strongest Possible Defence</strong> — We meticulously prepare your case to achieve the best possible outcome.</p>
              <p><strong>Fully Accredited</strong> — Recognised by the Solicitors Regulation Authority, Criminal Defence Service, Law Society, and SQM.</p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-4">About Our Practice</h3>
            <p className="text-charcoal-800 text-sm leading-relaxed mb-4">
              MCS Solicitors is a Birmingham-based criminal defence firm providing expert representation at every stage — from police station interviews through Crown Court trials and appeals. We handle serious and complex criminal cases with senior solicitor involvement from day one.
            </p>
            <p className="text-charcoal-800 text-sm leading-relaxed">
              Our team includes Higher Rights Advocates and senior solicitors with decades of combined experience in fraud, serious assault, firearms, sexual offences, drug trafficking, and appeals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
