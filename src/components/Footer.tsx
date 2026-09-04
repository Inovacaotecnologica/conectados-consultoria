import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Globe, Phone, ShieldCheck, ArrowUp, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  whatsappNumber: string;
  isWhatsAppEnabled: boolean;
  onOpenWhatsAppAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  whatsappNumber,
  isWhatsAppEnabled,
  onOpenWhatsAppAdmin,
}) => {
  const cleanNum = whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(
    'Olá, conheci a Conectados Consultoria pelo site e gostaria de solicitar um atendimento.'
  );
  const whatsappUrl = `https://wa.me/${cleanNum}?text=${encodedText}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Presentation */}
          <div className="lg:col-span-4">
            <BrandLogo variant="footer" showTagline={true} className="mb-4" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Soluções técnicas integradas para aumentar a confiabilidade, a disponibilidade e o desempenho de instalações, equipamentos e processos industriais.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
              <span>Engenharia • Manutenção • IoT • Automação</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyPolicy}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions pillars */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#manutencao" className="hover:text-cyan-400 transition-colors">
                  • Gestão de Manutenção (PCM & Confiabilidade)
                </a>
              </li>
              <li>
                <a href="#iot" className="hover:text-cyan-400 transition-colors">
                  • Monitoramento de Ativos via IoT & Telemetria
                </a>
              </li>
              <li>
                <a href="#automacao" className="hover:text-cyan-400 transition-colors">
                  • Automação & Programação de CLPs
                </a>
              </li>
              <li>
                <a href="#eletrica" className="hover:text-cyan-400 transition-colors">
                  • Instalações & Serviços Elétricos
                </a>
              </li>
              <li>
                <a href="#treinamentos" className="hover:text-cyan-400 transition-colors">
                  • Treinamentos Técnicos In-Company
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate details requested */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Dados da Empresa
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="text-[11px] block uppercase text-slate-500 font-semibold">
                  Razão Social
                </span>
                <span className="text-slate-200 font-medium">{COMPANY_INFO.name}</span>
              </div>

              <div>
                <span className="text-[11px] block uppercase text-slate-500 font-semibold">
                  CNPJ
                </span>
                <span className="text-slate-200 font-mono">{COMPANY_INFO.cnpj}</span>
              </div>

              <div>
                <span className="text-[11px] block uppercase text-slate-500 font-semibold">
                  E-mail Comercial
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] block uppercase text-slate-500 font-semibold">
                  Domínio Web
                </span>
                <a
                  href={`https://${COMPANY_INFO.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-200 hover:text-cyan-400 transition-colors font-mono"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{COMPANY_INFO.domain}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] block uppercase text-slate-500 font-semibold">
                  WhatsApp Corporativo
                </span>
                {isWhatsAppEnabled && whatsappNumber ? (
                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{whatsappNumber}</span>
                    </a>
                    <button
                      type="button"
                      onClick={onOpenWhatsAppAdmin}
                      className="text-[11px] text-slate-500 hover:text-cyan-400 underline"
                      title="Gerenciar número e status do WhatsApp"
                    >
                      (Alterar)
                    </button>
                  </div>
                ) : (
                  <span className="text-slate-400 text-xs block">
                    Atendimento via Formulário de Contato
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
            </span>
            <span className="hidden sm:inline">•</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-cyan-400 underline transition-colors"
            >
              Proteção de Dados & LGPD
            </button>
            <span className="hidden sm:inline">•</span>
            <button
              type="button"
              onClick={onOpenWhatsAppAdmin}
              className="text-slate-600 hover:text-slate-400 transition-colors p-1"
              aria-label="Acesso restrito"
              title="Acesso restrito"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
