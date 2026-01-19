'use client';

import Image from 'next/image';

export function TestimonialsSection() {
    return (
        <section className="bg-slate-50 py-16 lg:py-24 font-['Poppins']">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#041021] mb-12 max-w-4xl mx-auto uppercase leading-snug">
                    NÃO ACREDITE APENAS NA MINHA PALAVRA. VEJA O QUE MÉDICOS DE TODO O BRASIL DIZEM SOBRE O MÉTODO.
                </h2>

                {/* Grid of Prints */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">

                    {[
                        {
                            text: "Boa tarde! Gostaria de agradecer a Dra Cláudia pelos resultados que venho conquistando nas PAAF de tireoide. Fazem alguns anos que realizo Core biopsy de mama e PAAF de tireoide e de outras estruturas superficiais e a pedra no meu caminho sempre foi a tireoide. Muitos resultados com Bethesda I, chegando a pensar em deixar de fazer o procedimento na tireoide. E olhe que fiz alguns outros cursos e sempre com quase nenhuma melhora nos resultados. Após as orientações da Dra Cláudia, simples e diretas, venho obtendo resultados muito satisfatórios, pra minha pessoa, pois desde então não tive mais nenhum resultado Bethesda I. Muito agradecido mestra pelos seus ensinamentos!",
                            author: "Aluno do Curso"
                        },
                        {
                            text: "Aulas com didática incrível, o que é dificil torna fácil pelo forma que a Dr Cláudia passa o conteúdo. Paciente e esclarecedora fiz o curso aprendi muito.",
                            author: "Aluno do Curso"
                        },
                        {
                            text: "Quero agradecer a professora Cláudia pela sua dedicação incansável, de passar conhecimentos e tirar nossa dúvidas durante e após as aulas.",
                            author: "Aluno do Curso"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 border border-slate-200 bg-white group p-6 flex flex-col justify-between">
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-4">
                                    <svg className="w-8 h-8 text-[#F2B705] opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.896 14.389 15.954 15.133 15.176C15.877 14.398 16.901 14.009 18.205 14.009H18.577C18.966 14.009 19.338 14.045 19.693 14.117C18.986 12.858 18.632 11.532 18.632 10.139C18.632 9.07 18.904 8.082 19.447 7.175C19.99 6.268 20.734 5.541 21.68 4.995C22.626 4.449 23.668 4.176 24.807 4.176V9.018C23.957 9.018 23.532 9.443 23.532 10.293C23.532 10.966 23.754 11.455 24.197 11.76C24.64 12.065 25.074 12.217 25.498 12.217C26.115 12.217 26.658 12.001 27.127 11.569C27.596 11.137 27.83 10.575 27.83 9.883C27.83 8.351 27.288 7.025 26.204 5.905C25.12 4.785 23.692 4.225 21.919 4.225H21.464C19.317 4.225 17.433 4.904 15.811 6.262C14.189 7.62 13.047 9.47 12.385 11.812C11.967 11.082 11.396 10.457 10.672 9.937C9.948 9.417 9.155 9.157 8.293 9.157H8.056C6.11 9.157 4.442 9.832 3.052 11.182C1.662 12.532 0.967 14.229 0.967 16.273C0.967 17.681 1.341 18.966 2.089 20.128C2.837 21.29 3.869 22.186 5.185 22.816C6.501 23.446 7.917 23.761 9.433 23.761C11.239 23.761 12.767 23.336 14.017 22.486V21ZM5.567 19.382C5.071 18.894 4.823 18.272 4.823 17.516C4.823 16.76 5.071 16.138 5.567 15.65C6.063 15.162 6.678 14.918 7.412 14.918C8.146 14.918 8.761 15.162 9.257 15.65C9.753 16.138 10.001 16.76 10.001 17.516C10.001 18.272 9.753 18.894 9.257 19.382C8.761 19.87 8.146 20.114 7.412 20.114C6.678 20.114 6.063 19.87 5.567 19.382Z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 italic leading-relaxed text-sm lg:text-base">
                                    "{item.text}"
                                </p>
                            </div>

                            {/* Author */}
                            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-[#041021] flex items-center justify-center text-[#F2B705] font-bold text-sm">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[#041021] font-bold text-sm">{item.author}</p>
                                    <div className="flex text-[#F2B705] text-xs">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Optional CTA */}
                <div className="text-center">
                    <button
                        onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#041021] text-lg font-bold border-b-2 border-[#F2B705] hover:text-[#F2B705] transition-colors pb-1"
                    >
                        QUERO TER ESSA SEGURANÇA NA MINHA PRÁTICA ➔
                    </button>
                </div>

            </div>
        </section>
    );
}
