import React from 'react';
import { TARGET_AUDIENCE_DATA } from '../data/companyData';
import {
  Factory,
  Mountain,
  Zap,
  Building2,
  Compass,
  Layers,
  HardHat,
  Handshake,
  Users,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-6 h-6 text-cyan-700" />,
  Mountain: <Mountain className="w-6 h-6 text-cyan-700" />,
  Zap: <Zap className="w-6 h-6 text-cyan-700" />,
  Building2: <Building2 className="w-6 h-6 text-cyan-700" />,
  Compass: <Compass className="w-6 h-6 text-cyan-700" />,
  Layers: <Layers className="w-6 h-6 text-cyan-700" />,
  HardHat: <HardHat className="w-6 h-6 text-cyan-700" />,
  Handshake: <Handshake className="w-6 h-6 text-cyan-700" />,
  Users: <Users className="w-6 h-6 text-cyan-700" />,
};

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            Mercados & Segmentos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-4">
            Soluções adaptadas à complexidade da sua operação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Atendemos organizações que exigem rigor técnico, segurança de processos e alta disponibilidade de seus ativos e instalações.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TARGET_AUDIENCE_DATA.map((segment) => (
            <div
              key={segment.id}
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/90 hover:border-cyan-400 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-xs">
                  {iconMap[segment.iconName]}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-1.5">
                  {segment.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {segment.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-cyan-700 font-medium">
                <span>Engenharia Especializada</span>
                <span className="text-slate-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
