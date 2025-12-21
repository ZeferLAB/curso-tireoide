export function FooterSection() {
    return (
        <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-4 gap-4 text-center mb-16 text-sm lg:text-base">
                    <div className="p-6 rounded-lg bg-slate-800/50 text-slate-400">
                        <p className="font-semibold mb-2">Residência</p>
                        <p className="text-xs">Generalista</p>
                    </div>
                    <div className="p-6 rounded-lg bg-slate-800/50 text-slate-400">
                        <p className="font-semibold mb-2">Cursos Rápidos</p>
                        <p className="text-xs">Sem apoio</p>
                    </div>
                    <div className="p-6 rounded-lg bg-red-900/20 text-red-200 border border-red-900/30">
                        <p className="font-semibold mb-2">Aprender no Plantão</p>
                        <p className="text-xs">Alto Risco</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gold/20 text-gold border border-gold/30 shadow-lg transform md:-translate-y-2">
                        <p className="font-bold mb-2">Formação Dra. Claudia</p>
                        <p className="text-xs">Método + Prática Segura</p>
                    </div>
                </div>

                <div className="text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
                        Você pode continuar escrevendo laudos vagos… ou assumir o papel de médico consultor.
                    </h2>

                    <button className="bg-gold hover:bg-yellow-600 text-navy font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Quero me tornar referência em Tireoide
                    </button>

                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Formação em Ultrassom e Biópsia de Tireoide. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
