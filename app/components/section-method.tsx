export function MethodSection() {
    const cards = [
        {
            title: "Fundamentação Diagnóstica",
            text: "Domínio da física do ultrassom para gerar a melhor imagem possível + anatomia cervical aplicada para evitar armadilhas."
        },
        {
            title: "Sistematização do Raciocínio (TI-RADS)",
            text: "Aplicação prática dos critérios (ACR, K-TIRADS, EU-TIRADS) para decidir com clareza quando biopsiar — sem dúvida e sem laudos defensivos."
        },
        {
            title: "Técnica Intervencionista – A “Mão”",
            text: "Treinamento passo a passo da triangulação agulha–transdutor, posicionamento e coleta para PAAF segura e eficaz."
        }
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif text-navy font-bold mb-4">
                        A segurança não vem da sorte. Vem do método certo.
                    </h2>
                    <p className="text-lg text-slate-600">
                        A Formação é baseada na Tríade da Competência em Tireoide, refinada em 30 anos de prática clínica:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-serif font-bold text-navy mb-4 h-14 flex items-center">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="inline-block bg-navy/5 text-navy px-6 py-3 rounded-lg font-medium">
                        Tudo isso com aulas gravadas + mentorias ao vivo + comunidade de suporte, para você aplicar no seu ritmo, mas nunca sozinho.
                    </p>
                </div>
            </div>
        </section>
    );
}
