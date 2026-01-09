import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-[#0c1f3d]">
            <div className="container mx-auto px-6">
                <div className="bg-[#0c1f3d] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    {/* Info Side */}
                    <div className="lg:w-1/3 p-12 bg-[#0c1f3d] text-white border-r border-white/5">
                        <h3 className="text-3xl font-serif font-bold mb-8">Informações de Contato</h3>
                        <p className="text-slate-300 mb-12">
                            Estamos prontos para ouvir seu caso e oferecer a melhor orientação jurídica.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c5a059]/20 rounded-xl flex items-center justify-center text-[#c5a059]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h6 className="font-bold opacity-50 uppercase text-[10px] tracking-widest mb-1">Telefone</h6>
                                    <p className="text-lg">+55 (11) 4002-8922</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c5a059]/20 rounded-xl flex items-center justify-center text-[#c5a059]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h6 className="font-bold opacity-50 uppercase text-[10px] tracking-widest mb-1">E-mail</h6>
                                    <p className="text-lg">contato@lumina.adv.br</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c5a059]/20 rounded-xl flex items-center justify-center text-[#c5a059]">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h6 className="font-bold opacity-50 uppercase text-[10px] tracking-widest mb-1">Endereço</h6>
                                    <p className="text-lg leading-tight">Av. Faria Lima, 4500 <br /> São Paulo - SP</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c5a059]/20 rounded-xl flex items-center justify-center text-[#c5a059]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h6 className="font-bold opacity-50 uppercase text-[10px] tracking-widest mb-1">Atendimento</h6>
                                    <p className="text-lg">Seg - Sex: 09h às 18h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 p-12 bg-[#0c1f3d]/50">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">Nome Completo</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-[#c5a059] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-[#c5a059] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">Assunto</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#c5a059] appearance-none">
                                    <option className="bg-[#0c1f3d]">Selecione uma área</option>
                                    <option className="bg-[#0c1f3d]">Direito Civil</option>
                                    <option className="bg-[#0c1f3d]">Direito Empresarial</option>
                                    <option className="bg-[#0c1f3d]">Direito de Família</option>
                                    <option className="bg-[#0c1f3d]">Outro</option>
                                </select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">Mensagem</label>
                                <textarea
                                    rows={4}
                                    placeholder="Descreva brevemente sua situação..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-[#c5a059] outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-[#c5a059] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#b08e4a] transition-all shadow-xl shadow-[#c5a059]/20 active:scale-95"
                                >
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
