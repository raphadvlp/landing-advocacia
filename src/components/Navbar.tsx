"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "#" },
        { name: "Áreas de Atuação", href: "#expertise" },
        { name: "Sobre Nós", href: "#about" },
        { name: "Equipe", href: "#team" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md py-4 shadow-sm dark:bg-[#0c1f3d]/80"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Scale className="w-8 h-8 text-[#c5a059] transition-transform group-hover:rotate-12" />
                    <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? "text-[#0c1f3d] dark:text-white" : "text-white"}`}>
                        LUMINA <span className="text-[#c5a059]">ADVOCACIA</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-[#c5a059] ${isScrolled ? "text-slate-700 dark:text-slate-200" : "text-white/90"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-[#c5a059] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#b08e4a] transition-all shadow-lg hover:shadow-[#c5a059]/30 active:scale-95"
                    >
                        Consultoria Gratuita
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[#c5a059]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-[#0c1f3d] flex flex-col items-center justify-center gap-8 md:hidden">
                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-serif text-white hover:text-[#c5a059]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-[#c5a059] text-white px-8 py-3 rounded-full text-lg font-semibold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Consultoria Gratuita
                    </Link>
                </div>
            )}
        </nav>
    );
}
