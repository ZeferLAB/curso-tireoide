export function ObjectionsSection() {
    const objections = [
        {
            problem: "Não dá para aprender biópsia online.",
            solution: "O método ensina raciocínio espacial, triangulação e tomada de decisão — a mão vem como consequência."
        },
        {
            problem: "Não tenho tempo.",
            solution: "As aulas são gravadas e as mentorias ficam disponíveis. Você estuda no seu ritmo."
        },
        {
            problem: "Tenho medo de complicações.",
            solution: "O curso existe exatamente para isso: dominar anatomia e técnica antes da agulha tocar o paciente."
        },
        {
            problem: "Já fiz residência.",
            solution: "Aqui você aprende o que a residência não consegue entregar: foco, repetição e método estruturado."
        }
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {objections.map((obj, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-gold/30 transition-colors">
                            <h3 className="text-xl font-serif font-bold text-navy mb-4 flex items-start gap-2">
                                <span className="text-red-500 text-2xl leading-none">×</span>
                                "{obj.problem}"
                            </h3>
                            <div className="pl-6 border-l-2 border-green-500">
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {obj.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
