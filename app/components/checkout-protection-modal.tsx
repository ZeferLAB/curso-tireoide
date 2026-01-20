'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import Script from 'next/script';

interface CheckoutProtectionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

declare global {
    interface Window {
        ml_webform_success_35970489?: () => void;
    }
}

export function CheckoutProtectionModal({ isOpen, onClose }: CheckoutProtectionModalProps) {

    useEffect(() => {
        if (isOpen) {
            // Define the success callback in the global scope
            window.ml_webform_success_35970489 = () => {
                // Get values from the form inputs
                // The MailerLite form uses name="fields[name]", "fields[email]", "fields[phone]"
                const nameInput = document.querySelector('input[name="fields[name]"]') as HTMLInputElement;
                const emailInput = document.querySelector('input[name="fields[email]"]') as HTMLInputElement;
                const phoneInput = document.querySelector('input[name="fields[phone]"]') as HTMLInputElement;

                const name = nameInput?.value || '';
                const email = emailInput?.value || '';
                const phone = phoneInput?.value || '';

                // Clean phone number (remove non-digits)
                const cleanPhone = phone.replace(/\D/g, '');

                // Hotmart Redirect Logic
                const hotmartParams = new URLSearchParams({
                    name: name,
                    email: email,
                    phoneac: cleanPhone,
                    // Force Credit Card by hiding others (optional but helpful if user wants just credit card)
                    // hideBillet=1 (Hide Boleto)
                    // hidePix=1 (Hide Pix)
                });

                // Redirect to Hotmart with forced parameters if needed
                // Using checkoutMode=10 is common for "custom checkout" but standard checkout supports everything.
                // To avoid "payment at sight" (Boleto/Pix) defaulting, we can try hiding them or just ensuring standard flow.
                // User reported it was defaulting to single payment. 
                // Let's add explicit hide parameters to encourage credit card view.
                window.location.href = `https://pay.hotmart.com/R97988256B?checkoutMode=10&${hotmartParams.toString()}`;
            };
        }

        return () => {
            // Cleanup check (optional, but good practice)
            // window.ml_webform_success_35970489 = undefined; 
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop with blurry effect */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-[#F0F0F0] rounded-xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-200 overflow-hidden">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-10 text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* MailerLite Scripts */}
                {/* 
                     NOTE: We are loading the script strategy="afterInteractive" or just inline inside the component 
                     since it needs to be available for the form.
                 */}
                <Script
                    src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
                    strategy="lazyOnload"
                />
                {/* This fetch seems to be a tracking/initialization call from MailerLite */}
                <Script id="ml-fetch-tracker">
                    {`fetch("https://assets.mailerlite.com/jsonp/2050322/forms/177072444094285317/takel")`}
                </Script>

                {/* MailerLite CSS - Scoped to avoid global pollution if possible, but keeping critical parts */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url("https://assets.mlcdn.com/fonts.css?version=1768479");
                    
                    /* Custom Loader */
                    .ml-form-embedSubmitLoad {
                      display: inline-block;
                      width: 20px;
                      height: 20px;
                    }

                    .ml-form-embedSubmitLoad:after {
                      content: " ";
                      display: block;
                      width: 11px;
                      height: 11px;
                      margin: 1px;
                      border-radius: 50%;
                      border: 4px solid #fff;
                      border-color: #ffffff #ffffff #ffffff transparent;
                      animation: ml-form-embedSubmitLoad 1.2s linear infinite;
                    }
                    @keyframes ml-form-embedSubmitLoad {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }

                    /* General Form Styles from MailerLite */
                    #mlb2-35970489.ml-form-embedContainer {
                        box-sizing: border-box;
                        display: table;
                        margin: 0 auto;
                        position: static;
                        width: 100% !important;
                    }
                    #mlb2-35970489.ml-form-embedContainer h4,
                    #mlb2-35970489.ml-form-embedContainer p,
                    #mlb2-35970489.ml-form-embedContainer span,
                    #mlb2-35970489.ml-form-embedContainer button {
                        text-transform: none !important;
                        letter-spacing: normal !important;
                    }
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper {
                        background-color: #f6f6f6; /* Matched to modal bg */
                        border-width: 0px;
                        border-color: transparent;
                        border-radius: 4px;
                        border-style: solid;
                        box-sizing: border-box;
                        display: inline-block !important;
                        margin: 0;
                        padding: 0;
                        position: relative;
                        width: 100%;
                    }
                     #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
                     #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
                        padding: 20px 20px 0 20px;
                     }
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4 {
                        color: #000000;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        font-size: 24px; /* Slightly adjusted */
                        font-weight: 700;
                        margin: 0 0 10px 0;
                        text-align: center;
                    }
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p {
                        color: #000000;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        margin: 0 0 10px 0;
                        text-align: center;
                    }
                    
                    /* Inputs */
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
                        background-color: #ffffff !important;
                        color: #333333 !important;
                        border-color: #cccccc;
                        border-radius: 4px !important;
                        border-style: solid !important;
                        border-width: 1px !important;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        font-size: 14px !important;
                        height: auto;
                        line-height: 21px !important;
                        margin-bottom: 0;
                        margin-top: 0;
                        padding: 10px 10px !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        max-width: 100% !important;
                    }

                    /* Button */
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
                        background-color: #C68D08 !important; /* Gold Brand Color */
                        border: none !important;
                        border-radius: 4px !important;
                        box-shadow: none !important;
                        color: #ffffff !important;
                        cursor: pointer;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
                        font-size: 14px !important;
                        font-weight: 700 !important;
                        line-height: 21px !important;
                        height: auto;
                        padding: 15px !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        text-transform: uppercase !important;
                    }
                    #mlb2-35970489.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
                        background-color: #a37406 !important;
                    }
                    
                    .ml-error input {
                        border-color: red !important;
                    }
                ` }} />

                {/* Actual Form HTML Structure */}
                <div id="mlb2-35970489" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-35970489">
                    <div className="ml-form-align-center">
                        <div className="ml-form-embedWrapper embedForm">
                            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                                <div className="ml-form-embedContent">
                                    <h4>Digite seus dados abaixo e crie seu acesso:</h4>
                                    <p>Ao clicar em continuar, você concorda em receber atualizações do curso.</p>
                                </div>

                                <form
                                    className="ml-block-form"
                                    action="https://assets.mailerlite.com/jsonp/2050322/forms/177072444094285317/subscribe"
                                    data-code=""
                                    method="post"
                                    target="_blank"
                                >
                                    <div className="ml-form-formContent">
                                        <div className="ml-form-fieldRow">
                                            <div className="ml-field-group ml-field-name ml-validate-required">
                                                <input
                                                    aria-label="name"
                                                    aria-required="true"
                                                    type="text"
                                                    className="form-control"
                                                    data-inputmask=""
                                                    name="fields[name]"
                                                    placeholder="Seu Nome Completo"
                                                    autoComplete="given-name"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-form-fieldRow">
                                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                                <input
                                                    aria-label="email"
                                                    aria-required="true"
                                                    type="email"
                                                    className="form-control"
                                                    data-inputmask=""
                                                    name="fields[email]"
                                                    placeholder="Seu Melhor E-Mail"
                                                    autoComplete="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-form-fieldRow ml-last-item">
                                            <div className="ml-field-group ml-field-phone ml-validate-required">
                                                <input
                                                    aria-label="phone"
                                                    aria-required="true"
                                                    type="text"
                                                    className="form-control"
                                                    data-inputmask=""
                                                    name="fields[phone]"
                                                    placeholder="Seu WhatsApp (DDD)"
                                                    autoComplete=""
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="hidden" name="ml-submit" value="1" />

                                    <div className="ml-form-embedSubmit">
                                        <button type="submit" className="primary">
                                            CONTINUAR MINHA INSCRIÇÃO -&gt;
                                        </button>
                                        <button disabled style={{ display: 'none' }} type="button" className="loading">
                                            <div className="ml-form-embedSubmitLoad"></div>
                                            <span className="sr-only">Loading...</span>
                                        </button>
                                    </div>

                                    <input type="hidden" name="anticsrf" value="true" />
                                </form>
                            </div>

                            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                                <div className="ml-form-successContent">
                                    <h4>Sucesso!</h4>
                                    <p>Redirecionando para o pagamento...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-500 my-4 flex items-center justify-center gap-1">
                    🔒 Seus dados estão 100% seguros
                </p>
            </div>
        </div>
    );
}
