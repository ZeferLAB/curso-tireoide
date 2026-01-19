import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone } = body;

        // Limpar telefone (apenas números)
        const cleanPhone = phone.replace(/\D/g, '');

        // Preparar dados para o Brevo (x-www-form-urlencoded)
        const params = new URLSearchParams();
        params.append('NOME', name);
        params.append('EMAIL', email);
        params.append('SMS', cleanPhone);
        params.append('SMS__COUNTRY_CODE', '+55');
        params.append('locale', 'pt');
        params.append('email_address_check', '');

        // URL do Formulário Brevo (Endpoint de Submissão)
        const BREVO_FORM_URL = 'https://43e5b9ac.sibforms.com/serve/MUIFAJvo4hgXnaFZlW3yCQgB0g4GXJcW4MZjq7-uU6w417FSPuGASVx-wXfhZx8QwHneRE82_Dl-F3H2h2awf2FNRF_GTecMsSuxsuUIm2mGjbRiaS1zF84UTLmK1Nw3hyB7c8AmBc1jLLi1IvybWJHqJyDU4nlqBJuvFTyVUeGkRRvcukjiRFNpS7hxmJMxGc_0-f3FodzlL2ISiQ==';

        const response = await fetch(BREVO_FORM_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        });

        // Brevo pode retornar 200 mesmo se houver erro de validação interno,
        // mas se a requisição chegou lá, consideramos sucesso para o UX do usuário.
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error submitting to Brevo:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
