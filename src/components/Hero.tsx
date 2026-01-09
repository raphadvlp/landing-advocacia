"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.png"
                    alt="Escritório moderno Lumina Advocacia"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0c1f3d]/90 via-[#0c1f3d]/70 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                        <span className="text-[#c5a059] text-xs font-bold uppercase tracking-widest leading-none">
                            Excelência Comprovada
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                    >
                        Excelência Jurídica com <br />
                        <span className="text-[#c5a059]">Foco em Resultados</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
                    >
                        Proporcionamos soluções jurídicas estratégicas e personalizadas para indivíduos e empresas, pautadas na ética e na busca incansável pela justiça.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#contact"
                            className="bg-[#c5a059] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#b08e4a] transition-all group shadow-xl shadow-[#c5a059]/20"
                        >
                            Falar com Especialista
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#expertise"
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                            Nossas Áreas
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                </div>
            </motion.div>
        </section>
    );
}
