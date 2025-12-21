import { Quote } from 'lucide-react';

export function TestimonialsSection() {
    const testimonials = [
        "Mais segurança na classificação TI-RADS",
        "Confiança para realizar PAAF",
        "Reconhecimento de colegas e cirurgiões",
        "Evolução técnica real na prática diária"
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl lg:text-4xl font-serif text-center text-navy font-bold mb-16">
                    Médicos que passaram pela formação relatam:
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {testimonials.map((text, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Quote className="w-8 h-8 text-gold/30 mb-4" />
                            <p className="text-slate-700 font-medium leading-relaxed">
                                "{text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image Placeholders Area */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="aspect-[3/4] bg-slate-200 rounded-lg animate-pulse flex items-center justify-center text-slate-400 text-sm">
                            Print Real {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
