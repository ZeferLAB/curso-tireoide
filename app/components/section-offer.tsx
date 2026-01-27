'use client';

import { CheckCircle, Lock } from 'lucide-react';
import { useState } from 'react';
import { CheckoutProtectionModal } from './checkout-protection-modal';

export function OfferSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deliverables = [
        "Acesso Imediato à Academia",
        "Drive de Protocolos",
        "6 Encontros de Mentoria",
        "1 Ano de Comunidade WhatsApp",
        "Super Bônus: Hands-on Virtual"
    ];

    const values = [
        { item: "Ultrassom e Biópsia de Tireoide", price: "R$ 4.997,00" },
        { item: "Encontros ao Vivo", price: "R$ 5.997,00" },
        { item: "Comunidade WhatsApp", price: "R$ 1.997,00" },
        { item: "Alcoolização de Nódulos", price: "R$ 997,00" },
        { item: "O Olhar do Cirurgião", price: "Inestimável" },
        { item: "Bethesda e Biópsia", price: "Inestimável" },
        { item: "Biblioteca e Laudos", price: "R$ 297,00" },
        { item: "E-book Tireoide", price: "R$ 197,00" },
    ];

    return (
        <section id="oferta" className="bg-navy py-24 text-white">
            <CheckoutProtectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">
                        A Oferta Completa - Torne-se um Médico Consultor hoje
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Deliverables List */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif text-gold mb-6">Você terá acesso a:</h3>
                        <ul className="space-y-4">
                            {deliverables.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-gold w-6 h-6 shrink-0" />
                                    <span className="text-lg text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pricing Card */}
                    <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>

                        {/* Receipt Style List */}
                        <div className="space-y-3 mb-8 text-sm lg:text-base border-b-2 border-dashed border-slate-200 pb-8">
                            {values.map((v, i) => (
                                <div key={i} className="flex justify-between items-center text-slate-600">
                                    <span>{v.item}</span>
                                    <span className="font-semibold">{v.price}</span>
                                </div>
                            ))}
                            <div className="flex justify-between items-center text-red-500 font-bold text-lg pt-4">
                                <span>Valor total real:</span>
                                <span className="line-through decoration-2">R$ 14.482,00</span>
                            </div>
                        </div>

                        <div className="text-center space-y-6">
                            <div>
                                <p className="text-slate-500 font-medium mb-2">Condição Exclusiva</p>
                                <div className="text-4xl lg:text-5xl font-bold text-navy">
                                    12 x de R$ 309,96
                                </div>
                                <p className="text-slate-600 mt-2 font-medium">
                                    ou à vista R$ 2.997,00
                                </p>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                            >
                                Garantir minha vaga agora
                            </button>

                            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                <Lock className="w-4 h-4" />
                                <span>Pagamento 100% Seguro</span>
                            </div>

                            <p className="text-xs text-slate-400 max-w-xs mx-auto">
                                Um investimento que pode ser recuperado com poucas PAAFs e gerar retorno pelo resto da sua carreira.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
