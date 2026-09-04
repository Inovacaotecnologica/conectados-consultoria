import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import {
  ShieldCheck,
  Zap,
  Gauge,
  Users,
  Target,
  Search,
  CheckCircle2,
  Infinity,
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const brandValues = [
    { title: 'Competência Técnica', desc: 'Rigor de engenharia e conhecimento prático de campo.' },
    { title: 'Confiabilidade', desc: 'Previsibilidade e estabilidade contínua para os seus ativos.' },
    { title: 'Inovação Aplicada', desc: 'Tecnologia voltada à resolução de problemas operacionais reais.' },
    { title: 'Segurança Operacional', desc: 'Proteção irrestrita a vidas, equipamentos e patrimônio.' },
    { title: 'Agilidade de Resposta', desc: 'Ações céleres e focadas na redução do tempo de parada.' },
    { title: 'Visão Estratégica', desc: 'Alinhamento da manutenção aos objetivos de negócio.' },
    { title: 'Proximidade com o Cliente', desc: 'Atendimento consultivo, transparente e presente.' },
    { title: 'Resultados Mensuráveis', desc: 'Métricas claras de disponibilidade e eficiência.' },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
              Sobre a Empresa
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-6 tracking-tight">
              Conectar competências, tecnologias e processos para ampliar as possibilidades de solução.
            </h2>

            {/* Official Verbatim Text */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                A Conectados Consultoria nasceu com o propósito de conectar conhecimento técnico, tecnologia e gestão para desenvolver soluções eficientes e aplicáveis. Atuamos em manutenção, monitoramento de ativos via IoT, automação, elétrica e capacitação profissional, apoiando empresas na melhoria da confiabilidade, da segurança e do desempenho operacional.
              </p>
              <p>
                Nossa atuação parte da análise real de cada necessidade. Integramos diferentes competências para reduzir interfaces, riscos e tempo de solução, entregando suporte técnico com clareza, responsabilidade e foco em resultados.
              </p>
            </div>

            {/* Brand Symbol & Concept Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white border border-slate-200 text-cyan-600 flex-shrink-0 shadow-xs">
                <Infinity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-slate-900">
                  O Símbolo da Marca Conectados
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  A marca utiliza um “C” integrado ao símbolo do infinito, representando conexão, integração e infinitas possibilidades de solução para os desafios industriais.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Badge Grid */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-7 text-white shadow-xl border border-slate-800">
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800">
              <BrandLogo variant="dark" />
            </div>

            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Pilares de Identidade & Compromisso
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {brandValues.map((val, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>CNPJ: {COMPANY_INFO.cnpj}</span>
              <span className="text-cyan-400 font-mono">{COMPANY_INFO.domain}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
