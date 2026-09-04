import React from 'react';
import { MessageSquare, FileText, ArrowRight } from 'lucide-react';

interface CommercialCTAProps {
  whatsappUrl: string;
  isWhatsAppEnabled?: boolean;
}

export const CommercialCTA: React.FC<CommercialCTAProps> = ({ whatsappUrl, isWhatsAppEnabled = false }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Decorative accent lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3.5 py-1 rounded-full border border-cyan-500/30">
              Oportunidade Comercial
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight leading-tight">
              Seu processo precisa de mais confiabilidade, controle ou desempenho?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Converse com a Conectados Consultoria. Avaliaremos sua necessidade e indicaremos uma solução técnica compatível com a realidade da sua operação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            {isWhatsAppEnabled ? (
              <a
                id="cta-specialist-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-600/20 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar com um especialista</span>
              </a>
            ) : (
              <a
                id="cta-specialist-contact"
                href="#contato"
                className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-cyan-600/20 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar com um especialista</span>
              </a>
            )}

            <a
              id="cta-request-proposal"
              href="#contato"
              className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-900 font-semibold text-sm sm:text-base transition-all duration-200 shadow-md"
            >
              <FileText className="w-5 h-5 text-cyan-700" />
              <span>Solicitar proposta</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
