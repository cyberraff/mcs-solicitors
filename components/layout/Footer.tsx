import Link from "next/link";
import { ShieldCheck, Award, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">MCS Solicitors</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Birmingham criminal defence firm with 35+ years combined experience. SRA regulated, Cyber Essentials certified.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Accreditations</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold-500" /> SRA Regulated (No. 819841)</li>
              <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Criminal Defence Service</li>
              <li className="flex items-center gap-2"><Lock size={16} className="text-gold-500" /> Cyber Essentials Certified</li>
              <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Law Society · SQM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Legal</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              MCS Solicitors, registered at Companies House No: 13257130, is authorised and regulated by the Solicitors Regulation Authority, SRA No: 819841. This firm maintains professional indemnity insurance in accordance with the rules of the Solicitors Regulation Authority. Details of the insurers and the territorial coverage of the policy are available for inspection at our offices. All content and material on this website has been produced by MCS Solicitors.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MCS Solicitors Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-gold-500 transition-colors">Contact</Link>
            <Link href="/funding" className="hover:text-gold-500 transition-colors">Funding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
