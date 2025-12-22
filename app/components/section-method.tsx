import { Eye, Brain, Crosshair } from 'lucide-react';
import Image from 'next/image';

export function MethodSection() {
    return (
        <section className="bg-slate-50 py-16 lg:py-24 font-['Poppins']">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Headline */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl lg:text-4xl font-bold text-[#041021] mb-4 uppercase leading-tight">
                        A SEGURANÇA NÃO VEM DA SORTE. <span className="text-[#F2B705]">VEM DO MÉTODO.</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-light">
                        A Formação é baseada na Tríade da Competência em Tireoide, refinada em 30 anos de prática clínica:
                    </p>
                </div>

                {/* Grid of Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#F2B705] hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-[#041021] rounded-lg flex items-center justify-center mb-6">
                            <Eye className="w-6 h-6 text-[#F2B705]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#041021] mb-4 uppercase">
                            A FUNDAMENTAÇÃO DIAGNÓSTICA
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            O erro comum é tentar interpretar uma imagem "suja". Aqui você domina a Física do Ultrassom para limpar a imagem e a Anatomia Cervical para antecipar armadilhas antes mesmo de encostar a agulha.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#F2B705] hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-[#041021] rounded-lg flex items-center justify-center mb-6">
                            <Brain className="w-6 h-6 text-[#F2B705]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#041021] mb-4 uppercase">
                            A SISTEMATIZAÇÃO DO RACIOCÍNIO
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Chega de ficar na dúvida subjetiva ("acho que é 4, mas parece 3"). Você vai aprender um fluxo de decisão lógico baseada no TI-RADS para saber exatamente quando indicar a biópsia, eliminando o "achismo".
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#F2B705] hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-[#041021] rounded-lg flex items-center justify-center mb-6">
                            <Crosshair className="w-6 h-6 text-[#F2B705]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#041021] mb-4 uppercase">
                            A TÉCNICA INTERVENCIONISTA (A MÃO)
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Biópsia não é dom, é geometria. Treinamos a Triangulação Exata entre agulha e transdutor. Você aprende o posicionamento milimétrico para que o procedimento seja guiado por técnica, não por sorte.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar with Image */}
                <div className="relative mt-8 lg:mt-12 bg-[#041021] rounded-2xl p-8 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-center gap-8 shadow-2xl">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>

                    {/* Text Content */}
                    <div className="relative z-10 flex-1 text-center lg:text-left">
                        <p className="text-xl lg:text-2xl text-white font-medium leading-relaxed">
                            <span className="text-[#F2B705] font-bold">"</span>
                            A única metodologia que une a teoria visual à prática manual, entregue através de Mentorias ao Vivo e Aulas de Alta Resolução.
                            <span className="text-[#F2B705] font-bold">"</span>
                        </p>
                    </div>

                    {/* Image of Dra Claudia */}
                    <div className="relative z-10 w-full max-w-[280px] lg:max-w-[320px] aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#F2B705]/50 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/claudia-method.jpg"
                            alt="Dra. Claudia ensinando ultrassom"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
