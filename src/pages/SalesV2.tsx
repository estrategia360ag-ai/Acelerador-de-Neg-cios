import React from 'react';

export function SalesV2() {
  return (
    <div className="bg-[#0A0A0A] text-slate-100 min-h-screen font-['Manrope'] antialiased overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full z-50 top-0 left-0 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#13ec37] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket</span>
            <span className="font-extrabold text-lg tracking-tight">CLIENTE TODO DIA</span>
          </div>
          <a href="#offer" className="bg-[#13ec37] hover:bg-[#0fd630] text-slate-900 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#13ec37]/20">
            Começar Agora
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Section 1: HERO */}
        <section className="relative pt-16 pb-20 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#13ec37]/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#13ec37] dark:text-[#13ec37] text-xs md:text-sm font-bold uppercase tracking-widest mb-6 px-4">
              Para donos de negócio local que estão CANSADOS de depender de agência, gestor de tráfego ou da sorte para vender
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
              Aprenda a Criar Suas Próprias Campanhas e Receba <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13ec37] to-emerald-600">Clientes Todo Dia</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              O Cliente Todo Dia™ é o sistema de 3 passos que ensina donos de negócio local a criarem seus próprios anúncios no Instagram e Facebook — gastando a partir de R$ 6/dia — e lotarem a agenda sem depender de ninguém.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a href="#offer" className="w-full sm:w-auto bg-[#13ec37] hover:bg-[#0fd630] text-slate-900 text-lg font-black py-5 px-10 rounded-2xl shadow-xl shadow-[#13ec37]/30 transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-1">
                <span className="flex items-center gap-2">
                  QUERO CRIAR MINHAS CAMPANHAS <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </span>
                <span className="text-sm font-bold opacity-80 uppercase tracking-wider">R$ 197 | 12x de R$ 19,70</span>
              </a>
              <div className="flex items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-4">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#13ec37] text-sm">verified_user</span> Acesso Vitalício</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#13ec37] text-sm">lock</span> Pagamento Seguro</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: DORES */}
        <section className="py-20 px-4 bg-[#0d0d0d] border-y border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white tracking-tight">
              Isso soa familiar?
            </h2>
            <div className="space-y-4 mb-12">
              {[
                "Paga agência e não sabe se os anúncios funcionam?",
                "Já impulsionou post e jogou dinheiro fora?",
                "Depende de indicação e sorte pra vender?",
                "Quer anunciar mas não sabe como?",
                "Posta no Instagram mas ninguém vê?",
                "Tem medo de mexer no Gerenciador de Anúncios?",
                "Sente que poderia atrair mais clientes mas não sabe por onde começar?"
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="material-symbols-outlined text-red-500 font-bold">close</span>
                  <p className="text-slate-300 font-semibold">{pain}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-8 rounded-3xl bg-[#13ec37]/5 border-2 border-dashed border-[#13ec37]/30">
              <p className="text-xl md:text-2xl font-black text-white italic leading-tight">
                "O problema não é seu produto. É que ninguém te ensinou a fazer ele <span className="text-[#13ec37]">APARECER</span>."
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: CUSTO DA DEPENDÊNCIA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
                ⚠️ Quanto custa DEPENDER dos outros?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Scenario 1 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-4">CENÁRIO 1</h3>
                <p className="text-lg font-bold mb-6 text-white">Você paga agência</p>
                <div className="space-y-3 text-sm mb-8">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Mensalidade</span>
                    <span className="font-bold">R$ 1.500/mês</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Contrato mín.</span>
                    <span className="font-bold">6 meses</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-500">Total</span>
                    <span className="font-black text-red-500">R$ 9.000</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 bg-red-900/20 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  Resultado garantido? NÃO
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
                <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-4">CENÁRIO 2</h3>
                <p className="text-lg font-bold mb-6 text-white">Você não anuncia</p>
                <div className="space-y-3 text-sm mb-8">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Clientes perdidos</span>
                    <span className="font-bold">3/dia</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Ticket médio</span>
                    <span className="font-bold">R$ 80</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-500">Perda anual</span>
                    <span className="font-black text-red-500">R$ 86.400</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white/5 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  Invisível para o mercado
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-[#13ec37] p-8 rounded-3xl border-4 border-slate-800 shadow-2xl shadow-[#13ec37]/30 transform md:scale-105">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">CENÁRIO 3</h3>
                <p className="text-lg font-bold mb-6 text-slate-900">VOCÊ aprende e faz</p>
                <div className="space-y-3 text-sm mb-8 text-slate-900/80">
                  <div className="flex justify-between border-b border-slate-900/10 pb-2">
                    <span className="font-medium">Invest. mensal</span>
                    <span className="font-bold">R$ 180 (R$ 6/dia)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900/10 pb-2">
                    <span className="font-medium">Curso (uma vez)</span>
                    <span className="font-bold">R$ 197</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-medium">Controle</span>
                    <span className="font-black">100% SEU</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white/40 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Resultado: Clientes todo dia
                </div>
              </div>
            </div>
            <p className="text-center mt-12 text-xl font-bold text-white">Qual cenário faz mais sentido?</p>
          </div>
        </section>

        {/* Section 4: COMPARAÇÃO */}
        <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#13ec37]/10 blur-[120px] rounded-full"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
              Três caminhos. Só um faz sentido.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              {/* Path 1 */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
                <h3 className="text-red-400 font-black mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">cancel</span> NÃO ANUNCIAR
                </h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-center gap-2">• Zero controle</li>
                  <li className="flex items-center gap-2">• Zero previsibilidade</li>
                  <li className="flex items-center gap-2">• Depende da sorte</li>
                  <li className="flex items-center gap-2">• Concorrente na frente</li>
                  <li className="flex items-center gap-2">• Loja vazia</li>
                </ul>
              </div>
              {/* Path 2 */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
                <h3 className="text-red-400 font-black mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">cancel</span> PAGAR AGÊNCIA
                </h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-center gap-2">• R$ 1.500/mês</li>
                  <li className="flex items-center gap-2">• Contrato de 6 meses</li>
                  <li className="flex items-center gap-2">• Não sabe o que fazem</li>
                  <li className="flex items-center gap-2">• Resultado duvidoso</li>
                  <li className="flex items-center gap-2">• Relatório confuso</li>
                </ul>
              </div>
              {/* Path 3 */}
              <div className="p-8 bg-[#13ec37]/10 border-2 border-[#13ec37]/50">
                <h3 className="text-[#13ec37] font-black mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span> FAZER VOCÊ MESMO
                </h3>
                <ul className="space-y-4 text-sm text-white">
                  <li className="flex items-center gap-2 font-bold">• Investe R$ 6/dia</li>
                  <li className="flex items-center gap-2 font-bold">• Cancela quando quiser</li>
                  <li className="flex items-center gap-2 font-bold">• Sabe TUDO que acontece</li>
                  <li className="flex items-center gap-2 font-bold">• Resultado nas suas mãos</li>
                  <li className="flex items-center gap-2 font-bold">• WhatsApp lotado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: MECANISMO */}
        <section className="py-24 px-4 bg-[#0d0d0d]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
                Como o Cliente Todo Dia™ funciona
              </h2>
              <p className="text-slate-400 font-medium">
                Em 3 passos simples, VOCÊ aprende a criar campanhas que atraem clientes da sua cidade:
              </p>
            </div>
            <div className="space-y-12">
              {[
                { step: "PASSO 1", title: "APARECER", icon: "location_on", desc: "Você aprende a criar anúncios simples que fazem sua empresa aparecer para quem mora perto de você. Todo dia. Automaticamente.", highlight: "Você faz SOZINHO. Em 30 minutos. Mesmo que nunca tenha feito um anúncio na vida." },
                { step: "PASSO 2", title: "ATRAIR", icon: "target", iconName: "ads_click", desc: "Você aprende a segmentar para que seus anúncios apareçam SÓ para quem tem interesse e condição de comprar.", highlight: "Sem desperdiçar dinheiro. Sem jogar pra todo mundo. VOCÊ controla quem vê." },
                { step: "PASSO 3", title: "CONVERTER", icon: "chat", desc: "Você aprende a criar anúncios que fazem a pessoa te chamar no WhatsApp, ligar ou ir até sua loja.", highlight: "Sem site. Sem formulário complicado. A pessoa vê, clica e te manda mensagem." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                  <div className="w-16 h-16 shrink-0 bg-[#13ec37]/10 text-[#13ec37] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.iconName || item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-3 flex items-center gap-3">
                      <span className="text-[#13ec37] text-sm tracking-widest">[{item.step}]</span> {item.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                    <div className="p-4 bg-white/5 rounded-xl border-l-4 border-[#13ec37]">
                      <p className="text-sm font-bold text-white">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center p-10 rounded-3xl bg-slate-900 text-white border border-white/10">
              <p className="text-2xl font-black italic mb-2">"Você no controle. Sem agência. Sem gestor. Só VOCÊ e seu negócio."</p>
            </div>
          </div>
        </section>

        {/* Section 6: MÓDULOS */}
        <section className="py-24 px-4 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white tracking-tight">
              O que VOCÊ vai aprender a fazer sozinho:
            </h2>
            <div className="grid gap-6">
              {[
                { mod: 1, time: "30 min", title: "Fundação Digital", desc: "VOCÊ prepara seu negócio para receber clientes da internet — mesmo sem site.", points: ["Configurar sua página profissional", "Otimizar seu perfil para vendas", "Preparar seu WhatsApp Business"], result: "sua base pronta (VOCÊ fez)" },
                { mod: 2, time: "45 min", title: "Aparecer", desc: "VOCÊ cria seu primeiro anúncio do ZERO.", points: ["Criar sua conta no Gerenciador de Anúncios", "Configurar público da sua cidade", "Definir orçamento ideal (a partir de R$ 6/dia)", "Publicar seu primeiro anúncio (passo a passo na tela)"], result: "seu anúncio rodando (VOCÊ criou)" },
                { mod: 3, time: "45 min", title: "Atrair", desc: "VOCÊ aprende a segmentar como profissional.", points: ["Segmentação por localização (raio exato)", "Segmentação por interesse e comportamento", "Como excluir quem não é cliente", "Públicos que mais convertem por nicho"], result: "só gente qualificada vendo (VOCÊ segmentou)" },
                { mod: 4, time: "45 min", title: "Converter", desc: "VOCÊ cria anúncios que geram mensagem no WhatsApp.", points: ["Textos de anúncio que geram clique", "Como usar botão do WhatsApp no anúncio", "Script de atendimento (o que responder)", "Como criar oferta irresistível"], result: "mensagens chegando (VOCÊ criou o anúncio)" },
                { mod: 5, time: "30 min", title: "Escalar", desc: "VOCÊ aprende a crescer investindo pouco.", points: ["Quando e como aumentar orçamento", "Como criar novos anúncios (variações)", "Métricas simples para acompanhar", "Erros que desperdiçam dinheiro"], result: "crescimento constante (VOCÊ controla)" }
              ].map((module, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-8xl font-black">0{module.mod}</span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">📦 MÓDULO {module.mod} — {module.title} ({module.time})</h3>
                      <p className="text-slate-400 text-sm font-medium">{module.desc}</p>
                    </div>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    {module.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <span className="material-symbols-outlined text-[#13ec37] text-base">check_circle</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-[#13ec37]/10 text-[#13ec37] px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">verified</span> Resultado: {module.result}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-xs">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[#13ec37]">schedule</span> Tempo total: ~3 horas</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[#13ec37]">calendar_today</span> Em 1 dia já pode estar rodando</span>
            </div>
          </div>
        </section>

        {/* Section 7: BÔNUS */}
        <section className="py-24 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
              🎁 BÔNUS QUE ACELERAM SEU RESULTADO:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "BÔNUS 1: 15 Modelos de Anúncio Prontos", price: "R$ 97", desc: "Textos testados. VOCÊ só troca foto e dados do seu negócio. Nunca mais fica travado sem saber o que escrever.", icon: "description" },
                { title: "BÔNUS 2: Checklist de Campanha Lucrativa", price: "R$ 47", desc: "VOCÊ segue o passo a passo e não esquece nada. Igual piloto de avião: checa antes de decolar.", icon: "checklist" },
                { title: "BÔNUS 3: Calculadora de Investimento", price: "R$ 37", desc: "VOCÊ descobre quanto investir por dia pro SEU tipo de negócio. Sem chutar.", icon: "calculate" },
                { title: "BÔNUS 4: Comunidade WhatsApp Exclusiva", price: "R$ 29/mês", desc: "Grupo de donos de negócio que fazem seus próprios anúncios. Troca de experiência + suporte.", icon: "groups" },
                { title: "BÔNUS 5: Aula \"Vídeo que Vende\"", price: "R$ 97", desc: "VOCÊ aprende a criar vídeo com celular. Sem aparecer. Sem equipamento caro.", icon: "videocam" }
              ].map((bonus, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-[#13ec37]/20 text-[#13ec37] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <span className="material-symbols-outlined">{bonus.icon}</span>
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white leading-tight">{bonus.title}</h4>
                        <span className="text-[10px] font-black text-red-400 line-through shrink-0 ml-2">{bonus.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{bonus.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center bg-[#13ec37]/10 p-8 rounded-3xl border-2 border-dashed border-[#13ec37]/30">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Valor total dos bônus</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl font-black text-slate-500 line-through">R$ 307</span>
                <span className="text-5xl font-black text-[#13ec37] drop-shadow-[0_0_15px_rgba(19,236,55,0.4)]">GRÁTIS ✅</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: PROVA SOCIAL */}
        <section className="py-24 px-4 bg-[#0d0d0d]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white tracking-tight">
              Donos de negócio que aprenderam a criar suas próprias campanhas:
            </h2>
            <div className="space-y-8">
              {[
                { case: 1, name: "Maria, Salão de Beleza, Ribeirão Preto/SP", text: "Eu pagava R$ 1.200 de agência e não via resultado. Aprendi a fazer sozinha com o Cliente Todo Dia. Hoje gasto R$ 15/dia e minha agenda tá lotada.", before: "agência R$ 1.200/mês", now: "R$ 15/dia por conta própria" },
                { case: 2, name: "Carlos, Pizzaria, Campinas/SP", text: "Nunca tinha mexido no Gerenciador de Anúncios. Achava que era impossível. Criei meu primeiro anúncio em 40 minutos seguindo o passo a passo.", before: "zero anúncios", now: "55 pizzas/noite" },
                { case: 3, name: "Ana, Loja de Roupas, Goiânia/GO", text: "Demiti a agência no segundo mês. Faço tudo sozinha agora. Gasto menos e vendo mais.", before: "R$ 1.500/mês de agência", now: "faz sozinha, +137% faturamento" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 relative">
                  <span className="material-symbols-outlined absolute top-6 right-8 text-[#13ec37]/20 text-6xl">format_quote</span>
                  <p className="text-lg font-bold text-slate-200 mb-6 leading-relaxed relative z-10 italic">"{item.text}"</p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-slate-800 pt-6">
                    <p className="text-sm font-black text-white">— {item.name}</p>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                      <span className="text-red-500 line-through opacity-60">Antes: {item.before}</span>
                      <span className="text-[#13ec37] bg-[#13ec37]/10 px-3 py-1 rounded-full">Agora: {item.now}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: ANCORAGEM */}
        <section className="py-24 px-4 bg-[#0a0a0a]" id="offer">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white tracking-tight">
              Quanto custa NÃO saber criar suas campanhas?
            </h2>
            <div className="bg-slate-900 rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="space-y-6 mb-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 opacity-60">
                    <span className="text-slate-400 font-bold">Agência de marketing:</span>
                    <span className="text-red-500 font-black">R$ 18.000/ano (refém deles)</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 opacity-60">
                    <span className="text-slate-400 font-bold">Gestor de tráfego:</span>
                    <span className="text-red-500 font-black">R$ 9.600/ano (se ele sair, você para)</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 opacity-60">
                    <span className="text-slate-400 font-bold">Curso genérico:</span>
                    <span className="text-red-500 font-black">R$ 997 (feito pra quem vende online)</span>
                  </div>
                </div>
                <div className="h-px bg-slate-800 w-full mb-12"></div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">O Cliente Todo Dia™:</h3>
                  <div className="mb-10">
                    <p className="text-6xl md:text-8xl font-black text-[#13ec37] tracking-tighter mb-2">R$ 197</p>
                    <p className="text-xl font-bold text-slate-400">(pagamento único) ou 12x de R$ 19,70</p>
                  </div>
                  <div className="space-y-4 mb-10 text-slate-300 font-bold text-lg">
                    <p>VOCÊ aprende. VOCÊ faz. VOCÊ controla.</p>
                    <p>Pra sempre. Sem mensalidade. Sem dependência.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl mb-10">
                    <p className="text-sm font-black text-[#13ec37] uppercase tracking-widest">O conhecimento fica com VOCÊ. Ninguém tira isso.</p>
                  </div>
                  <a href="#" className="block w-full bg-[#13ec37] hover:bg-[#0fd630] text-slate-900 text-xl font-black py-6 rounded-2xl shadow-2xl shadow-[#13ec37]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                    QUERO CRIAR MINHAS CAMPANHAS →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: GARANTIA */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto bg-slate-900 p-10 md:p-16 rounded-[40px] border border-slate-800 shadow-sm text-center">
            <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-6xl text-[#13ec37]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">
              🛡️ GARANTIA INCONDICIONAL DE 7 DIAS
            </h2>
            <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
              <p>Acesse tudo. Assista as aulas. Crie seu primeiro anúncio.</p>
              <p>Se em 7 dias você sentir que não consegue fazer sozinho — mesmo com o passo a passo na tela — devolvemos 100% do seu dinheiro.</p>
              <p className="font-bold text-white">Sem perguntas. Sem burocracia. O risco é ZERO.</p>
              <p className="text-sm italic">"O risco REAL é continuar pagando R$ 1.500/mês de agência que não te ensina nada. Ou pior: continuar invisível."</p>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section className="py-24 px-4 bg-[#0d0d0d]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white tracking-tight">
              Dúvidas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "Nunca fiz anúncio na vida. Consigo mesmo?", a: "SIM. O Cliente Todo Dia foi feito pra quem NUNCA anunciou. Tudo é mostrado passo a passo, clicando na tela. Se você sabe usar WhatsApp, consegue criar seu anúncio. Em 30-40 minutos seu primeiro anúncio já está rodando." },
                { q: "Eu já pago agência. Preciso disso?", a: "Se sua agência traz resultado, ótimo. Mas se você paga R$ 1.500/mês e não sabe nem o que estão fazendo... o Cliente Todo Dia te ensina a fazer o MESMO (ou melhor) gastando R$ 6/dia por conta própria. Vários alunos demitiram a agência depois de aprender." },
                { q: "Quanto preciso investir em anúncios?", a: "A partir de R$ 6/dia (R$ 180/mês). Dez vezes menos que uma agência. E com VOCÊ no controle total." },
                { q: "Não tenho tempo pra aprender isso.", a: "O conteúdo total tem ~3 horas. Você assiste no seu ritmo. E depois que configura, o anúncio roda SOZINHO 24 horas. Você gasta 15 minutos por semana pra acompanhar." },
                { q: "E se a Meta mudar alguma coisa?", a: "O Cliente Todo Dia é atualizado sempre que a Meta muda suas ferramentas. Você recebe as atualizações gratuitamente." },
                { q: "Já impulsionei post e não funcionou.", a: "Normal. Impulsionar é a forma ERRADA. No Cliente Todo Dia você aprende a usar o Gerenciador de Anúncios — que é o jeito CERTO. Custa menos e traz 10x mais resultado. E VOCÊ aprende a fazer." },
                { q: "Preciso de site?", a: "Não. Seus anúncios podem direcionar direto pro WhatsApp, ligação ou endereço da loja." },
                { q: "E se não funcionar?", a: "Garantia de 7 dias. Devolvemos 100%. Mas se você seguir o passo a passo, VAI funcionar. Porque VOCÊ vai estar no controle." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white/5 rounded-2xl border border-white/5 transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-white list-none">
                    {faq.q}
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#13ec37]">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 12: CTA FINAL */}
        <section className="py-24 px-4 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[#13ec37]/10 blur-[120px] rounded-full"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Você tem 3 opções agora:</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left opacity-60">
                <h3 className="font-black text-red-400 mb-4 uppercase tracking-widest text-xs">OPÇÃO 1</h3>
                <p className="font-bold mb-4">Não fazer nada.</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• Continuar invisível</li>
                  <li>• Perder clientes pro concorrente</li>
                  <li>• R$ 7.200/mês de prejuízo</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left opacity-60">
                <h3 className="font-black text-red-400 mb-4 uppercase tracking-widest text-xs">OPÇÃO 2</h3>
                <p className="font-bold mb-4">Pagar agência.</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• R$ 1.500/mês</li>
                  <li>• Sem saber o que fazem</li>
                  <li>• Refém de contrato</li>
                  <li>• Volta pra estaca zero se parar</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-[#13ec37]/10 border-2 border-[#13ec37] text-left">
                <h3 className="font-black text-[#13ec37] mb-4 uppercase tracking-widest text-xs">OPÇÃO 3</h3>
                <p className="font-bold mb-4">Aprender a fazer VOCÊ MESMO.</p>
                <ul className="text-xs space-y-2 text-white">
                  <li className="font-bold">• R$ 197 (uma vez)</li>
                  <li className="font-bold">• Investir R$ 6/dia em anúncios</li>
                  <li className="font-bold">• Saber EXATAMENTE o que faz</li>
                  <li className="font-bold">• Controle total. Pra sempre.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-2">
                <p className="text-4xl md:text-6xl font-black text-[#13ec37]">R$ 197</p>
                <p className="text-xl font-bold text-slate-400">ou 12x de R$ 19,70</p>
              </div>
              <a href="#" className="inline-block w-full max-w-md bg-[#13ec37] hover:bg-[#0fd630] text-slate-900 text-xl font-black py-6 rounded-2xl shadow-2xl shadow-[#13ec37]/40 transition-all transform hover:scale-105 active:scale-95">
                QUERO APRENDER A CRIAR MINHAS CAMPANHAS →
              </a>
              <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">verified_user</span> Garantia 7 dias</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">infinity</span> Acesso vitalício</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">lock</span> Pagamento seguro</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">support_agent</span> Suporte incluso</span>
              </div>
              <p className="text-xl font-black italic text-slate-300 mt-12">
                "Chega de depender dos outros. Seu negócio, suas campanhas, seus resultados."
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-16 px-4 border-t border-white/5 text-slate-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#13ec37]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket</span>
              <span className="font-black tracking-tight text-white">CLIENTE TODO DIA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              O método prático para empreendedores locais que querem dominar o tráfego pago e vender todos os dias com lucro real e autonomia total.
            </p>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Treinamento</h4>
            <ul className="space-y-3 text-xs font-bold">
              <li><a className="hover:text-[#13ec37] transition" href="#">Módulos</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Bônus</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Área de Membros</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-xs font-bold">
              <li><a className="hover:text-[#13ec37] transition" href="#">Termos de Uso</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Privacidade</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Políticas de Cookies</a></li>
              <li><a className="hover:text-[#13ec37] transition" href="#">Reembolso</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 Cliente Todo Dia. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 opacity-40">Desenvolvido para resultados reais.</p>
        </div>
      </footer>
    </div>
  );
}
