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
                "Bootcamp de Física e Ajuste de Imagem – controle total do aparelho, independentemente do modelo",
                "Bootcamp de Domínio do TI-RADS – raciocínio claro para classificar e decidir sem dúvida",
                "Protocolo Descomplicando a Biópsia – técnica, posicionamento e triangulação",
                "Masterclass de Alcoolização de Nódulos da Tireoide – procedimento de alto valor agregado",
                "O Olhar do Especialista – aulas com convidados (cirurgiões e especialistas)"
            ]
        },
        {
            title: "Drive de Protocolos Médicos – Ferramentas de Campo",
            subtitle: "Tudo o que você precisa para ganhar tempo e segurança no dia a dia:",
            icon: FileText,
            items: [
                "Arsenal de Laudos Editáveis e validados",
                "Guias de Bolso (TI-RADS e Bethesda)",
                "Biblioteca de Referência com artigos traduzidos e comentados"
            ]
        },
        {
            title: "Feedback e Mentoria – O Ouro da Formação",
            subtitle: "Onde o conhecimento vira confiança:",
            icon: MessageCircle,
            items: [
                "Plantão de Dúvidas ao Vivo (6 encontros): Hotseat quinzenal no Zoom para análise dos seus casos reais e difíceis",
                "Grupo de Second Opinion (WhatsApp): Acesso por 1 ano à comunidade para tirar dúvidas em tempo real e trocar experiências com outros médicos"
            ]
        }
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-4">
                    {modules.map((module, idx) => {
                        const isOpen = openIndex === idx;
                        const Icon = module.icon;

                        return (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4 lg:gap-6">
                                        <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors", isOpen ? "bg-navy text-gold" : "bg-slate-100 text-slate-400")}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className={clsx("text-xl font-serif font-bold transition-colors", isOpen ? "text-navy" : "text-slate-700")}>
                                                {module.title}
                                            </h3>
                                            {!isOpen && (
                                                <p className="text-sm text-slate-500 mt-1 hidden lg:block">
                                                    {module.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {isOpen ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-slate-400" />}
                                </button>

                                <div className={clsx("transition-all duration-300 ease-in-out border-t border-slate-100", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
                                    <div className="p-8 bg-slate-50/50">
                                        <p className="font-medium text-navy mb-4 italic">
                                            {module.subtitle}
                                        </p>
                                        <ul className="space-y-3">
                                            {module.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
