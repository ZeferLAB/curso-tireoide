import { AlertTriangle } from 'lucide-react';

export function TargetAudienceSection() {
    return (
        <section className="bg-navy py-20 lg:py-24 text-white font-['Poppins']">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16 max-w-4xl mx-auto uppercase leading-snug">
                    VOCÊ SE IDENTIFICA COM ALGUMA DESTAS SITUAÇÕES NO SEU PLANTÃO?
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

                    {/* Card 1 */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#F2B705] hover:shadow-[0_0_20px_rgba(242,183,5,0.1)] transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-4">
                            <AlertTriangle className="w-8 h-8 text-[#F2B705] shrink-0" />
                            <h3 className="text-xl font-bold text-white group-hover:text-[#F2B705] transition-colors">
                                A INSEGURANÇA DO "FRIO NA ESPINHA"
                            </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed pl-12 border-l-2 border-white/10 group-hover:border-[#F2B705]/50 transition-colors">
                            Você sente um medo real ao se deparar com nódulos complexos ou anatomias difíceis, receando errar o laudo ou lesionar uma estrutura vital na biópsia.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#F2B705] hover:shadow-[0_0_20px_rgba(242,183,5,0.1)] transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-4">
                            <AlertTriangle className="w-8 h-8 text-[#F2B705] shrink-0" />
                            <h3 className="text-xl font-bold text-white group-hover:text-[#F2B705] transition-colors">
                                A SÍNDROME DO LAUDO VAGO
                            </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed pl-12 border-l-2 border-white/10 group-hover:border-[#F2B705]/50 transition-colors">
                            Frequentemente escreve "sugiro correlação clínica" para se proteger, porque não tem a convicção técnica para bancar um diagnóstico definitivo (TI-RADS).
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#F2B705] hover:shadow-[0_0_20px_rgba(242,183,5,0.1)] transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-4">
                            <AlertTriangle className="w-8 h-8 text-[#F2B705] shrink-0" />
                            <h3 className="text-xl font-bold text-white group-hover:text-[#F2B705] transition-colors">
                                A "RODA DE HAMSTER" DOS PLANTÕES
                            </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed pl-12 border-l-2 border-white/10 group-hover:border-[#F2B705]/50 transition-colors">
                            Trabalha muito, mas sente que é apenas um "executor de exames", trocando tempo por dinheiro sem construir autoridade ou reconhecimento na sua cidade.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#F2B705] hover:shadow-[0_0_20px_rgba(242,183,5,0.1)] transition-all duration-300 group">
                        <div className="flex items-start gap-4 mb-4">
                            <AlertTriangle className="w-8 h-8 text-[#F2B705] shrink-0" />
                            <h3 className="text-xl font-bold text-white group-hover:text-[#F2B705] transition-colors">
                                A TERCEIRIZAÇÃO DA OPORTUNIDADE
                            </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed pl-12 border-l-2 border-white/10 group-hover:border-[#F2B705]/50 transition-colors">
                            Encaminha biópsias para outros colegas porque acredita que não tem "mão" ou segurança para realizar o procedimento, perdendo faturamento e autonomia.
                        </p>
                    </div>

                </div>

                {/* Footer Warning */}
                <div className="text-center max-w-3xl mx-auto bg-[#F2B705]/10 p-6 rounded-lg border border-[#F2B705]/20">
                    <p className="text-lg text-slate-200">
                        Se você marcou pelo menos um desses pontos, cuidado: você está preso no <strong className="text-[#F2B705]">CICLO DO EXECUTOR</strong>. Mas existe um próximo nível.
                    </p>
                </div>
            </div>
        </section>
    );
}
