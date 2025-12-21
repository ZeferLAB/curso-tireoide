import { Check, ChevronRight } from 'lucide-react';

export function ContextSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-serif text-navy font-bold mb-6">
                        Ao entrar nesta formação, você vai descobrir:
                    </h2>
                </div>

                <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-sm mb-12">
                    <ul className="space-y-6">
                        {[
                            "Como eliminar a insegurança técnica ao classificar nódulos pelo TI-RADS",
                            "O passo a passo para realizar PAAFs seguras, precisas e indolores",
                            "Como sair da posição de executor de exames e assumir o papel de médico que resolve",
                            "O método que transforma física + anatomia em domínio da 'mão'"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="mt-1 min-w-6 min-h-6 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-emerald-700" strokeWidth={3} />
                                </div>
                                <span className="text-lg text-slate-700 leading-relaxed font-medium">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center space-y-8">
                    <p className="text-xl text-slate-600 font-serif italic">
                        "Assista à apresentação e entenda como médicos comuns se tornam referência em Tireoide."
                    </p>

                    <button className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-navy font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Quero dominar USG e Biópsia de Tireoide
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
