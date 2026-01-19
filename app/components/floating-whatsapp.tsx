import Image from 'next/image';

export function FloatingWhatsApp() {
    const phoneNumber = "5571996825482";
    const message = encodeURIComponent("Olá! Estou na página do Curso de Tireoide e gostaria de tirar uma dúvida sobre a matrícula.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 group">
            {/* Tooltip / Balãozinho */}
            <div className="hidden md:block bg-white text-navy px-4 py-2 rounded-lg shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 relative">
                <span className="font-medium text-sm whitespace-nowrap">Dúvidas sobre a Formação?</span>
                {/* Seta do balão */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-100 rotate-45 transform"></div>
            </div>

            {/* Link do WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 bg-transparent transition-transform duration-300 hover:scale-110 focus:outline-none"
                aria-label="Falar no WhatsApp"
            >
                {/* Ping Effect for Attention */}
                <span className="absolute inset-0 rounded-2xl bg-green-500 opacity-75 animate-ping"></span>

                <div className="relative w-14 h-14 drop-shadow-2xl">
                    <Image
                        src="/whatsapp-button.png"
                        alt="WhatsApp"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </a>
        </div>
    );
}
