import { MessageCircle, Mail, Clock } from 'lucide-react';

export function SupportSection() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-2xl font-serif text-navy font-bold mb-8">
                    Suporte Completo ao Aluno
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700">Comunidade exclusiva no WhatsApp</span>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700">Comentários na plataforma</span>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700">Suporte por e-mail ou WhatsApp</span>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700">Respostas em até 24h úteis</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
