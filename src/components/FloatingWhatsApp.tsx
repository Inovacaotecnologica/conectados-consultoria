import React from 'react';
import { MessageCircle, Lock } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  isEnabled: boolean;
  onOpenAdminModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappNumber,
  isEnabled,
  onOpenAdminModal,
}) => {
  const cleanNum = whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(
    'Olá, conheci a Conectados Consultoria pelo site e gostaria de solicitar um atendimento.'
  );
  const whatsappUrl = `https://wa.me/${cleanNum}?text=${encodedText}`;

  // When disabled/locked: Render ONLY a small padlock button, nothing else
  if (!isEnabled) {
    return (
      <div className="fixed bottom-5 right-5 z-50 select-none">
        <button
          id="locked-whatsapp-btn"
          type="button"
          onClick={onOpenAdminModal}
          className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-700/60 shadow-md flex items-center justify-center transition-all duration-200 opacity-60 hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Acesso restrito"
          title="Acesso restrito"
        >
          <Lock className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // When enabled/active: Render active WhatsApp button with padlock management button
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 select-none">
      {/* Padlock button to easily access configuration, change number or deactivate */}
      <button
        id="admin-lock-whatsapp-btn"
        type="button"
        onClick={onOpenAdminModal}
        title="Gerenciar WhatsApp (Ativar / Desativar / Alterar número)"
        className="w-8 h-8 rounded-full bg-white text-slate-600 hover:text-slate-900 shadow-md border border-slate-200 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-300"
        aria-label="Gerenciar WhatsApp"
      >
        <Lock className="w-3.5 h-3.5" />
      </button>

      {/* Main active WhatsApp button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Fale conosco via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-semibold text-sm tracking-wide whitespace-nowrap">
          Fale conosco
        </span>
      </a>
    </div>
  );
};


