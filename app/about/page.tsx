    import Link from "next/link";

    export const metadata = {
    title: "About | Jemmy Autohubs",
    description: "Learn about Jemmy Autohubs and how we pick and prepare every car.",
    };

    const values = [
    ["Inspected", "Every car goes through a full mechanical and body check before it's listed."],
    ["Honest pricing", "The price you see is the price you pay. No surprise fees at the desk."],
    ["Aftercare", "We stay reachable after you drive away, for questions and servicing advice."],
    ];

    export default function AboutPage() {
    return (
        <main>
        <section className="relative overflow-hidden px-6 py-24 text-center">
            <div className="absolute inset-0 bg-linear-to-b from-brand-plum/50 to-brand-ink" />
            <div className="relative mx-auto max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">About us</p>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
                Cars chosen with <span className="text-brand-gold">care</span>
            </h1>
            <p className="text-white/70">
                Jemmy Autohubs started with a simple idea: buying a used car should feel
                calm, clear and fair. We inspect, prepare and price every vehicle
                so you can focus on the drive.
            </p>
            </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 sm:grid-cols-3">
            {values.map(([title, text]) => (
            <div
                key={title}
                className="rounded-2xl border border-brand-gold/20 bg-brand-purple/30 p-8 transition-transform duration-300 hover:-translate-y-1"
            >
                <h2 className="font-display text-2xl text-brand-gold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
            </div>
            ))}
        </section>

        <section className="border-t border-brand-gold/20 px-6 py-20 text-center">
            <h2 className="font-display text-3xl text-white">Ready to find yours?</h2>
            <Link
            href="/inventory"
            className="mt-8 inline-block rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
            Browse inventory
            </Link>
        </section>
        </main>
    );
}