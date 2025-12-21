export function BioSection() {
    return (
        <section className="bg-white py-24 mb-0">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/3">
                        <div className="aspect-[3/4] bg-slate-200 rounded-2xl shadow-xl relative overflow-hidden border-4 border-white">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                Foto Dra. Claudia
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy">
                            Quem é a Dra. Claudia
                        </h2>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Médica formada pela UFBA, com Título de Especialista pelo CBR e RQE ativo. São mais de 30 anos de prática clínica, com foco total em Radiologia Intervencionista de Cabeça e Pescoço e Mama.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Média de 2.000 biópsias por ano",
                                "Atuação em hospitais de alto volume",
                                "Coordenadora de cursos de biópsia",
                                "Centenas de médicos treinados"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-slate-600 text-lg">
                            "Mais do que títulos, a Dra. Claudia é médica de trincheira. Ela entende a solidão da sala de exame — e criou um método para transformar medo em domínio técnico."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
