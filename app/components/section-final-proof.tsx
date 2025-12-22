import Image from 'next/image';

export function FinalProofSection() {
    return (
        <section className="bg-white py-20 lg:py-24 font-['Poppins'] border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#041021] mb-16 max-w-4xl mx-auto uppercase leading-snug">
                    VEJA O IMPACTO NA CARREIRA DE QUEM <span className="text-[#F2B705]">JÁ APLICA O MÉTODO:</span>
                </h2>

                {/* Grid of Prints */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    {[
                        { src: "/proof/p1.jpg", alt: "Depoimento Impacto Carreira 1" },
                        { src: "/proof/p2.jpg", alt: "Depoimento Impacto Carreira 2" },
                        { src: "/proof/p3.jpg", alt: "Depoimento Impacto Carreira 3" }
                    ].map((item, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 border border-slate-200 bg-slate-50 group">
                            {/* Decorative simplistic frame/header */}
                            <div className="h-6 bg-white w-full border-b border-slate-100 flex items-center px-4 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-yellow-400 transition-colors"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
                            </div>
                            <div className="relative aspect-auto p-2 bg-white">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={500}
                                    height={700}
                                    className="w-full h-auto object-contain rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
