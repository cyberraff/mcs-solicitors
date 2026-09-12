export default function FundingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy-950 mb-4">Legal Aid & Funding</h1>
      <p className="text-charcoal-800 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
        We are a Legal Aid practice that also takes on privately funded work — so cost is never a reason not to get the representation you need.
      </p>

      <section className="mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-950 mb-6">Access Expert Criminal Defence Services, Free or Privately</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Free Legal Services</h3>
            <p className="text-sm text-charcoal-800 leading-relaxed">
              We have a contract with the Legal Aid Agency for criminal defence work, allowing us to provide criminal defence services without charge to those eligible for Legal Aid.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Paid Legal Services</h3>
            <p className="text-sm text-charcoal-800 leading-relaxed">
              For those who don't qualify for Legal Aid, or prefer to fund their case privately, we offer paid legal services with clear, transparent cost estimates provided before any work begins.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-950 mb-6">Legal Aid by Stage</h2>
        <div className="space-y-6">
          <article className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Police Station</h3>
            <ul className="list-disc list-inside text-sm text-charcoal-800 space-y-2 leading-relaxed">
              <li>Free legal advice regardless of income — anyone interviewed under caution can receive free legal advice at the police station.</li>
              <li>Available for both arrested individuals and those attending voluntarily.</li>
              <li>Legal aid covers advice and representation at the police station; work outside the station (e.g. interview preparation) must be privately funded.</li>
            </ul>
          </article>
          <article className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Magistrates' Court</h3>
            <ul className="list-disc list-inside text-sm text-charcoal-800 space-y-2 leading-relaxed">
              <li>All criminal cases begin here, with more serious cases referred to the Crown Court.</li>
              <li>Representation Orders are available subject to an interests of justice test and a means test.</li>
              <li>The interests of justice test assesses offence seriousness — non-imprisonable offences generally don't qualify.</li>
              <li>The means test evaluates income and capital.</li>
            </ul>
          </article>
          <article className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Crown Court</h3>
            <ul className="list-disc list-inside text-sm text-charcoal-800 space-y-2 leading-relaxed">
              <li>Most Crown Court cases pass the interests of justice test due to their seriousness; eligibility then depends on a means test based on disposable income.</li>
              <li>Below the lower income limit: eligible for legal aid. Above the upper limit: private funding required. In between: legal aid with income-based contributions.</li>
              <li>If found not guilty, any contributions made are refunded.</li>
              <li>If found guilty, contributions may be required from capital.</li>
            </ul>
          </article>
          <article className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy-950 mb-3">Appeals</h3>
            <ul className="list-disc list-inside text-sm text-charcoal-800 space-y-2 leading-relaxed">
              <li>Legal aid may be available depending on circumstances — we assess eligibility and explore private funding options if needed.</li>
              <li>Strict time limits apply to appeals from the Magistrates' and Crown Court; appeals outside these limits are possible but not automatic.</li>
              <li>Seek advice from a specialist as early as possible.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
