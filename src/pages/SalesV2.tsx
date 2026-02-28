import React from 'react';

export function SalesV2() {
  return (
    <div className="bg-gray-100 dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 transition-colors duration-200 min-h-screen font-sans" style={{ minHeight: 'max(884px, 100dvh)' }}>
      <header className="fixed w-full z-50 top-0 left-0 bg-gray-100/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-[#3B82F6] text-2xl">rocket_launch</span>
            <span className="font-bold text-lg tracking-tight"><span className="text-[#3B82F6]">CLIENTE TODO DIA</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            <a className="hover:text-[#3B82F6] transition-colors" href="#metodo">O Método</a>
            <a className="hover:text-[#3B82F6] transition-colors" href="#resultados">Resultados</a>
            <a className="hover:text-[#3B82F6] transition-colors" href="#faq">FAQ</a>
          </div>
          <a className="hidden sm:block bg-[#3B82F6] hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all" href="#offer">
            Começar Agora
          </a>
        </div>
      </header>

      <main>
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#3B82F6]/20 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="material-icons-round text-sm">bolt</span>
              Novo Método de Tráfego Local
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Pare de depender do <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">movimento de rua.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ative o <strong>Cliente Todo Dia™</strong> e transforme anúncios no Facebook e Instagram em uma máquina previsível de vendas para o seu negócio local.
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a href="#offer" className="w-full sm:w-auto bg-[#3B82F6] hover:bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                QUERO CLIENTES TODOS OS DIAS
                <span className="material-icons-round">arrow_forward</span>
              </a>
              <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-500 font-medium mt-2">
                <span className="flex items-center gap-1"><span className="material-icons-round text-green-500 text-sm">check_circle</span> Sem agências caras</span>
                <span className="flex items-center gap-1"><span className="material-icons-round text-green-500 text-sm">check_circle</span> Método 100% prático</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Até quando você vai queimar <span className="bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent">dinheiro</span> com postagens que não vendem?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#171717] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-round text-red-500">trending_down</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Invisibilidade Digital</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Você posta todo dia, faz stories, mas o engajamento é baixo e as vendas não acontecem.
                </p>
              </div>
              <div className="bg-white dark:bg-[#171717] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-round text-red-500">money_off</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Dependência da Sorte</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ficar esperando o cliente passar na porta ou te indicar é a receita certa para falir.
                </p>
              </div>
              <div className="bg-white dark:bg-[#171717] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-round text-red-500">schedule</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Falta de Tempo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Você cuida do negócio, do financeiro e não tem tempo para aprender marketing complexo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="metodo" className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent -z-10"></div>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O Mecanismo dos 3 Pilares</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Não é mágica, é método. O Cliente Todo Dia™ se baseia em três etapas fundamentais para garantir fluxo constante de vendas.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent -z-10"></div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-round text-4xl text-white drop-shadow-lg">visibility</span>
                </div>
                <h3 className="text-xl font-bold mb-3">1. Aparecer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 px-4 leading-relaxed">
                  Dominar a região num raio de 5km do seu negócio, aparecendo para quem realmente importa.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-round text-4xl text-white drop-shadow-lg">chat</span>
                </div>
                <h3 className="text-xl font-bold mb-3">2. Atrair</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 px-4 leading-relaxed">
                  Criar ofertas irresistíveis que fazem o cliente sentir que está perdendo dinheiro se não comprar.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-round text-4xl text-white drop-shadow-lg">shopping_cart</span>
                </div>
                <h3 className="text-xl font-bold mb-3">3. Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 px-4 leading-relaxed">
                  Transformar interessados em pagantes através de scripts de vendas validados no WhatsApp.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a className="inline-block bg-[#3B82F6] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors" href="#offer">
                Conhecer o Método Agora
              </a>
            </div>
          </div>
        </section>

        <section id="resultados" className="py-24 px-4 bg-white dark:bg-[#121212]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">A Escolha é <span className="text-[#3B82F6]">Sua</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-icons-round text-9xl text-red-500">cancel</span>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                  <span className="material-icons-round">close</span>
                  SEM O SISTEMA
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Refém do alcance orgânico (que morre a cada dia).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Posta todo dia sem garantia nenhuma de retorno.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Faturamento instável: um mês bom, outro ruim.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Concorrentes dominam a atenção do seu público.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3B82F6] border-2 border-blue-400 rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-blue-500/20">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <span className="material-icons-round text-9xl text-white">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="material-icons-round">check_circle</span>
                  COM O SISTEMA
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-blue-100 text-sm mt-0.5">verified</span>
                    <span className="text-white text-sm font-medium">Sua empresa é vista diariamente por quem quer comprar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-blue-100 text-sm mt-0.5">verified</span>
                    <span className="text-white text-sm font-medium">Não depende de postar dancinhas ou stories o dia todo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-blue-100 text-sm mt-0.5">verified</span>
                    <span className="text-white text-sm font-medium">Faturamento se torna estável, previsível e crescente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-blue-100 text-sm mt-0.5">verified</span>
                    <span className="text-white text-sm font-medium">Você decide exatamente quantos clientes quer atender.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100 dark:bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8 font-semibold">Funciona Perfeitamente Para:</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#171717] rounded-lg flex items-center justify-center border border-gray-700">
                  <span className="material-icons-round text-gray-400">storefront</span>
                </div>
                <span className="text-xs font-medium">Lojas Físicas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#171717] rounded-lg flex items-center justify-center border border-gray-700">
                  <span className="material-icons-round text-gray-400">medical_services</span>
                </div>
                <span className="text-xs font-medium">Clínicas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#171717] rounded-lg flex items-center justify-center border border-gray-700">
                  <span className="material-icons-round text-gray-400">restaurant</span>
                </div>
                <span className="text-xs font-medium">Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#171717] rounded-lg flex items-center justify-center border border-gray-700">
                  <span className="material-icons-round text-gray-400">content_cut</span>
                </div>
                <span className="text-xs font-medium">Estética</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#171717] rounded-lg flex items-center justify-center border border-gray-700">
                  <span className="material-icons-round text-gray-400">fitness_center</span>
                </div>
                <span className="text-xs font-medium">Academias</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-50 dark:bg-[#0A0A0A] relative" id="offer">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-[#3B82F6]/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-extrabold mb-2 uppercase tracking-tight text-gray-900 dark:text-white">
                Oferta <span className="text-[#3B82F6]">Especial</span> de <br />Lançamento
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Aproveite o preço promocional e comece a vender hoje mesmo. Tenha acesso vitalício ao método que vai mudar o jogo do seu negócio.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">O que você leva:</h3>
                <div className="flex items-center gap-3">
                  <span className="material-icons-round text-[#3B82F6]">check_circle</span>
                  <span className="text-gray-700 dark:text-gray-300">Acesso vitalício ao treinamento completo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons-round text-[#3B82F6]">check_circle</span>
                  <span className="text-gray-700 dark:text-gray-300">Todas as atualizações futuras sem custo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons-round text-[#3B82F6]">check_circle</span>
                  <span className="text-gray-700 dark:text-gray-300">Suporte direto na plataforma</span>
                </div>
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl mt-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-[#3B82F6] font-bold text-sm mb-4 uppercase flex items-center gap-2 tracking-wider">
                    <span className="material-icons-round text-sm">card_giftcard</span> Bônus Exclusivos:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                    <li className="flex items-center gap-3"><span className="material-icons-round text-primary text-xs">group</span> Comunidade Exclusiva de Empreendedores</li>
                    <li className="flex items-center gap-3"><span className="material-icons-round text-primary text-xs">description</span> Planilha de Cálculo de ROI e Lucro</li>
                    <li className="flex items-center gap-3"><span className="material-icons-round text-primary text-xs">settings</span> Checklist de Configuração de Conta</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-[#3B82F6] rounded-2xl p-1 shadow-2xl shadow-[#3B82F6]/40 relative">
                <div className="absolute -top-4 right-4 bg-[#FACC15] text-black font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                  Mais Vendido
                </div>
                <div className="bg-[#3B82F6] rounded-xl p-8 text-center text-white h-full flex flex-col justify-between">
                  <div>
                    <p className="text-blue-100 text-sm mb-2 line-through">De R$ 497,00</p>
                    <p className="text-blue-100 text-sm mb-1">Por apenas 12x de</p>
                    <div className="flex justify-center items-baseline mb-2">
                      <span className="text-2xl font-medium mr-1">R$</span>
                      <span className="text-6xl font-extrabold tracking-tighter">19,70</span>
                    </div>
                    <p className="text-blue-100 text-xs mb-8">ou R$ 197,00 à vista no PIX ou Cartão.</p>
                  </div>
                  <button className="w-full bg-[#FACC15] hover:bg-yellow-300 text-gray-900 font-extrabold text-lg py-4 px-6 rounded-lg shadow-lg transform transition hover:translate-y-[-2px] hover:shadow-xl uppercase mb-4">
                    QUERO ME INSCREVER AGORA
                  </button>
                  <div className="flex justify-center items-center gap-2 text-blue-100 text-[10px] font-medium uppercase tracking-wide">
                    <span className="material-icons-round text-sm">verified_user</span>
                    7 Dias de Garantia Incondicional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-4 bg-[#121212] border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Dúvidas <span className="text-[#3B82F6]">Frequentes</span></h2>
            <p className="text-gray-400 text-center text-sm mb-12">Ainda tem alguma dúvida? Confira as respostas abaixo.</p>
            <div className="space-y-4">
              <details className="group bg-[#171717] rounded-lg border border-gray-800 open:border-[#3B82F6]/50 transition-all">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold select-none text-white">
                  Preciso de conhecimento prévio em marketing?
                  <span className="material-icons-round transition group-open:rotate-180 text-gray-500 group-open:text-[#3B82F6]">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  Absolutamente não. O curso é desenhado para iniciantes, mostrando clique a clique, passo a passo, como configurar tudo do zero.
                </div>
              </details>
              <details className="group bg-[#171717] rounded-lg border border-gray-800 open:border-[#3B82F6]/50 transition-all">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold select-none text-white">
                  Quanto tempo demora para ter resultados?
                  <span className="material-icons-round transition group-open:rotate-180 text-gray-500 group-open:text-[#3B82F6]">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  Muitos alunos começam a ver os primeiros contatos chegando nas primeiras 24 a 48 horas após ativarem as campanhas seguindo o método.
                </div>
              </details>
              <details className="group bg-[#171717] rounded-lg border border-gray-800 open:border-[#3B82F6]/50 transition-all">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold select-none text-white">
                  Serve para o meu tipo de negócio?
                  <span className="material-icons-round transition group-open:rotate-180 text-gray-500 group-open:text-[#3B82F6]">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  Se você vende produtos ou serviços localmente e precisa de clientes na sua cidade ou bairro, sim, serve perfeitamente para você.
                </div>
              </details>
              <details className="group bg-[#171717] rounded-lg border border-gray-800 open:border-[#3B82F6]/50 transition-all">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold select-none text-white">
                  O acesso ao curso é vitalício?
                  <span className="material-icons-round transition group-open:rotate-180 text-gray-500 group-open:text-[#3B82F6]">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  Sim! Você paga uma única vez e tem acesso para sempre, incluindo todas as futuras atualizações.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-12 px-4 border-t border-gray-900 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons-round text-[#3B82F6]">rocket_launch</span>
              <span className="font-bold tracking-tight text-white"><span className="text-[#3B82F6]">CLIENTE TODO DIA</span></span>
            </div>
            <p className="text-gray-500 mb-6 text-xs leading-relaxed">
              O método prático para empreendedores locais que querem dominar o tráfego pago e vender todos os dias com lucro real.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#3B82F6] hover:text-white transition cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#3B82F6] hover:text-white transition cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#3B82F6] hover:text-white transition cursor-pointer">
                <span className="material-icons-round text-sm">email</span>
              </div>
            </div>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Treinamento</h4>
              <ul className="space-y-2 text-gray-500 text-xs">
                <li><a className="hover:text-[#3B82F6] transition" href="#metodo">Módulos</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#offer">Bônus</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#offer">Área de Membros</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#faq">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-gray-500 text-xs">
                <li><a className="hover:text-[#3B82F6] transition" href="#">Termos de Uso</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#">Privacidade</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#">Políticas de Cookies</a></li>
                <li><a className="hover:text-[#3B82F6] transition" href="#">Reembolso</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2024 Cliente Todo Dia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com tecnologia de ponta.</p>
        </div>
      </footer>
    </div>
  );
}
