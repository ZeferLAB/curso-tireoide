import { X, Check } from 'lucide-react';

export function PositioningSection() {
    return (
        <section className="bg-white py-16 lg:py-24 font-['Poppins']">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#041021] mb-12 max-w-4xl mx-auto uppercase">
                    ENTENDA A DIFERENÇA: ISTO NÃO É APENAS MAIS UM CURSO DE ULTRASSOM.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">

                    {/* LEFT COLUMN: O Que NÃO É (Negative) */}
                    <div className="bg-[#F5F5F5] p-10 lg:p-16 flex flex-col justify-center order-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-10 flex items-center gap-2 uppercase tracking-wide border-b border-slate-300 pb-4">
                            <span className="text-red-500 text-3xl">❌</span> ISTO NÃO É...
                        </h3>

                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-2">uma Pós-Graduação Teórica</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                        Você não vai passar 18 meses estudando fisiopatologia para, no final, ainda ter dúvida de como segurar a agulha. Aqui, cortamos a gordura teórica.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4">
                                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-2">um 'Curso de Fim de Semana'</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                        Cursos rápidos dão a falsa sensação de aprendizado. Você pratica no domingo e esquece na segunda, porque não tem suporte contínuo quando a dúvida real aparece.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-4">
                                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-2">um amontoado de Dicas</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                        Dicas soltas não formam especialistas. Aqui você não recebe 'hacks', recebe uma metodologia sequencial validada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: O Que É (Positive) */}
                    <div className="bg-[#041021] p-10 lg:p-16 flex flex-col justify-center relative lg:-ml-4 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.2)] order-2 lg:rounded-l-none rounded-b-2xl lg:rounded-r-2xl">
                        {/* Subtle Gold Accent Border top on mobile, left on desktop? Keeping it simple first. */}
                        <h3 className="text-xl lg:text-2xl font-bold text-[#F2B705] mb-10 flex items-center gap-2 uppercase tracking-wide border-b border-gray-700 pb-4">
                            <span className="text-[#F2B705] text-3xl">✅</span> ISTO É...
                        </h3>

                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <Check className="w-6 h-6 text-[#F2B705] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">UM TREINAMENTO DE SEGURANÇA TÉCNICA</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                                        O foco total é fazer você assinar laudos e realizar procedimentos com a certeza de que está fazendo o melhor para o paciente e protegendo seu CRM.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4">
                                <Check className="w-6 h-6 text-[#F2B705] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">UMA TRANSFERÊNCIA DE VIVÊNCIA DE 30 ANOS</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                                        Não vendo informação (isso o Google tem). Vendo minha 'quilometragem'. Você aprende os atalhos e as armadilhas de quem realiza 2.000 biópsias/ano.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-4">
                                <Check className="w-6 h-6 text-[#F2B705] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-2">UM AMBIENTE DE MENTORIA REAL</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                                        Diferente de cursos onde você é um número, aqui você tem acesso direto a mim para discutir seus casos e validar suas condutas em tempo real.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
