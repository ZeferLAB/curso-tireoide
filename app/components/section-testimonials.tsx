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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

                    {[
                        { src: "/testimonials/t1.jpg", alt: "Depoimento Médico 1" },
                        { src: "/testimonials/t2.jpg", alt: "Depoimento Médico 2" },
                        { src: "/testimonials/t3.jpg", alt: "Depoimento Médico 3" },
                        { src: "/testimonials/t4.jpg", alt: "Depoimento Médico 4" }
                    ].map((item, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-200 bg-white group">
                            {/* Decorative simplistic frame/header */}
                            <div className="h-4 bg-[#F5F5F5] w-full border-b border-slate-100 flex items-center px-4 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="relative aspect-auto">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                    unoptimized
                                />
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
