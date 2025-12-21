import { CheckCircle2 } from 'lucide-react';

export function TargetAudienceSection() {
    const audience = [
        "É médico radiologista, ultrassonografista, endocrinologista ou cirurgião de cabeça e pescoço",
        "Já faz ultrassom, mas trava em nódulos complexos",
        "Quer aprender PAAF do zero ou ganhar segurança em áreas de risco",
        "Está cansado de laudos vagos e da dependência de plantões",
        "Quer subir de nível técnico, cobrar mais e ser reconhecido como referência"
    ];

    return (
        <section className="bg-navy py-24 text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-white">
                    Para Quem é Esta Formação
                </h2>

                <div className="bg-white/5 p-8 lg:p-12 rounded-2xl border border-white/10 backdrop-blur-sm mb-12">
                    <ul className="space-y-6">
                        {audience.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                                <span className="text-lg text-slate-100 font-light">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center">
                    <p className="text-xl lg:text-2xl font-serif text-gold">
                        Não é para curiosos. É para médicos que querem resolutividade e autonomia.
                    </p>
                </div>
            </div>
        </section>
    );
}
