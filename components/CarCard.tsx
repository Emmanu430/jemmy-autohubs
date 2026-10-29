    "use client";

    import { useState } from "react";
    import { motion } from "motion/react";
    import Lightbox from "@/components/Lightbox";

    type CarImage = { src: string; view: string };
    type Car = {
    id: string;
    name: string;
    year: number;
    price: string;
    mileage: string;
    images: CarImage[];
    };

    export default function CarCard({ car }: { car: Car }) {
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);
    const image = car.images[active];

    return (
        <>
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-purple/40 shadow-lg"
        >
            <button
            onClick={() => setOpen(true)}
            aria-label={`Open ${car.name} photos`}
            className="relative block aspect-4/3 w-full overflow-hidden"
            >
            <motion.img
                key={image.src}
                src={image.src}
                alt={`${car.name} ${image.view}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-brand-ink/70 px-3 py-1 text-xs text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">
                View {car.images.length} photos
            </span>
            </button>

            <div className="space-y-4 p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                <h3 className="font-display text-xl text-white">{car.name}</h3>
                <p className="mt-1 text-xs text-white/50">
                    {car.year} · {car.mileage}
                </p>
                </div>
                <p className="whitespace-nowrap text-brand-gold">{car.price}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {car.images.map((img, i) => (
                <button
                    key={img.src}
                    onClick={() => setActive(i)}
                    className={`rounded-full px-3 py-1 text-xs transition-colors ${
                    i === active
                        ? "bg-brand-gold text-brand-ink"
                        : "border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10"
                    }`}
                >
                    {img.view}
                </button>
                ))}
            </div>
            </div>
        </motion.div>

        {open && (
            <Lightbox
            images={car.images}
            index={active}
            alt={car.name}
            onClose={() => setOpen(false)}
            onChange={setActive}
            />
        )}
        </>
    );
}