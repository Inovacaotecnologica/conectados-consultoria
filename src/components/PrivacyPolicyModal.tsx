import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-cyan-800">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Política de Privacidade e Proteção de Dados (LGPD)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            A <strong>{COMPANY_INFO.name}</strong> (CNPJ: {COMPANY_INFO.cnpj}), em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), preza pela total transparência, confidencialidade e segurança das informações fornecidas por visitantes e potenciais clientes em seu website <strong>{COMPANY_INFO.domain}</strong>.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-2">1. Coleta e Finalidade dos Dados</h4>
          <p>
            Os dados fornecidos no formulário de contato (nome, empresa, telefone, e-mail, serviço de interesse e descrição técnica) têm como finalidade exclusiva o retorno comercial, esclarecimento técnico de dúvidas e elaboração de propostas solicitadas pelo titular.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-2">2. Compartilhamento e Sigilo</h4>
          <p>
            A Conectados Consultoria não comercializa, não aluga e não repassa quaisquer dados pessoais ou informações industriais enviadas a terceiros. As comunicações são tratadas internamente pela equipe técnica e comercial por meio do e-mail oficial <strong>{COMPANY_INFO.email}</strong> e canais corporativos autorizados.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-2">3. Direitos do Titular</h4>
          <p>
            Nos termos do art. 18 da LGPD, o titular poderá, a qualquer momento, solicitar a confirmação, retificação ou exclusão de seus dados pessoais dos nossos registros de atendimento enviando uma mensagem para <strong>{COMPANY_INFO.email}</strong>.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-2">4. Segurança da Informação</h4>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda ou alteração ilícita.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            Compreendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
