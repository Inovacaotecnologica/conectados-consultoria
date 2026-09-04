import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Building,
  Phone,
  User,
  MessageSquare,
  FileCheck,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactFormProps {
  selectedService: string;
  onOpenPrivacyPolicy: () => void;
  whatsappNumber: string;
  isWhatsAppEnabled?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedService,
  onOpenPrivacyPolicy,
  whatsappNumber,
  isWhatsAppEnabled = false,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceOfInterest: selectedService || 'Gestão de Manutenção',
    description: '',
    lgpdConsent: false,
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update service when prop changes
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceOfInterest: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam check: honeypot field must be empty
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      console.warn('Spam detected via honeypot.');
      return;
    }

    // Required fields check
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Por favor, preencha os campos obrigatórios (Nome, E-mail e Telefone).');
      return;
    }

    if (!formData.lgpdConsent) {
      setErrorMsg('É necessário autorizar o contato e tratamento dos dados conforme a LGPD.');
      return;
    }

    const generatedProtocol = `CNC-${Date.now().toString().slice(-6)}`;
    setProtocolNumber(generatedProtocol);
    setSubmitted(true);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(
      `[PROPOSTA ${protocolNumber || 'CONECTADOS'}] Solicitação de Atendimento - ${formData.company || formData.name}`
    );
    const body = encodeURIComponent(
      `DADOS DA SOLICITAÇÃO TÉCNICA:\n\n` +
      `Nome do Solicitante: ${formData.name}\n` +
      `Empresa: ${formData.company || 'Não informada'}\n` +
      `Telefone / WhatsApp: ${formData.phone}\n` +
      `E-mail: ${formData.email}\n` +
      `Serviço de Interesse: ${formData.serviceOfInterest}\n\n` +
      `Descrição da Necessidade / Escopo:\n${formData.description || 'Não especificada'}\n\n` +
      `Protocolo Gerado: ${protocolNumber}\n` +
      `Autorização LGPD: Concedida pelo solicitante em ${new Date().toLocaleDateString('pt-BR')}`
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppLink = () => {
    const cleanNum = whatsappNumber.replace(/\D/g, '');
    const message = encodeURIComponent(
      `Olá! Enviei uma solicitação pelo site da Conectados Consultoria:\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'Não informada'}\n` +
      `*Serviço:* ${formData.serviceOfInterest}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Necessidade:* ${formData.description || 'Gostaria de agendar uma reunião técnica.'}`
    );
    return `https://wa.me/${cleanNum}?text=${message}`;
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct corporate channels */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/60 px-3.5 py-1 rounded-full border border-cyan-300/60">
              Canal Direto
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
              Inicie seu atendimento com nossos especialistas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Apresente a necessidade de suas instalações ou equipe técnica. Retornaremos prontamente com análise técnica e proposta direcionada ao seu escopo.
            </p>

            <div className="space-y-4">
              {/* Email card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase text-slate-400">
                    E-mail Comercial Oficial
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="block text-sm sm:text-base font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp direct card - only when enabled */}
              {isWhatsAppEnabled && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-slate-400">
                      Atendimento Ágil via WhatsApp
                    </span>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Falar diretamente no WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* Company data card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase text-slate-500">
                  <Building className="w-4 h-4 text-cyan-700" />
                  <span>Dados Cadastrais</span>
                </div>
                <div className="space-y-1 text-xs text-slate-600">
                  <p><strong>Razão Social:</strong> {COMPANY_INFO.name}</p>
                  <p><strong>CNPJ:</strong> <span className="font-mono">{COMPANY_INFO.cnpj}</span></p>
                  <p><strong>Domínio Web:</strong> <span className="font-mono">{COMPANY_INFO.domain}</span></p>
                </div>
              </div>

              {/* LGPD guarantee */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-cyan-50/70 border border-cyan-200 text-xs text-cyan-950">
                <ShieldCheck className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                <span>
                  Tratamento de dados em estrita conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>. Suas informações e dados de engenharia são mantidos sob rigoroso sigilo corporativo.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-lg">
              {submitted ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-2">
                    Solicitação Registrada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                    Seu formulário foi preparado. Protocolo de Atendimento: <strong className="font-mono text-cyan-700 font-bold">{protocolNumber}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-lg mx-auto text-left mb-6 text-xs text-slate-700 space-y-1.5">
                    <p><strong>Nome:</strong> {formData.name}</p>
                    <p><strong>Empresa:</strong> {formData.company || 'Não informada'}</p>
                    <p><strong>Serviço:</strong> {formData.serviceOfInterest}</p>
                    <p><strong>E-mail:</strong> {formData.email}</p>
                    <p><strong>Telefone:</strong> {formData.phone}</p>
                  </div>

                  <p className="text-xs text-slate-500 mb-6">
                    {isWhatsAppEnabled
                      ? 'Clique abaixo para despachar sua solicitação diretamente ao e-mail comercial oficial ou no WhatsApp com nossa equipe:'
                      : 'Clique abaixo para despachar sua solicitação diretamente ao e-mail comercial oficial:'}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoLink()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Encaminhar para comercial@conectados.eng.br</span>
                    </a>

                    {isWhatsAppEnabled && (
                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirmar via WhatsApp</span>
                      </a>
                    )}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData((prev) => ({ ...prev, description: '' }));
                      }}
                      className="text-xs font-semibold text-cyan-700 hover:underline"
                    >
                      Preencher nova solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Solicitação de Atendimento & Proposta Técnica
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Preencha os campos abaixo para direcionarmos o especialista mais adequado.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Honeypot field (hidden from human users, catches spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Nome */}
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nome Completo <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="form-company" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Empresa / Organização
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="form-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da sua empresa"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Telefone */}
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Telefone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="form-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(00) 00000-0000"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        E-mail Corporativo <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="voce@empresa.com.br"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Serviço de Interesse */}
                  <div className="mb-4">
                    <label htmlFor="form-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Serviço de Interesse Principal
                    </label>
                    <select
                      id="form-service"
                      name="serviceOfInterest"
                      value={formData.serviceOfInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all bg-white"
                    >
                      <option value="Gestão de Manutenção">Gestão de Manutenção (PCM, Confiabilidade, Planos)</option>
                      <option value="Monitoramento de Ativos via IoT">Monitoramento de Ativos via IoT & Telemetria</option>
                      <option value="Automação Industrial">Automação (CLPs, Supervisórios, Retrofit)</option>
                      <option value="Serviços Elétricos">Serviços Elétricos (Instalações, Painéis, Laudos)</option>
                      <option value="Treinamentos Técnicos">Treinamentos Técnicos Personalizados</option>
                      <option value="Diagnóstico Integrado Multiárea">Diagnóstico Integrado Multiárea</option>
                    </select>
                  </div>

                  {/* Descrição da necessidade */}
                  <div className="mb-5">
                    <label htmlFor="form-description" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Descrição da Necessidade / Desafio Operacional
                    </label>
                    <textarea
                      id="form-description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Descreva brevemente os equipamentos envolvidos, problemas atuais de parada ou objetivos da sua empresa..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all resize-y"
                    />
                  </div>

                  {/* LGPD Consent Checkbox */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="lgpdConsent"
                        checked={formData.lgpdConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-cyan-600 border-slate-300 focus:ring-cyan-500 cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        Autorizo o contato da Conectados Consultoria e o tratamento dos dados enviados estritamente para retorno sobre esta solicitação, conforme a nossa{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacyPolicy}
                          className="text-cyan-700 font-semibold underline hover:text-cyan-800"
                        >
                          Política de Privacidade (LGPD)
                        </button>.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 focus:ring-4 focus:ring-cyan-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação de Atendimento</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    As mensagens são direcionadas para o e-mail oficial: <strong className="text-slate-600 font-mono">{COMPANY_INFO.email}</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
