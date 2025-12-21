import { ChevronDown } from 'lucide-react';

export function FAQSection() {
    const faqs = [
        { q: "Preciso ter experiência prévia?", a: "Recomendável ter base em USG" },
        { q: "Nunca fiz PAAF. Consigo aprender?", a: "Sim, do zero" },
        { q: "As mentorias ficam gravadas?", a: "Sim" },
        { q: "Preciso de aparelho top de linha?", a: "Não" },
        { q: "O certificado é válido?", a: "Sim, curso livre de aperfeiçoamento" }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl lg:text-4xl font-serif text-center text-navy font-bold mb-12">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-slate-50 rounded-lg overflow-hidden border border-slate-100 open:bg-white open:shadow-md transition-all duration-300">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-navy font-bold text-lg select-none">
                                {faq.q}
                                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
