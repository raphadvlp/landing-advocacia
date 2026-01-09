import { Scale, Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0c1f3d] py-16 text-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl -mr-48 -mt-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Scale className="w-8 h-8 text-[#c5a059]" />
                            <span className="text-xl font-serif font-bold tracking-tight">
                                LUMINA <span className="text-[#c5a059]">ADVOCACIA</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Comprometidos com a justiça e a excelência, oferecemos soluções jurídicas para os desafios do mundo moderno.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white/60 hover:text-[#c5a059] transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-white/60 hover:text-[#c5a059] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-white/60 hover:text-[#c5a059] transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#c5a059]">Links Rápidos</h5>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Início</Link></li>
                            <li><Link href="#expertise" className="hover:text-white transition-colors">Áreas de Atuação</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#team" className="hover:text-white transition-colors">Nossa Equipe</Link></li>
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#c5a059]">Especialidades</h5>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><span className="hover:text-white transition-colors cursor-pointer">Empresarial</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Família & Sucessões</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Digital & LGPD</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer">Planejamento Tributário</span></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#c5a059]">Newsletter</h5>
                        <p className="text-slate-400 text-sm mb-4">Receba atualizações jurídicas em seu e-mail.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm outline-none focus:border-[#c5a059] w-full"
                            />
                            <button className="bg-[#c5a059] px-4 py-2 rounded text-white text-sm font-bold hover:bg-[#b08e4a] transition-all">OK</button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    <p>© 2024 Lumina Advocacia. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#c5a059]">Política de Privacidade</a>
                        <a href="#" className="hover:text-[#c5a059]">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
