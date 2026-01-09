"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const team = [
    {
        name: "Dr. Ricardo Lumina",
        role: "Sócio Fundador | Direito Empresarial",
        image: "/images/lawyer1.png",
        bio: "Especialista em fusões e aquisições com mais de 20 anos de atuação estratégica.",
    },
    {
        name: "Dra. Helena Souza",
        role: "Sócia | Direito da Família & Sucessões",
        image: "/images/lawyer2.png",
        bio: "Mestre em Direito Civil, reconhecida pelo atendimento humanizado e estratégico.",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-slate-50 dark:bg-[#061226]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Nossos Profissionais
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#0c1f3d] dark:text-white mb-6"
                    >
                        Liderança e Expertise
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400"
                    >
                        Nossa equipe é composta por advogados altamente qualificados, comprometidos com a excelência técnica e resultados práticos.
                    </motion.p>
                </div>

                <div className="flex justify-center gap-12 flex-wrap">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="w-full max-w-sm group"
                        >
                            <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-6 shadow-xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0c1f3d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c5a059] transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#c5a059] transition-all">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-[#0c1f3d] dark:text-white mb-1">
                                {member.name}
                            </h4>
                            <p className="text-[#c5a059] font-bold text-sm uppercase tracking-wider mb-4">
                                {member.role}
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
