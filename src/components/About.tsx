"use client";

import { Share2, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-[#0c1f3d]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-4/5 bg-slate-200 dark:bg-slate-800">
                                <div className="w-full h-full flex items-center justify-center p-12 text-[#c5a059]/20">
                                    <Share2 className="w-64 h-64" />
                                </div>
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-10 -right-10 bg-[#c5a059] p-8 rounded-2xl text-white shadow-xl z-20 hidden md:block"
                        >
                            <span className="block text-5xl font-serif font-bold mb-1">15+</span>
                            <span className="text-sm font-bold uppercase tracking-widest leading-tight">
                                Anos de <br /> Experiência
                            </span>
                        </motion.div>
                        {/* Decorative Gold Frame */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#c5a059]/20 rounded-2xl z-0" />
                    </motion.div>

                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Nossa História
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-[#0c1f3d] dark:text-white mb-8 leading-tight"
                        >
                            Compromisso com a Ética e <span className="text-[#c5a059]">Excelência Jurídica</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed"
                        >
                            Fundado com a missão de redefinir o atendimento jurídico, o Lumina Advocacia combina tradição com modernidade. Nossa abordagem é focada na resolução estratégica de problemas complexos, sempre priorizando a transparência e o resultado para nossos clientes.
                        </motion.p>

                        <div className="space-y-6 mb-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-[#c5a059] shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0c1f3d] dark:text-white text-lg">Reconhecimento Nacional</h5>
                                    <p className="text-slate-600 dark:text-slate-400">Premiados como um dos escritórios mais inovadores do país.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-[#c5a059] shrink-0">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#0c1f3d] dark:text-white text-lg">Atualização Constante</h5>
                                    <p className="text-slate-600 dark:text-slate-400">Nossa equipe participa ativamente da produção acadêmica jurídica.</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="grid grid-cols-2 gap-8 border-t border-slate-100 dark:border-white/5 pt-10"
                        >
                            <div>
                                <span className="block text-3xl font-serif font-bold text-[#0c1f3d] dark:text-white">2k+</span>
                                <span className="text-slate-500 text-sm">Casos Resolvidos</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif font-bold text-[#0c1f3d] dark:text-white">98%</span>
                                <span className="text-slate-500 text-sm">Satisfação dos Clientes</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
