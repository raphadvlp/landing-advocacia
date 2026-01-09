"use client";

import { Briefcase, Gavel, Users, ShieldAlert, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";

const practices = [
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Direito Empresarial",
        description: "Assessoria jurídica estratégica para startups e empresas consolidadas, focando em governança e conformidade.",
    },
    {
        icon: <Gavel className="w-8 h-8" />,
        title: "Direito Civil",
        description: "Soluções eficazes em responsabilidade civil, contratos, obrigações e direitos reais com foco na prevenção de litígios.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Direito de Família",
        description: "Atendimento humanizado em processos de divórcio, guarda, inventários e planejamento sucessório.",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Direito Digital",
        description: "Proteção de dados (LGPD), crimes cibernéticos e consultoria para negócios no ambiente digital.",
    },
    {
        icon: <ShieldAlert className="w-8 h-8" />,
        title: "Direito Criminal",
        description: "Defesa técnica especializada em crimes de colarinho branco e direito penal econômico.",
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Direito Tributário",
        description: "Planejamento tributário inteligente e defesa em processos administrativos e judiciais.",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="py-24 bg-slate-50 dark:bg-[#061226]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Especialidades
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#0c1f3d] dark:text-white mb-6"
                    >
                        Nossas Áreas de Atuação
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400"
                    >
                        Oferecemos uma gama completa de serviços jurídicos com especialistas dedicados para cada setor, garantindo a melhor estratégia para o seu caso.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#0c1f3d]/50 p-8 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-[#c5a059]/50 transition-all group hover:shadow-2xl hover:shadow-[#c5a059]/5"
                        >
                            <div className="w-16 h-16 bg-[#c5a059]/10 rounded-xl flex items-center justify-center text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                                {practice.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#0c1f3d] dark:text-white mb-4">
                                {practice.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {practice.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

