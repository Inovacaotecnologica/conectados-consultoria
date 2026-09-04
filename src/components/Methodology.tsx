import React from 'react';
import { METHODOLOGY_STEPS } from '../data/companyData';
import { Search, Compass, PlayCircle, CheckSquare } from 'lucide-react';

const stepIcons = [
  <Search className="w-6 h-6 text-cyan-700" />,
  <Compass className="w-6 h-6 text-cyan-700" />,
  <PlayCircle className="w-6 h-6 text-cyan-700" />,
  <CheckSquare className="w-6 h-6 text-cyan-700" />,
];

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-900/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-900/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-500/30">
            Fluxo Operacional
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Metodologia de Atendimento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Processo estruturado em quatro fases para garantir previsibilidade, segurança e conformidade total com os objetivos do seu negócio.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-cyan-400/80">
                    0{item.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center text-[11px] font-mono text-cyan-400">
                <span>Fase {item.step} de 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
