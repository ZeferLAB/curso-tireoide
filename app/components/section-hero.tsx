import { Play, Check } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative py-6 lg:py-10 text-white overflow-hidden" style={{ backgroundColor: '#041021', fontFamily: 'var(--font-poppins)' }}>
            <div className="container mx-auto px-4 max-w-6xl text-center">

                {/* Headline */}
                <h1 className="text-[24px] lg:text-[36px] font-medium leading-[1.4] mb-2 max-w-[850px] mx-auto uppercase">
                    DOMINE A BIÓPSIA E O ULTRASSOM DE TIREOIDE EM 12 SEMANAS E TORNE-SE A <span className="text-[#F2B705] font-bold">REFERÊNCIA TÉCNICA</span> DA SUA REGIÃO.
                </h1>

                {/* Support Line */}
                <p className="text-[16px] lg:text-[20px] mb-4 font-normal text-[#E0E0E0]">
                    Mesmo que hoje você sinta insegurança ao classificar um TI-RADS.
                </p>

                {/* Subheadline */}
                <p className="text-[14px] lg:text-[16px] text-[#E0E0E0] mb-6 leading-relaxed max-w-3xl mx-auto font-light">
                    Descubra a Tríade da Competência: o único método que une a Física do Ultrassom, o Raciocínio Clínico e a Técnica de Mão para te dar autonomia diagnóstica e cirúrgica. Assista à apresentação técnica abaixo.
                </p>

                {/* Video Container - Compact Spacing */}
                <div className="relative w-full max-w-3xl mx-auto mb-6">
                    <div className="aspect-video w-full bg-slate-900 border border-[#F2B705] rounded-xl shadow-[0_0_40px_rgba(4,16,33,0.6)] flex items-center justify-center relative group cursor-pointer overflow-hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>

                        {/* Play Button */}
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#F2B705] flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10 animate-pulse">
                            <Play className="w-6 h-6 lg:w-8 lg:h-8 text-[#041021] fill-current" />
                        </div>

                        <p className="absolute bottom-4 font-medium tracking-wide text-xs lg:text-sm opacity-90 z-10 text-white drop-shadow-md">
                            ASSISTIR APRESENTAÇÃO
                        </p>
                    </div>
                </div>

                {/* Bullets - Benefits */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-3 lg:gap-6 text-sm lg:text-base text-slate-200 font-medium">
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Formação Híbrida: Gravada + Ao Vivo</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Segurança Técnica: Do TI-RADS à PAAF</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Suporte Premium com Dra. Claudia</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Dupla Certificação em Tireoide</span>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-2 pb-2">
                    <button className="bg-[#F2B705] hover:bg-[#d9a404] text-[#041021] text-lg lg:text-xl font-extrabold py-3 px-10 rounded-lg shadow-[0px_4px_15px_rgba(242,183,5,0.4)] hover:scale-105 transition-all duration-300 uppercase tracking-wide w-full max-w-md lg:w-auto">
                        QUERO GARANTIR MINHA VAGA
                    </button>
                    <span className="text-[10px] lg:text-xs text-slate-500 flex items-center gap-1">
                        🔒 Acesso Imediato | Compra 100% Segura
                    </span>
                </div>

            </div>
        </section>
    );
}
