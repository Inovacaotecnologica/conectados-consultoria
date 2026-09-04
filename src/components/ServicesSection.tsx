import React, { useState } from 'react';
import {
  Wrench,
  Radio,
  Cpu,
  Zap,
  GraduationCap,
  CheckCircle,
  Activity,
  ArrowRight,
  ShieldAlert,
  Gauge,
  Sliders,
  Send,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceName: string) => void;
  whatsappUrl: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
  whatsappUrl,
}) => {
  // Simulated telemetry live-state for IoT visual widget
  const [telemetryValues] = useState({
    vibration: '1.42 mm/s',
    temperature: '64.8 °C',
    pressure: '5.2 bar',
    current: '28.4 A',
  });

  return (
    <div id="solucoes" className="py-16 lg:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/60 px-3.5 py-1 rounded-full border border-cyan-300/60">
            Escopo de Soluções Técnicas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Engenharia integrada para cada etapa do ciclo de vida dos ativos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conectamos diagnóstico, telemetria em tempo real, automação e intervenções elétricas para assegurar continuidade operacional e máxima confiabilidade.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. GESTÃO DE MANUTENÇÃO */}
        {/* ========================================================================= */}
        <div
          id="manutencao"
          className="mb-14 scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0">
                <Wrench className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                  Pilar de Confiabilidade
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Gestão de Manutenção
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  “Estruturação e melhoria da gestão de manutenção com foco em confiabilidade, disponibilidade, controle de custos e continuidade operacional.”
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onSelectServiceForContact('Gestão de Manutenção')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Solicitar proposta para PCM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">
              Serviços Relacionados:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SERVICES_DATA[0].items.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-cyan-50/50 hover:border-cyan-200 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MONITORAMENTO DE ATIVOS VIA IoT */}
        {/* ========================================================================= */}
        <div
          id="iot"
          className="mb-14 scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Radio className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Telemetria & Indústria 4.0
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  Monitoramento de Ativos via IoT
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  “Soluções de monitoramento remoto para transformar dados de campo em informações úteis para a operação e a manutenção.”
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectServiceForContact('Monitoramento de Ativos via IoT')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <span>Consultar Solução de Telemetria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* IoT Telemetry Simulation Console */}
          <div className="mt-8 mb-8 p-4 sm:p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  TELEMETRIA EM TEMPO REAL (AMOSTRA OPERACIONAL)
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Status: Operação Normal • Protocolo MQTT / LoRaWAN
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700">
                <span className="text-[10px] uppercase font-mono text-slate-400">Vibração (RMS)</span>
                <p className="text-base sm:text-lg font-mono font-bold text-cyan-400 mt-1">
                  {telemetryValues.vibration}
                </p>
                <span className="text-[10px] text-emerald-400">Dentro da tolerância</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700">
                <span className="text-[10px] uppercase font-mono text-slate-400">Temperatura Mancal</span>
                <p className="text-base sm:text-lg font-mono font-bold text-cyan-400 mt-1">
                  {telemetryValues.temperature}
                </p>
                <span className="text-[10px] text-emerald-400">Normal (Lim: 85°C)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700">
                <span className="text-[10px] uppercase font-mono text-slate-400">Pressão Linha</span>
                <p className="text-base sm:text-lg font-mono font-bold text-cyan-400 mt-1">
                  {telemetryValues.pressure}
                </p>
                <span className="text-[10px] text-emerald-400">Estável</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700">
                <span className="text-[10px] uppercase font-mono text-slate-400">Corrente Motor</span>
                <p className="text-base sm:text-lg font-mono font-bold text-cyan-400 mt-1">
                  {telemetryValues.current}
                </p>
                <span className="text-[10px] text-emerald-400">Fator de carga 78%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Services items */}
            <div className="lg:col-span-7">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
                <span>Serviços Relacionados:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES_DATA[1].items.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted Benefits */}
            <div className="lg:col-span-5 bg-slate-800/90 p-5 rounded-xl border border-cyan-500/30">
              <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Benefícios Destacados:</span>
              </h4>
              <ul className="space-y-2.5">
                {SERVICES_DATA[1].benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. AUTOMAÇÃO */}
        {/* ========================================================================= */}
        <div
          id="automacao"
          className="mb-14 scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                  Produtividade & Controle
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Automação Industrial
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  “Soluções de automação desenvolvidas conforme a necessidade de cada instalação, desde o diagnóstico até a implantação e o suporte técnico.”
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectServiceForContact('Automação Industrial')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Consultar Projetos de Automação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">
              Serviços Relacionados:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SERVICES_DATA[2].items.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-cyan-50/50 hover:border-cyan-200 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SERVIÇOS ELÉTRICOS */}
        {/* ========================================================================= */}
        <div
          id="eletrica"
          className="mb-14 scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Segurança & Conformidade Normativa
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Serviços Elétricos
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  “Serviços elétricos executados com planejamento, segurança e conformidade com o escopo técnico e as normas aplicáveis.”
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectServiceForContact('Serviços Elétricos')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Solicitar Avaliação Elétrica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">
              Serviços Relacionados:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SERVICES_DATA[3].items.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-amber-50/50 hover:border-amber-200 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. TREINAMENTOS */}
        {/* ========================================================================= */}
        <div
          id="treinamentos"
          className="scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Capacitação Técnica Personalizada
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Treinamentos Técnicos
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                  “Capacitação técnica personalizada para desenvolver equipes mais seguras, preparadas e produtivas.”
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectServiceForContact('Treinamentos Técnicos')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Customizar Treinamento para Empresa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Official clarification banner */}
          <div className="my-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-900 text-xs sm:text-sm leading-relaxed">
            <strong>Customização dedicada:</strong> Os treinamentos podem ser desenvolvidos conforme a realidade operacional, os equipamentos específicos de campo e os objetivos estratégicos da empresa contratante.
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">
              Áreas de Treinamento:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SERVICES_DATA[4].items.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
