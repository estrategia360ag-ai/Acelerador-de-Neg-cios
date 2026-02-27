import { ArrowLeft, AlertTriangle, AlertCircle, X, Timer, Map } from 'lucide-react';

interface QuizResultProps {
  score: number;
  totalScore: number;
  onCtaClick: () => void;
}

export function QuizResult({ score, totalScore, onCtaClick }: QuizResultProps) {
  // Calculate percentage for the progress bar
  const percentage = Math.round((score / totalScore) * 100);

  return (
    <div className="min-h-screen bg-[#f6f8f6] text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-[#f6f8f6]/80 backdrop-blur-md border-b border-[#13ec37]/10">
        <div className="max-w-xl mx-auto flex items-center p-4 justify-between">
          <div className="text-slate-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-[#13ec37]/10 cursor-pointer">
            <ArrowLeft className="w-6 h-6" />
          </div>
          <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Diagnóstico de Visibilidade</h1>
          <div className="size-10"></div>
        </div>
      </header>
      <main className="max-w-xl mx-auto pb-20">
        {/* Section 1: Visibility Score */}
        <section className="p-6">
          <h2 className="text-2xl font-extrabold mb-6">Seu Score de Visibilidade</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#13ec37]/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-red-600 font-extrabold text-xl tracking-wider">INVISÍVEL</span>
              <span className="text-slate-500 font-bold">{score} / {totalScore} pts</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden mb-3">
              <div className="bg-red-500 h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="text-red-600/80 text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="w-[18px] h-[18px]" />
              Nível de visibilidade crítico para o seu setor
            </p>
          </div>
        </section>
        {/* Section 2: Financial Impact */}
        <section className="px-6 py-2">
          <div className="bg-white rounded-xl overflow-hidden shadow-md border-l-4 border-[#13ec37]">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-[#13ec37] w-8 h-8" />
                <h3 className="text-xl font-bold">O que isso significa na prática?</h3>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  A baixa visibilidade local está fazendo seu negócio perder clientes qualificados todos os dias para a concorrência.
                </p>
                <div className="bg-[#13ec37]/10 p-4 rounded-lg">
                  <p className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Perda estimada de faturamento</p>
                  <p className="text-2xl font-black text-slate-900">R$ 86.400,00 <span className="text-sm font-normal">/ano</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Detailed Diagnosis */}
        <section className="p-6">
          <h3 className="text-lg font-bold mb-4">Diagnóstico Detalhado</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Presença Digital</p>
                <p className="text-sm text-slate-500">Inexistente ou desatualizada nas buscas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Captação Ativa</p>
                <p className="text-sm text-slate-500">Dependência total de indicações orgânicas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
              <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Previsibilidade</p>
                <p className="text-sm text-slate-500">Sem controle sobre o fluxo de novos leads</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: The Turnaround */}
        <section className="p-6">
          <div className="bg-[#13ec37]/5 rounded-xl p-8 text-center border-2 border-dashed border-[#13ec37]/20">
            <h3 className="text-2xl font-black text-slate-900 mb-2">A Virada</h3>
            <p className="text-[#13ec37] font-bold mb-6 italic">"A boa notícia: Seu problema tem solução"</p>
            <div className="grid grid-cols-1 gap-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-8 bg-[#13ec37] text-slate-900 font-black rounded-full flex items-center justify-center">1</div>
                <div>
                  <p className="font-bold text-lg">Aparecer</p>
                  <p className="text-sm text-slate-600">Estar onde seus clientes estão procurando agora.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-8 bg-[#13ec37] text-slate-900 font-black rounded-full flex items-center justify-center">2</div>
                <div>
                  <p className="font-bold text-lg">Atrair</p>
                  <p className="text-sm text-slate-600">Criar uma oferta irresistível para quem te encontra.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-8 bg-[#13ec37] text-slate-900 font-black rounded-full flex items-center justify-center">3</div>
                <div>
                  <p className="font-bold text-lg">Converter</p>
                  <p className="text-sm text-slate-600">Transformar interessados em clientes pagantes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: CTA */}
        <section className="p-6 space-y-4">
          <button 
            onClick={onCtaClick}
            className="w-full bg-[#13ec37] text-slate-900 font-black text-lg py-5 rounded-xl shadow-[0_10px_20px_-5px_rgba(19,236,55,0.4)] active:scale-95 transition-transform hover:brightness-110"
          >
            QUERO SAIR DA INVISIBILIDADE AGORA
          </button>
          {/* Section 6: Urgency */}
          <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm">
            <Timer className="w-[18px] h-[18px]" />
            <span>Condição especial válida por tempo limitado</span>
          </div>
        </section>
        {/* Bottom Graphic/Map placeholder */}
        <div className="px-6 py-4">
          <div className="w-full aspect-video bg-slate-200 rounded-xl overflow-hidden relative border border-slate-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <Map className="w-16 h-16 text-slate-400" />
            </div>
            <img className="w-full h-full object-cover opacity-30 grayscale" alt="Abstract map showing local business points" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5d1rKWwdhwLs2AhCbpu7iqyHwiI8Io8zlMuabYqX56LSeZKbreAhTh7XVv_Kpa_IvbNZ_Y9ZLAJRewSHOwAJwz0t5i0FEegy0rB2x7aMErMrymra_13i57KyKufGYZSJt3tdew7gw3l4T3_CxDrTzQ2GHw6akE1-WSJJaYT_JKvowYdUtzxZWVLv0-yrAM8NOZ_sEFwPAC5w_x-7Y8xi2gTU5zJb-xiudS6Ia2etJKzQ8kYELNsLiEHRXgMSeyWw5gLlYzmybCip-" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f6f8f6] to-transparent"></div>
          </div>
        </div>
      </main>
      <footer className="p-8 text-center border-t border-slate-100">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Diagnóstico de Visibilidade Local © 2024</p>
      </footer>
    </div>
  );
}
