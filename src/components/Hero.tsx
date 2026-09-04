import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Cpu, Wrench, Zap, Radio, GraduationCap } from 'lucide-react';
import heroImage from '../assets/images/industrial_hero_1788460076221.jpg';

interface HeroProps {
  whatsappUrl: string;
  isWhatsAppEnabled?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ whatsappUrl, isWhatsAppEnabled = false }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200">
      {/* Subtle technical background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-semibold tracking-wide w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
              <span>Soluções Técnicas Integradas em Engenharia</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
              Engenharia aplicada para ativos mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-700">confiáveis</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">conectados</span> e produtivos.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              A Conectados Consultoria integra manutenção, monitoramento via IoT, automação, serviços elétricos e capacitação técnica para reduzir falhas, melhorar processos e aumentar a disponibilidade dos ativos.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {isWhatsAppEnabled ? (
                <a
                  id="hero-cta-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 focus:ring-4 focus:ring-emerald-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Solicitar atendimento</span>
                </a>
              ) : (
                <a
                  id="hero-cta-contact"
                  href="#contato"
                  className="inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 focus:ring-4 focus:ring-cyan-500/20"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Solicitar atendimento</span>
                </a>
              )}

              <a
                id="hero-cta-solutions"
                href="#solucoes"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-300 shadow-sm transition-all duration-200 focus:ring-4 focus:ring-slate-200"
              >
                <span>Conhecer soluções</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Pillars Anchors */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Pilares de Especialidade Técnica:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                <a
                  href="#manutencao"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                >
                  <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Gestão de Manutenção</span>
                </a>
                <a
                  href="#iot"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                >
                  <Radio className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Monitoramento IoT</span>
                </a>
                <a
                  href="#automacao"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Automação</span>
                </a>
                <a
                  href="#eletrica"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Serviços Elétricos</span>
                </a>
                <a
                  href="#treinamentos"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Treinamentos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src={heroImage}
                alt="Engenheiro inspecionando painel de comando e sensores IoT em planta industrial"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700"
              />

              {/* Technical badge overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 shadow-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      Integração de Campo & Telemetria
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Da instrumentação e sensores IoT ao plano mestre de confiabilidade e comissionamento elétrico.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Floating Card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200 z-10">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Conformidade & Continuidade</p>
                <p className="text-[11px] text-slate-500">Normas regulamentadoras e foco em resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
