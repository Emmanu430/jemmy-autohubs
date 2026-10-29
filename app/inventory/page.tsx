    import cars from "@/data/cars.json";
    import CarCard from "@/components/CarCard";

    export const metadata = {
    title: "Inventory | Jemmy Autohubs",
    description: "Browse our full range of inspected pre-owned cars.",
    };

    export default function InventoryPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Inventory</p>
            <h1 className="font-display text-4xl text-white md:text-5xl">
            Every car, every detail
            </h1>
            <p className="mt-3 text-white/60">
            {cars.length} vehicles available right now.
            </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
            <CarCard key={car.id} car={car} />
            ))}
        </div>
        </main>
    );
}