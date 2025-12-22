import { Zap } from 'lucide-react';

export function BonusSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="relative bg-navy rounded-2xl p-1 overflow-hidden shadow-2xl">
                    {/* Gold Gradient Border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-200 to-gold opacity-50"></div>

                    <div className="relative bg-white rounded-xl p-8 lg:p-12 text-center h-full">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-gold mb-6 animate-pulse">
                            <Zap className="w-8 h-8 fill-current" />
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-navy mb-4">
                            ⚡ Super Bônus Exclusivo: Hands-on Virtual
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
                            A gravação detalhada da minha técnica de PAAF, filmada com foco simultâneo na mão e na tela do ultrassom, para você modelar exatamente a execução e replicar com segurança no seu serviço.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
