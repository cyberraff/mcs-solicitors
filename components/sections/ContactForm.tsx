"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (window as any).handleTurnstileCallback = (token: string) => {
      const input = document.getElementById("turnstileToken") as HTMLInputElement;
      if (input) input.value = token;
    };
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again or call us directly.");
      }
    } catch {
      alert("Network error. Please call us at 0121 812 5587.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-heading text-xl font-semibold text-emerald-900 mb-2">Message Sent</h3>
        <p className="text-emerald-700 text-sm">A member of our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="firstName" required placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-charcoal-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-shadow" />
        <input name="surname" required placeholder="Surname" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-charcoal-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-shadow" />
      </div>
      <input name="email" type="email" required placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-charcoal-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-shadow" />
      <input name="telephone" type="tel" placeholder="Telephone number" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-charcoal-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-shadow" />
      <textarea name="message" required placeholder="Your message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-charcoal-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-shadow resize-none" />
      <input type="hidden" name="turnstileToken" id="turnstileToken" />
      <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} data-callback="handleTurnstileCallback" />
      <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3.5 rounded-lg font-medium transition-colors disabled:opacity-50">
        <Send size={18} strokeWidth={1.5} /> {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
