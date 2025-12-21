import { Play } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-5xl/tight font-serif font-bold text-white">
                            Pare de emitir laudos vagos e se torne o Médico Consultor de referência em Tireoide na sua região
                        </h1>
                        <p className="text-lg text-slate-200 font-light leading-relaxed">
                            Domine o raciocínio diagnóstico, a técnica da PAAF e a segurança anatômica para realizar exames e biópsias com confiança absoluta — mesmo em casos complexos.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Video Placeholder with Gold Border */}
                        <div className="aspect-video w-full bg-slate-900 border-2 border-gold rounded-lg shadow-2xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-all duration-300"></div>
                            <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10">
                                <Play className="w-8 h-8 text-navy fill-current" />
                            </div>
                            <p className="absolute bottom-6 font-medium tracking-wide text-sm opacity-90 z-10">
                                ASSISTIR APRESENTAÇÃO
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border border-gold/30 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
