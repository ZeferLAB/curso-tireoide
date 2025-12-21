import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-8">
                    <ShieldCheck className="w-16 h-16 text-navy" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                    Garantia Risco Zero
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Você tem 7 dias de garantia incondicional. Entre, assista às aulas iniciais, participe da comunidade. Se sentir que o conteúdo não é para você, devolvemos 100% do seu investimento — sem perguntas. A responsabilidade é minha.
                </p>
            </div>
        </section>
    );
}
