import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, PhoneCall, Mail, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  whatsappUrl: string;
  isWhatsAppEnabled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ whatsappUrl, isWhatsAppEnabled = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    {
      label: 'Soluções',
      href: '#solucoes',
      subItems: [
        { label: 'Gestão de Manutenção', href: '#manutencao' },
        { label: 'Monitoramento IoT', href: '#iot' },
        { label: 'Automação', href: '#automacao' },
        { label: 'Serviços Elétricos', href: '#eletrica' },
        { label: 'Treinamentos', href: '#treinamentos' },
      ],
    },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro-bar with corporate identification */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-slate-400">
              CNPJ: <strong className="font-mono text-slate-200">{COMPANY_INFO.cnpj}</strong>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-300">
            <span className="font-mono text-slate-400">{COMPANY_INFO.domain}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-medium">Atendimento Técnico Ativo</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3 border-b border-slate-200' : 'py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg">
            <BrandLogo />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.subItems) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-cyan-700 transition-colors py-2"
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 transition-transform group-hover:rotate-180" />
                    </a>
                    {/* Dropdown menu */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 z-50">
                        {link.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700 font-medium transition-colors"
                            onClick={() => setSolutionsDropdownOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-cyan-700 transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {isWhatsAppEnabled ? (
              <a
                id="header-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Solicitar Atendimento</span>
              </a>
            ) : (
              <a
                id="header-cta-contact"
                href="#contato"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 active:bg-slate-950 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Solicitar Atendimento</span>
              </a>
            )}

            <button
              type="button"
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-auto bg-white border-b border-slate-200 shadow-2xl z-50 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-3">
            <a
              href="#inicio"
              className="text-base font-medium text-slate-900 hover:text-cyan-600 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <div className="pt-1 pb-1 border-y border-slate-100">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                Soluções
              </span>
              <div className="pl-3 mt-2 flex flex-col space-y-2">
                <a
                  href="#manutencao"
                  className="text-sm font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Gestão de Manutenção
                </a>
                <a
                  href="#iot"
                  className="text-sm font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Monitoramento de Ativos via IoT
                </a>
                <a
                  href="#automacao"
                  className="text-sm font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Automação
                </a>
                <a
                  href="#eletrica"
                  className="text-sm font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Serviços Elétricos
                </a>
                <a
                  href="#treinamentos"
                  className="text-sm font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • Treinamentos
                </a>
              </div>
            </div>
            <a
              href="#diferenciais"
              className="text-base font-medium text-slate-900 hover:text-cyan-600 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a
              href="#metodologia"
              className="text-base font-medium text-slate-900 hover:text-cyan-600 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Metodologia de Atendimento
            </a>
            <a
              href="#sobre"
              className="text-base font-medium text-slate-900 hover:text-cyan-600 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre a Empresa
            </a>
            <a
              href="#contato"
              className="text-base font-medium text-slate-900 hover:text-cyan-600 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>

            <div className="pt-4 mt-2">
              {isWhatsAppEnabled ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Solicitar Atendimento no WhatsApp</span>
                </a>
              ) : (
                <a
                  href="#contato"
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Solicitar Atendimento</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
