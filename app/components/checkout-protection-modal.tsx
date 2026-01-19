'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

interface CheckoutProtectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CheckoutProtectionModal({ isOpen, onClose }: CheckoutProtectionModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Enviar dados para o Brevo (Background)
            const brevoFormData = new FormData();
            brevoFormData.append('NOME', formData.name);
            brevoFormData.append('EMAIL', formData.email);
            brevoFormData.append('SMS', formData.phone);
            brevoFormData.append('SMS__COUNTRY_CODE', '+55');
            brevoFormData.append('locale', 'pt');
            brevoFormData.append('email_address_check', '');

            await fetch('https://43e5b9ac.sibforms.com/serve/MUIFAJvo4hgXnaFZlW3yCQgB0g4GXJcW4MZjq7-uU6w417FSPuGASVx-wXfhZx8QwHneRE82_Dl-F3H2h2awf2FNRF_GTecMsSuxsuUIm2mGjbRiaS1zF84UTLmK1Nw3hyB7c8AmBc1jLLi1IvybWJHqJyDU4nlqBJuvFTyVUeGkRRvcukjiRFNpS7hxmJMxGc_0-f3FodzlL2ISiQ==', {
                method: 'POST',
                body: brevoFormData,
                mode: 'no-cors' // Importante para não bloquear Cross-Origin
            });

            // 2. Redirecionar para Hotmart com parâmetros
            // URL Base: https://pay.hotmart.com/R97988256B
            // Params: name, email, phoneac (DD + numero)
            const params = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                phoneac: formData.phone // Hotmart geralmente aceita 'phoneac' ou 'phone_number'
            });

            window.location.href = `https://pay.hotmart.com/R97988256B?checkoutMode=10&${params.toString()}`;

        } catch (error) {
            console.error('Erro ao processar', error);
            // Fallback: Redireciona mesmo se der erro no log (pra não perder a venda)
            window.location.href = `https://pay.hotmart.com/R97988256B?checkoutMode=10`;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop with blurry effect */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-[#F0F0F0] rounded-xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-[#041021] leading-tight">
                        Digite seus dados abaixo e crie seu acesso:
                    </h3>
                </div>

                {/* Form - React Controlled */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Seu Nome Completo"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#C68D08]/50 focus:ring-2 focus:ring-[#C68D08]/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 bg-white"
                        />
                    </div>

                    <div>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Seu Melhor E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#C68D08]/50 focus:ring-2 focus:ring-[#C68D08]/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 bg-white"
                        />
                    </div>

                    <div>
                        <input
                            required
                            type="tel"
                            name="phone"
                            placeholder="Seu WhatsApp (com DDD)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 focus:border-[#C68D08]/50 focus:ring-2 focus:ring-[#C68D08]/20 outline-none transition-all placeholder:text-slate-400 text-slate-800 bg-white"
                        />
                    </div>

                    <p className="text-xs text-slate-500 text-center">
                        Ao clicar em continuar, você concorda em receber atualizações do curso.
                    </p>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#C68D08] hover:bg-[#a37406] text-white font-bold py-4 rounded-lg mt-6 uppercase tracking-wide transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                    >
                        {isLoading ? 'Processando...' : 'CONTINUAR PARA PAGAMENTO ->'}
                    </button>

                    <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                        🔒 Seus dados estão 100% seguros
                    </p>
                </form>
            </div>
        </div>
    );
}
