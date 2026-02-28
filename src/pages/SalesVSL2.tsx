import React from 'react';

export function SalesVSL2() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-100 flex flex-col font-['Manrope'] antialiased overflow-x-hidden">
      {/* Header / Navigation */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>arrow_back</span>
        </div>
        <h2 className="text-white text-base font-bold leading-tight tracking-tight text-center flex-1">
          Cliente Todo Dia
        </h2>
        <div className="w-6"></div>
      </div>

      {/* Main Content - Section 1 */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-12 pt-6 flex flex-col items-center">
        {/* Pre-headline Personalization */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec37]/10 border border-[#13ec37]/20 mb-4">
          <span className="material-symbols-outlined text-[#13ec37] text-sm" style={{ fontSize: '16px' }}>location_on</span>
          <p className="text-[#13ec37] text-xs font-semibold uppercase tracking-wide">
            Para donos de Salão em São Paulo
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-[1.15] text-center tracking-tight mb-2">
          Pare de Depender da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ec37] to-emerald-600">Sorte</span> Para Vender...
        </h1>
        <p className="text-slate-400 text-sm font-medium text-center mb-6 max-w-[90%]">
          Descubra o método exato para atrair clientes qualificados todos os dias sem gastar rios de dinheiro com anúncios.
        </p>

        {/* VSL Video Player */}
        <div className="w-full relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-b from-[#13ec37]/30 to-emerald-600/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full aspect-video rounded-xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKuzvgGm8uIZV4-nLbPTqN86m-1nMWj_kBWjXjiA2DjL2zV9PHLcFPJpr4V_ILquuaWgErd9AR9rSLvwwgQL1dIVK4sDjhGGBeMXnta4oa9i1Qm-r52r_mCHk4ZD8tIAKgPErUCQyDxchr3_m2Hje2SVwpF9ysKmliQG8tlUTz_mQymBhvUdNdHccuR1-pQBrB6Dy_LTz6Vi44fSp54ZfmLVCds65WxZVz_mX_k6s7sc-D7xfgwWmBep7kABZrXLh58eJ2ZfBkqmZP')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <button className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#13ec37] text-slate-900 hover:scale-110 transition-transform duration-200 shadow-[0_0_40px_-10px_rgba(19,236,55,0.6)]">
                <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                <div className="absolute inset-0 rounded-full animate-ping bg-[#13ec37] opacity-20"></div>
              </button>
            </div>
            {/* Video Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-[#13ec37] rounded-full"></div>
                </div>
                <span className="text-white text-xs font-mono">02:23 / 12:45</span>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>volume_up</span>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>fullscreen</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <span className="material-symbols-outlined text-green-500" style={{ fontSize: '16px' }}>verified</span>
            <span>Conteúdo verificado e aprovado por +1500 alunos</span>
          </div>
        </div>

        {/* Calculadora Visual / Inaction Cost */}
        <div className="w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-6 shadow-none mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-900/30 rounded-lg text-red-400">
              <span className="material-symbols-outlined">trending_down</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">
              O Custo da Invisibilidade
            </h3>
          </div>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Você já parou para calcular quanto dinheiro está deixando na mesa todos os dias por não ter um sistema previsível?
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-dashed border-slate-700">
              <span className="text-sm text-slate-400">Clientes perdidos/mês</span>
              <span className="text-sm font-semibold text-white">~45</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-dashed border-slate-700">
              <span className="text-sm text-slate-400">Ticket Médio</span>
              <span className="text-sm font-semibold text-white">R$ 160,00</span>
            </div>
            <div className="bg-red-900/20 rounded-xl p-4 mt-2">
              <p className="text-xs text-red-300 uppercase font-bold tracking-wider mb-1">Prejuízo Anual Estimado</p>
              <p className="text-3xl font-black text-red-400 tracking-tight">R$ 86.400,00</p>
              <p className="text-xs text-red-300/70 mt-1">*Baseado na média de mercado</p>
            </div>
          </div>
        </div>

        {/* Section 2: Comparison */}
        <div className="w-full py-8">
          <h2 className="text-white tracking-tight text-3xl font-extrabold leading-tight text-center mb-2">
            A Diferença é <span className="text-[#13ec37]">Clara</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 text-sm">
            Veja o que acontece quando você implementa o método correto no seu negócio.
          </p>
          
          <div className="rounded-2xl border border-gray-700 bg-slate-900 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-white/5 border-b border-gray-700">
              <div className="p-4 text-center border-r border-gray-700">
                <span className="material-symbols-outlined text-red-500 mb-1 text-3xl">cancel</span>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sem o Sistema</p>
              </div>
              <div className="p-4 text-center bg-[#13ec37]/10">
                <span className="material-symbols-outlined text-[#13ec37] mb-1 text-3xl">check_circle</span>
                <p className="text-xs font-bold text-[#13ec37] uppercase tracking-wider">Com o Sistema</p>
              </div>
            </div>
            {[
              { bad: "Agenda Vazia", good: "Agenda Lotada" },
              { bad: "Clientes Ruins", good: "Clientes Qualificados" },
              { bad: "Baixo Faturamento", good: "Lucro Previsível" },
              { bad: "Estresse Diário", good: "Processo Automático" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-gray-800 last:border-0">
                <div className="p-4 flex flex-col justify-center border-r border-gray-800 bg-red-900/10">
                  <p className="text-gray-300 text-sm font-medium text-center">{row.bad}</p>
                </div>
                <div className="p-4 flex flex-col justify-center bg-[#13ec37]/5">
                  <p className="text-white text-sm font-bold text-center">{row.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 3 Pillars */}
        <div className="w-full bg-white/5 py-10 rounded-3xl border border-gray-700 mt-8">
          <h2 className="text-white tracking-tight text-2xl font-bold leading-tight px-4 text-center pb-8">
            Os 3 Pilares do <span className="text-[#13ec37]">Sucesso</span>
          </h2>
          <div className="flex flex-col gap-6 px-4">
            {[
              { num: "01.", title: "APARECER", icon: "visibility", color: "blue" },
              { num: "02.", title: "ATRAIR", icon: "network_node", color: "purple" },
              { num: "03.", title: "CONVERTER", icon: "monetization_on", color: "primary" }
            ].map((pillar, i) => (
              <div key={i} className="group flex gap-4 p-5 rounded-xl bg-slate-900 border border-gray-700 shadow-sm hover:border-[#13ec37]/50 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${pillar.color === 'blue' ? 'bg-blue-900/30 text-blue-400' : pillar.color === 'purple' ? 'bg-purple-900/30 text-purple-400' : 'bg-[#13ec37]/10 text-[#13ec37]'}`}>
                    <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-lg font-bold leading-tight flex items-center gap-2">
                    <span className="text-gray-600 text-sm">{pillar.num}</span> {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Modules */}
        <div className="w-full pt-16 pb-8">
          <span className="text-[#13ec37] font-bold tracking-wider text-xs uppercase block text-center mb-2">O Caminho Completo</span>
          <h2 className="text-3xl font-extrabold leading-tight text-white text-center mb-2">
            O que você vai <br/><span className="text-[#13ec37]">aprender hoje</span>
          </h2>
          <p className="text-slate-400 text-sm text-center mb-8">
            5 módulos práticos desenhados para gerar resultados imediatos no seu negócio.
          </p>
          
          <div className="flex flex-col gap-4">
            {[
              { num: 1, title: "Fundamentos do Sistema", desc: "A base sólida para escalar seu negócio sem depender da sorte.", res: "Clareza", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4K8uhWZ6vXML4Kwl7G5BzGUDbXg489iWt6L_Hbv2x7-9RE_HIPOtukuBCbNCLg3ZRsNjiHv4a8_YAGLNQN4mcpUUUoFut-MYMGP28UjYvslQBbDbsAMovsd42OBsBii4y_J7ygWCDi4LL7KYN1beFuxD_UGz5OEiEHIwdzjQ8wK22DZSl4LvqxtAgzhWZnwoJYlRCsjejGCA5aAsgSAR24s59Z_7rI22dmh8ZdA_W20ElowRgRf-wnB-pDxxX2PNGYmh9WxELekJb" },
              { num: 2, title: "Máquina de Atração", desc: "Técnicas de tráfego orgânico e pago para encher sua agenda.", res: "Leads", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL6gKbAOhkIc-qHtGxGZ1X68GliBNcbiLMl71QtCxm3fftBFRktsUX-ckL8X3xo_vLLUzZINEYTKnbHkqlIQm9ki4-s3dzcE7zhcpxU0D738OUtfRVn5J7kq8jxpOgz29nc1SgBkqDbkwjPqYaNZNcTox3yGRemHZTjYE5GrduL7TVh-TihGt-HHZTKW-WYYOEl0ztPVfg3I_pgi79x0-2hBun-wyKDP_FmesUJlQaWPU_19wnuNR19WDCI03beyBYCrwPAaudeh4Y" },
              { num: 3, title: "Conversão Expressa", desc: "Scripts validados que transformam curiosos em clientes pagantes.", res: "Vendas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB143wyiHEP2fIKsRQvBPaV6o1EOk0Zd8viXJ4o6b-eSFQO_Ixj60-Fabv1YXo1viBaN3g7ncVWNTDFh1YpVLN_aJibkhsSR7RbnCqe6ZrBI0RzlUFaUsssV_P7TymVlt8yDm3DPZNuG5jhsE43-BMhiFWKbITPLzFuHwFtCm0Ba7dXb3xWwSML-F1N6PTI8m89VgmPoo0wI8id2aV9j1IqokWYgQfnbvi6hYBzKU05d32JiVDcFSXAZoIxS-lPLydVofFCGmQQ2rZP" },
              { num: 4, title: "Experiência do Cliente", desc: "Como entregar mais do que o prometido e gerar fãs.", res: "Retenção", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWl-nG_nBXd0NjSUlikWgEqEeukzTCS8zE2hAiSHVWsCSD7SrPQ_nmr51jKLexx8dnwV4WWLOJ6mU9AA0WnsVYukNYyGI9gCBY5zOAbjUbfOksMph6R9nHoRIRMih1Sv1Gd95sIIddhBRCzwDnkWyHcM4uR6a3MyJAWJlNbqwuwnBS7xP4W-AEQoqjek-ijfnOMq7aA4Alcx1mroHgCg0NoLcjRbmIVhXAwrCtF6WkQhHlsr3NNw9OExzIic9gTsz8nx3sq8aHQC3U" },
              { num: 5, title: "Automação e Crescimento", desc: "Ferramentas para vender no automático enquanto você dorme.", res: "Escala", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd7MYYfYnS6oUv_dsnDak9XXVwhQg4X_DFxsE_DlEonAOZ6RkoCMDXjEaCaJXcJKF4gNKAQleAA1q14MwO7j3N9L8fggsWKEFKOjljNw8Z5StvbbIUrcqR_6sB8InhAjKu6nf_5Ys_BFB6RvNRnDQkb2T-talPxkHeFLB5J8N3e5kNmq3fzF3uWhMchexmkQVQd7tzOQubh_jkXE7n3r96HREE04nztFqhvGz9PNh4RbEh2-6k7p6qox68ZKkxGjGAprR2T9MFdA3m" }
            ].map((mod) => (
              <div key={mod.num} className="group relative flex flex-col bg-slate-900 rounded-xl shadow-sm border border-slate-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#13ec37]"></div>
                <div className="p-5 flex gap-4">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-1.5 mb-2">
                      <span className="bg-[#13ec37]/10 text-[#13ec37] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Resultado: {mod.res}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug mb-1">Módulo {mod.num}: {mod.title}</h3>
                    <p className="text-xs text-slate-400">{mod.desc}</p>
                  </div>
                  <div className="w-20 h-20 shrink-0 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('${mod.img}')` }}></div>
                    <div className="absolute inset-0 bg-[#13ec37]/20 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Bonuses */}
        <div className="w-full bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-800 dark:to-black rounded-3xl p-6 text-white relative overflow-hidden shadow-xl mt-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#13ec37]/20 blur-[80px] rounded-full pointer-events-none -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Pack de Bônus</h2>
              <div className="bg-[#13ec37] text-slate-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                OFERTA ESPECIAL
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Bônus 1: Templates de Copy", desc: "Modelos prontos para copiar e colar nas suas redes.", price: "R$ 97,00", icon: "description" },
                { title: "Bônus 2: Calculadora de ROI", desc: "Planilha automática para gerenciar seus lucros.", price: "R$ 47,00", icon: "calculate" },
                { title: "Bônus 3: Comunidade VIP", desc: "Acesso vitalício ao nosso grupo de networking.", price: "R$ 97,00", icon: "groups" },
                { title: "Bônus 4: Masterclass de Vendas", desc: "Aula secreta dissecando vendas de 6 dígitos.", price: "R$ 67,00", icon: "video_library" }
              ].map((bonus, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded bg-[#13ec37]/20 flex items-center justify-center text-[#13ec37] shrink-0">
                    <span className="material-symbols-outlined">{bonus.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{bonus.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{bonus.desc}</p>
                    <p className="text-xs text-[#13ec37] mt-1 line-through opacity-70">{bonus.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-slate-400 text-sm mb-1">Valor total dos bônus</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-bold text-slate-400 line-through decoration-[#13ec37]/50 decoration-2">R$ 307,00</span>
                <span className="bg-[#13ec37] text-slate-900 text-lg font-black px-4 py-1 rounded-lg transform rotate-[-2deg] shadow-[0_0_15px_rgba(19,236,55,0.4)]">
                  GRÁTIS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Social Proof */}
        <div className="w-full pt-20 pb-8">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#13ec37]/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
            Histórias Reais
          </div>
          <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight mb-3">
            Quem ativou,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ec37] to-green-600">colheu resultado</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Veja como profissionais comuns transformaram seus negócios aplicando o método em menos de 7 dias.
          </p>

          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-slate-800 rounded-2xl shadow-sm border border-slate-700 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnInPMz83oXTinrtIcyMkR1BfT7dfMg6pVk_AokHjloVi5MZPm1-sUTAYDTxQdk_cEbGd6qC97k_7ImjCdev2N_xfSfNrj7VDGGPZK4taD_5FetAvgGJqaXsHQKIKVdG9Zvwz3gjbiP-00LrvE5efjmWcvlLwEiQtk9hjVh6bzuC_9N6CERMkm-PKjki9RT8EVdcCmLH8KRcYsqzk8Ljf9cFmgZRA0SKYuMgo8MaSNPMDTsgIvgiiev149uVwsxhV_53-3BFQ9B8fE')" }}></div>
                <div className="absolute bottom-3 left-4 z-20">
                  <p className="text-white text-lg font-bold">Ricardo M.</p>
                  <p className="text-white/80 text-xs font-medium">Corretor de Imóveis</p>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 p-2 rounded-lg text-center">
                    <p className="text-xs text-slate-400 uppercase">Investimento</p>
                    <p className="text-white font-bold">R$ 300,00</p>
                  </div>
                  <div className="bg-green-900/20 p-2 rounded-lg text-center border border-green-900/30">
                    <p className="text-xs text-green-400 uppercase font-bold">Retorno</p>
                    <p className="text-green-300 font-bold">R$ 4.500,00</p>
                  </div>
                </div>
                <div className="bg-[#0b141a] p-3 rounded-lg border border-slate-700 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-600/30 rounded-t-lg"></div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#202c33] self-start rounded-lg rounded-tl-none p-2 max-w-[85%] shadow-sm">
                      <p className="text-[11px] text-slate-200 leading-snug">
                        Ricardo, fechei 3 contratos na primeira semana usando aquele script de qualificação. O ROI foi absurdo!
                      </p>
                      <div className="text-[9px] text-slate-400 text-right mt-1">10:42</div>
                    </div>
                    <div className="bg-[#005c4b] self-end rounded-lg rounded-tr-none p-2 max-w-[85%] shadow-sm">
                      <p className="text-[11px] text-slate-100 leading-snug">
                        Sensacional! É só o começo. Mantém a constância nos anúncios.
                      </p>
                      <div className="text-[9px] text-green-100/60 text-right mt-1 flex items-center justify-end gap-0.5">
                        10:45 <span className="material-symbols-outlined text-[10px]">done_all</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-800 rounded-2xl shadow-sm border border-slate-700 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwYFEgim8vJvKCw-09LUhfw-EMn3LMlXlApGZRF6lX9ZVV9yH8MtcM501WgYeNMci1zCwaEGCxej0qwa7k8uG1WrF3fxuMbbE81XdnFmGWFaIz3_f8JhQnIZqg-gV2o8PDp4-xIjvd6axX6yFw0VBe9kGymmqw5yqYlSn5gwA7reFOxj-VOqINBV8ax3zo6BXYry48K3J6lS1ugUawmmtHJPTdPdkTnw8EI-eWco77ZyCt2ZCIlFVSRgLyPGmunk9t12nK4KfpoSth')" }}></div>
                <div className="absolute bottom-3 left-4 z-20">
                  <p className="text-white text-lg font-bold">Ana P.</p>
                  <p className="text-white/80 text-xs font-medium">Esteticista</p>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 p-2 rounded-lg text-center">
                    <p className="text-xs text-slate-400 uppercase">Investimento</p>
                    <p className="text-white font-bold">R$ 150,00</p>
                  </div>
                  <div className="bg-green-900/20 p-2 rounded-lg text-center border border-green-900/30">
                    <p className="text-xs text-green-400 uppercase font-bold">Retorno</p>
                    <p className="text-green-300 font-bold">R$ 2.100,00</p>
                  </div>
                </div>
                <div className="relative pl-4 border-l-4 border-[#13ec37]">
                  <p className="text-slate-300 italic text-sm">
                    "Minha agenda lotou em 4 dias. O sistema trouxe clientes prontos para pagar, sem curiosos perguntando preço."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Final Choice */}
        <div className="w-full py-12">
          <h2 className="text-white text-2xl font-bold text-center mb-6">Você tem dois caminhos</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-red-900/10 border border-red-900/30 relative overflow-hidden group">
              <div className="flex items-start gap-4 z-10 relative">
                <div className="bg-red-900/40 p-2 rounded-full shrink-0 text-red-400">
                  <span className="material-symbols-outlined">close</span>
                </div>
                <div>
                  <h3 className="font-bold text-red-100 mb-1">Caminho da Tentativa</h3>
                  <ul className="text-sm text-red-200 space-y-2 mt-2 list-disc pl-4">
                    <li>Continuar gastando sem retorno</li>
                    <li>Depender de indicação (instável)</li>
                    <li>Perder tempo com curiosos</li>
                    <li>Ver a concorrência crescendo</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center -my-6 relative z-10">
              <span className="bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border-4 border-[#0a0a0a]">VS</span>
            </div>
            <div className="p-5 rounded-xl bg-[#13ec37]/10 border border-[#13ec37]/20 relative overflow-hidden shadow-sm">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#13ec37]/20 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4 z-10 relative">
                <div className="bg-[#13ec37] text-slate-900 p-2 rounded-full shrink-0 shadow-lg shadow-[#13ec37]/30">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Caminho do Resultado</h3>
                  <ul className="text-sm text-slate-300 space-y-2 mt-2">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                      Clientes qualificados todo dia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                      Scripts validados de alta conversão
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                      Previsibilidade de faturamento
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Area */}
        <div className="w-full mt-8 mb-24">
          <div className="w-full text-center space-y-4">
            <div className="inline-block bg-slate-800 rounded-lg px-3 py-1 mb-1">
              <span className="text-xs font-semibold text-slate-400 line-through mr-2">De R$ 997,00</span>
              <span className="text-xs font-bold text-[#13ec37]">Por apenas 12x de R$ 29,90</span>
            </div>
            <button className="w-full bg-[#13ec37] hover:bg-[#0fd630] active:scale-[0.98] transition-all text-slate-900 text-lg font-extrabold py-4 px-6 rounded-xl shadow-[0_8px_30px_-6px_rgba(19,236,55,0.4)] flex items-center justify-center gap-2 group">
              <span>QUERO VENDER TODOS OS DIAS</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform font-bold">arrow_forward</span>
            </button>
            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">lock</span> Compra Segura</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Acesso Imediato</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-[#0a0a0a] border-t border-slate-800 pb-safe pt-2 z-50">
        <div className="flex justify-around items-end px-2 pb-2">
          <a className="flex flex-col items-center justify-end gap-1 flex-1 min-h-[48px] group" href="#">
            <span className="material-symbols-outlined text-white group-hover:text-[#13ec37] transition-colors" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-[10px] font-medium text-white group-hover:text-[#13ec37] transition-colors">Início</span>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 flex-1 min-h-[48px] group" href="#">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#13ec37] transition-colors" style={{ fontSize: '24px' }}>search</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover:text-[#13ec37] transition-colors">Buscar</span>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 flex-1 min-h-[48px] group" href="#">
            <div className="relative">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#13ec37] transition-colors" style={{ fontSize: '24px' }}>shopping_bag</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">1</span>
            </div>
            <span className="text-[10px] font-medium text-slate-400 group-hover:text-[#13ec37] transition-colors">Carrinho</span>
          </a>
          <a className="flex flex-col items-center justify-end gap-1 flex-1 min-h-[48px] group" href="#">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#13ec37] transition-colors" style={{ fontSize: '24px' }}>person</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover:text-[#13ec37] transition-colors">Perfil</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
