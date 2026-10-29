import Link from "next/link";
import cars from "@/data/cars.json";
import CarCard from "@/components/CarCard";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-linear-to-b from-brand-plum/60 via-brand-ink to-brand-ink" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="relative max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">
            Premium pre-owned cars
          </p>
          <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">
            Drive home in <span className="text-brand-gold">something you love</span>
          </h1>
          <p className="mx-auto max-w-xl text-white/70">
            Carefully inspected vehicles, transparent pricing and a team that
            answers your calls.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/inventory"
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
              View inventory
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-gold/50 px-7 py-3 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold/10"
            >
              Book a viewing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured cars */}
            <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Featured</p>
            <h2 className="font-display text-3xl text-white md:text-4xl">Latest arrivals</h2>
          </div>
          <Link href="/inventory" className="hidden text-sm text-brand-gold hover:underline sm:block">
            See all →
          </Link>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
            <Reveal key={car.id} delay={i * 0.1}>
              <CarCard car={car} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-brand-gold/20 bg-brand-purple/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 text-center sm:grid-cols-3">
          {[
            ["Inspected", "Every car passes a full checklist"],
            ["Transparent", "No hidden fees, clear paperwork"],
            ["Supported", "Help after you drive away"],
          ].map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.15}>
              <h3 className="font-display text-xl text-brand-gold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}