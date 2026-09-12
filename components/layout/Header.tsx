"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-navy-950 text-white border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white hover:text-gold-500 transition-colors">
          MCS Solicitors
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/about" className="text-white/90 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest">About</Link>
          <Link href="/services" className="text-white/90 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest">Services</Link>
          <Link href="/funding" className="text-white/90 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest">Funding</Link>
          <Link href="/contact" className="text-white/90 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest">Contact</Link>
        </nav>

        <a href="tel:01218125587" className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
          <Phone size={18} strokeWidth={1.5} /> Call Now
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white hover:text-gold-500 transition-colors p-2 -mr-2"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-navy-900 border-t border-white/10 px-6 py-6 space-y-4 absolute top-full left-0 right-0 z-50 shadow-xl">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-gold-500 text-base font-medium py-2">About</Link>
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-gold-500 text-base font-medium py-2">Services</Link>
          <Link href="/funding" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-gold-500 text-base font-medium py-2">Funding</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-gold-500 text-base font-medium py-2">Contact</Link>
          <a href="tel:01218125587" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors mt-2">
            <Phone size={18} strokeWidth={1.5} /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
