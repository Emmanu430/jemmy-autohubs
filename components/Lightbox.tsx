    "use client";

    import { useEffect } from "react";
    import Image from "next/image";
    import { AnimatePresence, motion } from "motion/react";

    type CarImage = { src: string; view: string };

    type LightboxProps = {
    images: CarImage[];
    index: number;
    alt: string;
    onClose: () => void;
    onChange: (index: number) => void;
    };

    export default function Lightbox({ images, index, alt, onClose, onChange }: LightboxProps) {
    const total = images.length;
    const current = images[index];

    const next = () => onChange((index + 1) % total);
    const prev = () => onChange((index - 1 + total) % total);

    useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") onChange((index + 1) % total);
        if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
    };
    }, [index, total, onClose, onChange]);

    return (
        <AnimatePresence>
        <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/95 p-4 backdrop-blur-sm"
        >
            <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 text-3xl text-brand-gold hover:text-brand-gold-light"
            >
            ×
            </button>

            <button
            onClick={(e) => {
                e.stopPropagation();
                prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 rounded-full border border-brand-gold/40 px-4 py-2 text-brand-gold transition-colors hover:bg-brand-gold/10 md:left-8"
            >
            ←
            </button>

            <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[80vh] w-full max-w-5xl"
            >
            <Image src={current.src} alt={alt} fill className="object-contain" sizes="100vw" />
            <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/60">
                {current.view} · {index + 1} / {total}
            </p>
            </motion.div>

            <button
            onClick={(e) => {
                e.stopPropagation();
                next();
            }}
            aria-label="Next image"
            className="absolute right-4 rounded-full border border-brand-gold/40 px-4 py-2 text-brand-gold transition-colors hover:bg-brand-gold/10 md:right-8"
            >
            →
            </button>
        </motion.div>
        </AnimatePresence>
    );
}