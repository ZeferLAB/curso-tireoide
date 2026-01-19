'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, FileText, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

export function ModulesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const modules = [
        {
            title: "Academia de Procedimentos – Aulas Gravadas (Acesso Vitalício)",
            subtitle: "Treinamento técnico profundo, direto ao ponto e aplicável na rotina:",
            icon: BookOpen,
            items: [
                "<strong>Imersão em Física e Ajuste de Imagem</strong> – controle total do aparelho, independentemente do modelo",
                "<strong>Domínio do Sistema TI-RADS</strong> – raciocínio claro para classificar e decidir sem dúvida",
                "<strong>Protocolo de Biópsia e Triangulação</strong> – técnica, posicionamento e manuseio da agulha",
                "<strong>Masterclass de Alcoolização</strong> de Nódulos da Tireoide – procedimento de alto valor agregado",
                "<strong>O Olhar do Especialista</strong> – aulas com convidados (cirurgiões e especialistas)"
            ]
        },
        {
            title: "Drive de Protocolos Médicos – Ferramentas de Campo",
            subtitle: "Tudo o que você precisa para ganhar tempo e segurança no dia a dia:",
            icon: FileText,
            items: [
                "<strong>Banco de Laudos Editáveis</strong> e validados",
                "<strong>Guias de Bolso</strong> (TI-RADS e Bethesda) para consulta rápida",
                "<strong>Biblioteca de Referência</strong> com artigos traduzidos e comentados"
            ]
        },
        {
            title: "Feedback e Mentoria – O Ouro da Formação",
            subtitle: "Onde o conhecimento vira confiança:",
            icon: MessageCircle,
            items: [
                "<strong>Plantão de Dúvidas ao Vivo</strong> (6 encontros): Grand Round quinzenal no Zoom para análise dos seus casos reais e difíceis",
                "<strong>Grupo de Second Opinion</strong> (WhatsApp): Acesso por 1 ano à comunidade para tirar dúvidas e trocar experiências com outros médicos"
            ]
        }
    ];

    return (
        <section className="bg-[#F5F5F5] py-16 lg:py-24 font-['Poppins']">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Headline Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#041021] mb-4 uppercase leading-snug">
                        MAIS DO QUE UM CURSO: UMA ESTRUTURA COMPLETA DE EVOLUÇÃO PROFISSIONAL
                    </h2>
                    <p className="text-lg text-slate-600 font-light max-w-3xl mx-auto">
                        Esta formação foi desenhada para transformar conhecimento técnico em autoridade prática, reunindo conteúdo, ferramentas e acompanhamento.
                    </p>
                </div>

                <div className="space-y-4">
                    {modules.map((module, idx) => {
                        const isOpen = openIndex === idx;
                        const Icon = module.icon;

                        return (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:border-[#F2B705]/50 transition-colors duration-300">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors", isOpen ? "bg-[#041021]" : "bg-white border border-slate-100")}>
                                            <Icon className="w-6 h-6 text-[#F2B705]" />
                                        </div>
                                        <div>
                                            <h3 className={clsx("text-lg lg:text-2xl font-bold transition-colors uppercase", isOpen ? "text-[#041021]" : "text-slate-700 group-hover:text-[#041021]")}>
                                                {module.title}
                                            </h3>
                                            {!isOpen && (
                                                <p className="text-sm text-slate-500 mt-1 hidden lg:block font-light">
                                                    {module.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Enhanced Toggle Icon */}
                                    <div className="flex items-center gap-2 text-sm font-medium text-[#F2B705]">
                                        <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                                            {isOpen ? "Minimizar" : "Ver Detalhes"}
                                        </span>
                                        {isOpen ?
                                            <ChevronUp className="w-6 h-6 lg:w-8 lg:h-8" /> :
                                            <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8" />
                                        }
                                    </div>
                                </button>

                                <div className={clsx("transition-all duration-300 ease-in-out border-t border-slate-100", isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
                                    <div className="p-8 bg-slate-50/50">
                                        <p className="font-medium text-[#041021] mb-6 italic border-l-4 border-[#F2B705] pl-4">
                                            {module.subtitle}
                                        </p>
                                        <ul className="space-y-4">
                                            {module.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                                    <div className="w-2 h-2 rounded-full bg-[#F2B705] mt-2 shrink-0"></div>
                                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#041021] hover:bg-[#1a253a] text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide border-2 border-[#F2B705]"
                    >
                        Garantir minha vaga agora
                    </button>
                </div>
            </div>
        </section>
    );
}
