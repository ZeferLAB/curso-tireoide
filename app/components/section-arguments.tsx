import { Brain, Heart } from 'lucide-react';

export function ArgumentsSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Lado Racional */}
                    <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-navy">Razão</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "ROI: 5 a 10 PAAFs pagam o curso",
                                "Demanda crescente: até 60% da população tem nódulos",
                                "Custo do erro: reputação vale mais que o investimento",
                                "Método focado: 30 anos condensados"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                    <span className="text-blue-500 font-bold">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lado Emocional */}
                    <div className="bg-navy rounded-2xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gold">Emoção</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="opacity-80">
                                <p className="text-sm uppercase tracking-wider mb-2 font-semibold">Antes</p>
                                <p className="text-lg font-light leading-relaxed border-l-2 border-slate-500 pl-4">
                                    Insegurança, laudos defensivos, plantões exaustivos.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wider text-gold mb-2 font-semibold">Depois</p>
                                <p className="text-xl font-medium leading-relaxed border-l-2 border-gold pl-4">
                                    Confiança, autoridade, autonomia financeira e reconhecimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
