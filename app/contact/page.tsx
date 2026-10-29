    import ContactForm from "@/components/ContactForm";

    export const metadata = {
    title: "Contact | Jemmy Autohubs",
    description: "Book a viewing or ask about any car in our inventory.",
    };

    const details = [
    ["Visit", "[Showroom address]"],
    ["Call", "[Phone number]"],
    ["Email", "[Email address]"],
    ["Hours", "Mon – Sat, 9am – 6pm"],
    ];

    export default function ContactPage() {
    return (
        <main className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-10">
            <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Contact</p>
            <h1 className="font-display text-4xl text-white md:text-5xl">
                Let's get you <span className="text-brand-gold">behind the wheel</span>
            </h1>
            <p className="mt-4 text-white/60">
                Send us a message and we'll reply within one working day.
            </p>
            </div>

            <dl className="space-y-6">
            {details.map(([label, value]) => (
                <div key={label} className="border-b border-brand-gold/10 pb-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-brand-gold">{label}</dt>
                <dd className="mt-1 text-white/80">{value}</dd>
                </div>
            ))}
            </dl>
        </div>

        <ContactForm />
        </main>
    );
}