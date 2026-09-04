import React from 'react';
import { DIFFERENTIALS_DATA } from '../data/companyData';
import {
  Headphones,
  Settings,
  Maximize2,
  Cpu,
  ShieldCheck,
  Workflow,
  UserCheck,
  TrendingUp,
} from 'lucide-react';

const differentialIcons: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="w-5 h-5 text-cyan-600" />,
  Settings: <Settings className="w-5 h-5 text-cyan-600" />,
  Maximize2: <Maximize2 className="w-5 h-5 text-cyan-600" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
  Workflow: <Workflow className="w-5 h-5 text-cyan-600" />,
  UserCheck: <UserCheck className="w-5 h-5 text-cyan-600" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-600" />,
};

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
            Diferenciais de Atuação
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Tecnologia e experiência conectadas ao resultado.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Uma abordagem de engenharia fundamentada em conhecimento de campo, diálogo transparente e foco inegociável na continuidade da sua produção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS_DATA.map((diff) => (
            <div
              key={diff.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-cyan-400 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                  {differentialIcons[diff.iconName]}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-2 leading-snug">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Padrão Conectados
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
