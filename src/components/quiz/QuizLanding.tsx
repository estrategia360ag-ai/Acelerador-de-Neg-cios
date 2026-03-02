import { ArrowRight, BarChart3, ListChecks, Rocket, ShieldCheck, Search, Zap } from 'lucide-react';

interface QuizLandingProps {
  onStart: () => void;
}

export function QuizLanding({ onStart }: QuizLandingProps) {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto min-h-screen bg-[#0a0a0a]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-sm font-bold leading-tight tracking-tight text-white">Cliente Todo Dia</h2>
          </div>
          <a className="text-sm font-semibold text-indigo-400 hover:opacity-80 transition-opacity" href="#">Login</a>
        </div>
      </header>

      <main className="flex flex-col w-full max-w-7xl mx-auto flex-1">
        {/* Hero Section */}
        <section className="@container">
          <div className="flex flex-col gap-8 px-4 py-8 pt-6 md:gap-12 lg:flex-row lg:items-center lg:py-16">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 flex-1 lg:order-1">
              <div className="flex flex-col gap-3 text-left">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-indigo-900/30 px-3 py-1 text-xs font-bold text-indigo-400">
                  <Zap className="w-4 h-4" />
                  Resultado em 2 minutos
                </div>
                <h1 className="text-white text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                  🔍 Teste de Visibilidade <span className="text-indigo-400">Local™</span>
                </h1>
                <p className="text-white text-lg font-bold leading-relaxed max-w-lg mt-2">
                  Descubra em 2 minutos se sua empresa está INVISÍVEL — e se você está jogando dinheiro fora com agência ou postando sem resultado.
                </p>
                <p className="text-slate-300 text-base font-medium leading-relaxed max-w-lg mt-2">
                  Responda 8 perguntas rápidas e receba um diagnóstico mostrando por que você ainda não consegue atrair clientes por conta própria — e como mudar isso SEM depender de ninguém.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={onStart}
                  className="group relative flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
                >
                  <span className="text-white text-base font-extrabold uppercase tracking-wide z-10">Fazer Diagnóstico Gratuito</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <p className="text-xs text-slate-400 text-center max-w-[480px]">
                  Sem necessidade de cartão de crédito.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full flex-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-gray-800 bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-sm p-3 rounded-xl shadow-lg max-w-[200px] border border-white/10">
                  <div className="bg-indigo-500/20 p-2 rounded-full text-indigo-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Análise de SEO</p>
                    <p className="text-[10px] text-slate-300">Detectando falhas...</p>
                  </div>
                </div>
                <img 
                  alt="Business meeting analyzing growth charts on a tablet" 
                  className="object-cover w-full h-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtMrS3O4lAzYUUUSwIOaN5YtkGhFTBdD31fO6dDg-lT666FyLQBiA2T-kQKubpXKQ5alMfn8xl9Qql6vMmXja4_MUp82JsJ0QV827NPUKw5U2vsCg_BfgV6ONt3sT725HkA7zj1eU_93ux8vjDGPhVuCfSwHIpkMtxTTGCTHJO3CAQSPSlWprCS2TZiWJOgLwZ2Fdg3uUOhSBnGhKw9GWHrK4Cikh-72qfMwzNdZLeHtComaCTNSXczFqP124lGlKfBKaOYDcHQe-i"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-2">
          <div className="grid grid-cols-3 gap-3 p-4 bg-zinc-900 rounded-2xl border border-gray-800 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center gap-1 p-2">
              <span className="text-indigo-400 text-2xl mb-1 font-bold">2.847</span>
              <p className="text-slate-400 text-xs font-medium">Empresas</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-1 p-2 border-l border-r border-gray-800">
              <span className="text-indigo-400 text-2xl mb-1 font-bold">2 min</span>
              <p className="text-slate-400 text-xs font-medium">Duração</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-1 p-2">
              <span className="text-indigo-400 text-2xl mb-1 font-bold">100%</span>
              <p className="text-slate-400 text-xs font-medium">Grátis</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="flex flex-col gap-8 px-4 py-12 @container">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight">
              Por que fazer este teste?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
              Entenda os pontos cegos do seu negócio e descubra exatamente como atrair mais clientes recorrentes da sua região.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900 border border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-900/20 text-indigo-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">Diagnóstico Preciso</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Análise detalhada da sua presença online comparada aos seus concorrentes locais diretos.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900 border border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-900/20 text-indigo-400">
                <ListChecks className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">Plano de Ação</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Receba um checklist com passos claros e práticos para melhorar sua visibilidade imediatamente.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900 border border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-900/20 text-indigo-400">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">Resultados Rápidos</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Foque nas mudanças que geram retorno financeiro e tráfego real para sua loja ou escritório.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 py-8 pb-16 flex justify-center bg-gradient-to-b from-transparent to-white/50">
          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <button 
              onClick={onStart}
              className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white text-base font-extrabold uppercase tracking-wide rounded-full shadow-xl shadow-indigo-600/20 transition-all active:scale-[0.98]"
            >
              Começar Agora
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Seus dados estão seguros conosco</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
