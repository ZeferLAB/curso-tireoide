'use client';

import { Medal } from 'lucide-react';
import Image from 'next/image';

export function BioSection() {
    return (
        <section className="bg-[#041021] py-16 lg:py-24 font-['Poppins'] text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#F2B705] leading-tight uppercase">
                            COM A MENTORIA DE QUEM VIVE O CAMPO DE BATALHA HÁ 30 ANOS.
                        </h2>

                        <div className="space-y-6 text-slate-300 leading-relaxed text-base lg:text-lg font-light">
                            <p>
                                Eu não nasci sabendo fazer biópsia e nem sempre tive a segurança que tenho hoje. No início, senti na pele a <strong className="text-white font-bold">lacuna cruel</strong> da nossa formação: a residência nos enche de teoria, mas muitas vezes nos deixa sozinhos na hora da prática, com o paciente na mesa e a agulha na mão.
                            </p>
                            <p>
                                A virada de chave para mim não foi 'mais um livro'. Foi entender que a segurança não vem da sorte, vem do <strong className="text-white font-bold">domínio dos fundamentos</strong>. Percebi que ao dominar a Física (para controlar a máquina) e a Anatomia (para controlar a mão), o medo desaparecia.
                            </p>
                            <p>
                                Hoje, com mais de <strong className="text-white font-bold">2.000 biópsias realizadas por ano</strong> e Título de Especialista pelo CBR, decidi criar esta Formação para ser o mentor que eu gostaria de ter tido lá atrás. Meu objetivo é encurtar o seu caminho entre a insegurança e a excelência técnica.
                            </p>
                        </div>

                        {/* Signature - Placeholder font style */}
                        <div className="pt-4">
                            <span className="font-handwriting text-2xl lg:text-3xl text-white opacity-90 block" style={{ fontFamily: 'cursive' }}>
                                Dra. Claudia Chagas
                            </span>
                        </div>

                        {/* Credentials List */}
                        <div className="grid gap-4 pt-6 border-t border-white/10">
                            {[
                                "Médica pela UFBA com Título de Especialista pelo CBR.",
                                "Head de Biópsias em hospitais de alto volume e clínicas privadas.",
                                "Coordenadora de cursos de referência em Intervenção."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Medal className="w-6 h-6 text-[#F2B705] shrink-0 mt-0.5" />
                                    <span className="text-slate-200 text-sm lg:text-base font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button
                                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-[#F2B705] hover:bg-[#d9a404] text-[#041021] text-lg font-extrabold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                            >
                                QUERO APRENDER COM A DRA. CLAUDIA
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Photo */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-[#F2B705]/30 shadow-[0_0_40px_rgba(4,16,33,0.5)] bg-slate-800">
                            <Image
                                src="/claudia-bio.jpg"
                                alt="Dra. Claudia Chagas"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
