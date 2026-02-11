'use client';

import { Check } from 'lucide-react';
import { YouTubeVSLPlayer } from './youtube-vsl-player';

export function HeroSection() {
    return (
        <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden font-[family-name:var(--font-montserrat)]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="text-left lg:pr-8">
                        {/* Kicker */}
                        <span className="block text-[10px] lg:text-xs font-bold tracking-[0.2em] text-[#B8860B] uppercase mb-3 lg:mb-5">
                            FORMAÇÃO PARA MÉDICOS • TIREOIDE E BIÓPSIA
                        </span>

                        {/* Headline */}
                        <h1 className="text-[26px] sm:text-[32px] lg:text-[42px] font-bold leading-[1.2] mb-5 text-[#0a192f] tracking-tight">
                            Domine a Tireoide em 12 Semanas e Torne-se a <span className="text-[#B8860B] italic relative inline-block">Referência</span> da sua Região.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-[15px] sm:text-[16px] lg:text-[17px] mb-6 lg:mb-8 font-medium text-[#4A4A4A] leading-relaxed max-w-xl">
                            Elimine de vez a insegurança no TI-RADS. Descubra a Tríade da Competência para ter mão firme na biópsia e autonomia total no diagnóstico.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                            <button
                                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white text-base lg:text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide w-full sm:w-auto"
                            >
                                👉 QUERO FAZER MINHA MATRÍCULA
                            </button>
                            <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 uppercase tracking-wider py-2">
                                🔒 Compra 100% Segura
                            </span>
                        </div>

                        {/* Bullets - Inline with text column on desktop */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] lg:text-sm text-[#4A4A4A] font-semibold">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#2ecc71]" />
                                <span>Formação Híbrida</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#2ecc71]" />
                                <span>Segurança Técnica</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#2ecc71]" />
                                <span>Dupla Certificação</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Video */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="shadow-2xl rounded-xl overflow-hidden border-4 border-white bg-black">
                            <YouTubeVSLPlayer videoId="sSFsLnG2vQw" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
