    "use client";

    import { useState } from "react";
    import Link from "next/link";
    import { AnimatePresence, motion } from "motion/react";

    const links = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Inventory" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    ];

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-brand-gold/20 bg-brand-ink/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-lg tracking-widest text-brand-gold md:text-xl"
            >
            JEMMY AUTOHUBS
            </Link>

            {/* Desktop links */}
            <ul className="hidden gap-8 text-sm md:flex">
            {links.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-brand-gold"
                >
                    {link.label}
                </Link>
                </li>
            ))}
            </ul>

            {/* Hamburger button (mobile only) */}
            <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
            <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-brand-gold"
            />
            <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-brand-gold"
            />
            <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-brand-gold"
            />
            </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
            {open && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-brand-gold/20 bg-brand-ink md:hidden"
            >
                <ul className="flex flex-col px-6 py-6">
                {links.map((link, i) => (
                    <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    >
                    <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-brand-gold/10 py-4 font-display text-2xl text-white transition-colors hover:text-brand-gold"
                    >
                        {link.label}
                    </Link>
                    </motion.li>
                ))}
                </ul>
            </motion.div>
            )}
        </AnimatePresence>
        </header>
    );
}