    "use client";

    import { useState } from "react";

    export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const data = Object.fromEntries(new FormData(e.currentTarget));

        const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        if (res.ok) {
        setSent(true);
        } else {
        setStatus("error");
        }
    };

    if (sent) {
        return (
        <div className="rounded-2xl border border-brand-gold/30 bg-brand-purple/40 p-10 text-center">
            <h3 className="font-display text-2xl text-brand-gold">Thank you</h3>
            <p className="mt-3 text-white/60">We'll get back to you shortly.</p>
        </div>
        );
    }

    const inputClass =
        "w-full rounded-lg border border-brand-gold/20 bg-brand-ink/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-gold";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
            <input required name="name" placeholder="Full name" className={inputClass} />
            <input required type="tel" name="phone" placeholder="Phone number" className={inputClass} />
        </div>
        <input required type="email" name="email" placeholder="Email address" className={inputClass} />
        <select name="interest" className={inputClass} defaultValue="">
            <option value="" disabled>
            I'm interested in…
            </option>
            <option>Buying a car</option>
            <option>Selling my car</option>
            <option>Servicing or aftercare</option>
            <option>Something else</option>
        </select>
        <textarea
            name="message"
            rows={5}
            placeholder="Tell us what you're looking for"
            className={inputClass}
        />

        {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
        )}

        <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand-gold-light disabled:opacity-60 sm:w-auto"
        >
            {status === "sending" ? "Sending…" : "Send message"}
        </button>
        </form>
    );
}