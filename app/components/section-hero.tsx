'use client';

import { Check } from 'lucide-react';
import { YouTubeVSLPlayer } from './youtube-vsl-player';

export function HeroSection() {
    return (
        <section className="relative py-4 lg:py-10 text-white overflow-hidden" style={{ backgroundColor: '#041021', fontFamily: 'var(--font-poppins)' }}>
            <div className="container mx-auto px-4 max-w-6xl text-center">

                {/* Headline */}
                <h1 className="text-[18px] sm:text-[20px] lg:text-[36px] font-medium leading-[1.3] mb-2 max-w-[850px] mx-auto uppercase">
                    DOMINE A BIÓPSIA E O ULTRASSOM DE TIREOIDE EM 12 SEMANAS E TORNE-SE A <span className="text-[#F2B705] font-bold">REFERÊNCIA TÉCNICA</span> DA SUA REGIÃO.
                </h1>

                {/* Support Line */}
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] mb-2 lg:mb-4 font-normal text-[#E0E0E0]">
                    Mesmo que hoje você sinta insegurança ao classificar um TI-RADS.
                </p>

                {/* Subheadline */}
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#E0E0E0] mb-3 lg:mb-6 leading-relaxed max-w-3xl mx-auto font-light">
                    Descubra a Tríade da Competência: Física do Ultrassom, o Raciocínio Clínico e a Técnica de Mão para te dar autonomia diagnóstica e cirúrgica. Assista à apresentação técnica abaixo.
                </p>

                {/* Video Container - Compact Spacing */}
                <div className="mb-3 lg:mb-6">
                    <YouTubeVSLPlayer videoId="sSFsLnG2vQw" />
                </div>

                {/* Bullets - Benefits */}
                <div className="max-w-4xl mx-auto mb-3 lg:mb-8">
                    <div className="grid grid-cols-2 lg:flex lg:justify-center gap-1.5 lg:gap-6 text-[11px] sm:text-xs lg:text-base text-slate-200 font-medium">
                        <div className="flex items-center justify-center gap-1.5 lg:gap-2">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Formação Híbrida</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 lg:gap-2">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Segurança Técnica</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 lg:gap-2">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Suporte Premium</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 lg:gap-2">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[#F2B705] flex-shrink-0" />
                            <span>Dupla Certificação</span>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-2 pb-1 lg:pb-2">
                    <button
                        onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#F2B705] hover:bg-[#d9a404] text-[#041021] text-base lg:text-xl font-extrabold py-2.5 px-6 lg:py-3 lg:px-10 rounded-lg shadow-[0px_4px_15px_rgba(242,183,5,0.4)] hover:scale-105 transition-all duration-300 uppercase tracking-wide w-full max-w-xs lg:max-w-md lg:w-auto"
                    >
                        QUERO GARANTIR MINHA VAGA
                    </button>
                    <span className="text-[9px] lg:text-xs text-slate-500 flex items-center gap-1">
                        🔒 Acesso Imediato | Compra 100% Segura
                    </span>
                </div>

            </div>
        </section>
    );
}
