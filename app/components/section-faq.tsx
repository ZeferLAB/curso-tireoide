import { ChevronDown } from 'lucide-react';

export function FAQSection() {
    const faqs = [
        {
            q: "As aulas são ao vivo ou gravadas?",
            a: "O Curso é uma formação Híbrida. Você tem acesso imediato à Academia de Procedimentos (aulas gravadas em alta qualidade) para assistir quando quiser. Além disso, teremos os Encontros de Mentoria Ao Vivo (quinzenais) para análise de casos e tira-dúvidas diretamente com a Dra. Claudia."
        },
        {
            q: "Qual é a duração das aulas e do curso?",
            a: "O curso foi desenhado para médicos ocupados. As aulas gravadas são objetivas e divididas por temas específicos, evitando vídeos longos e cansativos de 2 horas. Você consegue assistir a um tópico completo entre um paciente e outro. O tempo total de conclusão depende do seu ritmo, mas em 12 semanas é possível consumir todo o conteúdo e participar das mentorias."
        },
        {
            q: "Por quanto tempo terei acesso?",
            a: "Você terá 1 ano de acesso à plataforma de aulas gravadas para rever quantas vezes precisar. O acesso à Comunidade e às Mentorias ao vivo é válido por 1 ano."
        },
        {
            q: "Tem material didático para baixar?",
            a: "Sim, e muito mais do que simples slides. Você terá acesso ao Drive de Protocolos Médicos, contendo modelos de laudos editáveis, tabelas de classificação (TI-RADS/Bethesda) para consulta rápida no celular e artigos científicos traduzidos."
        },
        {
            q: "Quando abre uma nova turma?",
            a: "As vagas para o Curso estão abertas agora, mas são limitadas devido à capacidade de suporte da Dra. Claudia nas mentorias e no WhatsApp. Se as vagas para o acompanhamento ao vivo esgotarem, encerraremos as inscrições sem aviso prévio para prezar pela qualidade do grupo."
        },
        {
            q: "Em qual plataforma fica o curso? Consigo assistir no celular?",
            a: "Todo o material está hospedado na Hotmart, a plataforma mais segura do mundo. Você pode assistir de qualquer dispositivo (celular, tablet, notebook) e até baixar as aulas no aplicativo para assistir offline quando estiver sem internet."
        },
        {
            q: "Como funciona o parcelamento e o pagamento?",
            a: "Você pode parcelar em até 12x no cartão de crédito. Também aceitamos pagamento à vista via PIX, Boleto ou saldo da Hotmart. Caso precise de uma condição especial ou parcelamento no boleto, chame nossa equipe no botão de WhatsApp nesta página."
        },
        {
            q: "Como funciona a garantia?",
            a: "Você tem 7 dias de Garantia Incondicional. Inscreva-se, entre na plataforma, assista às primeiras aulas e conheça a comunidade. Se por qualquer motivo achar que não é para você, basta enviar um e-mail para [SEU EMAIL DE SUPORTE AQUI] que devolveremos 100% do seu investimento. O risco é todo nosso."
        }
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
