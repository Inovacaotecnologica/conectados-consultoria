import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, SlidersHorizontal, MessageSquare } from 'lucide-react';

interface ScopeSimulatorProps {
  onSelectSolution: (serviceName: string) => void;
  whatsappUrl: string;
}

export const ScopeSimulator: React.FC<ScopeSimulatorProps> = ({
  onSelectSolution,
  whatsappUrl,
}) => {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('unplanned_stops');

  const challenges = [
    {
      id: 'unplanned_stops',
      title: 'Paradas não planejadas de máquinas',
      recommendedService: 'Gestão de Manutenção',
      summary:
        'Implementação de rotinas de PCM, planos preventivos/preditivos estruturados e análise de falha para restaurar a confiabilidade.',
      actionAnchor: '#manutencao',
    },
    {
      id: 'no_telemetry',
      title: 'Ausência de dados remotos e telemetria',
      recommendedService: 'Monitoramento de Ativos via IoT',
      summary:
        'Instalação de sensores industriais e dashboards em tempo real para acompanhamento contínuo de vibração, corrente e temperatura.',
      actionAnchor: '#iot',
    },
    {
      id: 'obsolete_automation',
      title: 'Automação obsoleta ou falhas em CLPs',
      recommendedService: 'Automação Industrial',
      summary:
        'Retrofit de sistemas de controle, reprogramação de CLPs e modernização de interfaces de operação (SCADA / IHM).',
      actionAnchor: '#automacao',
    },
    {
      id: 'electrical_risk',
      title: 'Painéis antigos e conformidade normativa',
      recommendedService: 'Serviços Elétricos',
      summary:
        'Revisão técnica, montagem/adequação de painéis de comando e potência e conformidade com NR-10 e NBR-5410.',
      actionAnchor: '#eletrica',
    },
    {
      id: 'team_qualification',
      title: 'Necessidade de capacitar o time de campo',
      recommendedService: 'Treinamentos Técnicos',
      summary:
        'Treinamentos técnicos práticos desenvolvidos sob medida para os equipamentos e realidade operacional da sua equipe.',
      actionAnchor: '#treinamentos',
    },
  ];

  const currentMatch = challenges.find((c) => c.id === selectedChallenge) || challenges[0];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Simulador de Escopo Rápido</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Identifique a rota técnica ideal para o seu desafio
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                Selecione o principal ponto de atenção da sua instalação no momento para visualizar a frente de atuação recomendada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
            {/* Buttons list */}
            <div className="lg:col-span-6 flex flex-col space-y-2">
              {challenges.map((item) => {
                const isActive = item.id === selectedChallenge;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedChallenge(item.id)}
                    className={`text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 shadow-sm'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Recommendation Display */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-slate-800/90 border border-cyan-500/40 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] uppercase font-mono tracking-wider text-cyan-400">
                  Solução Técnica Recomendada
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                  {currentMatch.recommendedService}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {currentMatch.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700">
                <a
                  href="#contato"
                  onClick={() => onSelectSolution(currentMatch.recommendedService)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
                >
                  <span>Solicitar Atendimento para este Escopo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={currentMatch.actionAnchor}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  <span>Ver Detalhes do Serviço</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
