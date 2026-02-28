import { Zap, Play, Volume2, ShieldCheck, Award, CalendarCheck, Star, CreditCard, Lock, Shield, Package } from 'lucide-react';

export function Sales() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#13ec37]/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-[#13ec37] w-8 h-8" />
            <span className="font-bold text-lg tracking-tight uppercase">Cliente Todo Dia</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium opacity-80">
            <a className="hover:text-[#13ec37] transition-colors" href="#metodo">O Método</a>
            <a className="hover:text-[#13ec37] transition-colors" href="#resultados">Resultados</a>
            <a className="hover:text-[#13ec37] transition-colors" href="#faq">FAQ</a>
          </div>
          <button className="bg-[#13ec37]/20 text-[#13ec37] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Acesso Vitalício</button>
        </div>
      </nav>

      {/* Hero Section (Above the Fold) */}
      <header className="pt-12 pb-16 px-4 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#13ec37]/10 text-[#13ec37] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6">
          Método Testado e Validado por +2.400 Alunos
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          Pare de Depender da <span className="text-[#13ec37] italic">Sorte</span> Para Vender
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Implemente um sistema previsível de aquisição de clientes e escale seu faturamento com estratégia, mesmo que você esteja começando do zero.
        </p>

        {/* VSL Video Player */}
        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#13ec37]/50 to-emerald-500/30 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video shadow-2xl border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLhTF3UXzckEKS_A4fdzZG63Y6jpk-rMC0dsNCZ7QjLeupzJRNGiZAUeDWs3m5i2Y1ikp0P-881cc4W-AIRx29tXHJ-B7r2tgLcoN3Zl-LNG_dBaqYV9Iqg2fBOSaGlahArjuG21rajwdXMgtUXB0mbPXTkQgdjb6LwydZiKOaeUfFZDEL1dvH1DljeeQkpNCDBEGXaUIfVEVcJhSDHxBXkR-CmXKSCY4Xg2Qsc-h9ZFzAmnZ7zskWUUlx5pTiUTDGvl4updwSd85W')" }}>
              {/* Overlay with Thumbnail Text */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight max-w-xl">
                  SEU NEGÓCIO ESTÁ <span className="text-[#13ec37] underline decoration-[#13ec37]/50">INVISÍVEL?</span>
                </h3>
                <button className="group flex items-center justify-center size-20 md:size-24 rounded-full bg-[#13ec37] text-[#102213] shadow-[0_0_30px_rgba(19,236,55,0.4)] hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 md:w-12 md:h-12 fill-current" />
                </button>
                <p className="text-white/70 mt-8 text-sm md:text-base font-medium flex items-center gap-2">
                  <Volume2 className="text-[#13ec37] w-4 h-4" />
                  Clique para ligar o som e começar
                </p>
              </div>
            </div>
            {/* Video Controls Mockup */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#13ec37] h-full w-1/3"></div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/60 font-medium">
                <span>12:45 / 35:20</span>
                <span>HD 1080p</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-[#13ec37]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Package className="w-32 h-32 text-[#13ec37]" />
            </div>
            
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-white">
              <Package className="text-[#13ec37] w-8 h-8" />
              TUDO QUE ESTÁ INCLUÍDO:
            </h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
              {[
                "Sistema completo em 5 módulos",
                "15 modelos de anúncio prontos",
                "Checklist campanha passo a passo",
                "Calculadora de investimento",
                "Comunidade WhatsApp exclusiva",
                "Acesso vitalício",
                "Atualizações gratuitas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <ShieldCheck className="text-[#13ec37] w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-500 line-through text-lg mb-2">De R$ 497,00 por apenas</p>
              <div className="flex justify-center items-baseline gap-2 mb-8">
                <span className="text-4xl md:text-6xl font-black text-white">R$ 197</span>
                <span className="text-slate-400 font-bold">ou 12x R$ 19,70</span>
              </div>
              
              <a className="w-full bg-[#13ec37] hover:bg-[#13ec37]/90 text-[#102213] py-6 rounded-full text-xl md:text-2xl font-black tracking-tight shadow-[0_20px_40px_rgba(19,236,55,0.3)] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3" href="#">
                <Zap className="w-6 h-6 fill-current" />
                ATIVAR MEU SISTEMA AGORA
              </a>
              
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  Garantia de 7 dias
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Section */}
      <section className="bg-[#13ec37]/5 py-20 border-y border-[#13ec37]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">Quem aplica, colhe resultados reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-400 italic mb-6 leading-relaxed">
                "Antes do Cliente Todo Dia, eu ficava postando e rezando. Hoje tenho uma máquina que traz leads qualificados todos os dias sem eu precisar aparecer."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-800 overflow-hidden">
                  <img alt="Foto de um cliente satisfeito" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALESOUVWzK4sOfk8g7eonISjss8FInpZPt2Hnr5DBdiugVCwljusYK0otQKK1UT6DcHw_9Ee23eee1o7NPMqK5GQRM65-M8sJh9Htlgf2yhGAhKFjqAjJIxjaBn8qxgzNE9VM6q8PPODzqX93M_vWCwA4ARkzxnR_P6i1SI2XufbIKBq4R0rxcMMtkCKiPZp3dLfAqTGp0U1pQZN-uIo4o26SqAHrxtQmjMU_BOTJJRi2gFrelXwCGJmVmuteFdxFYON3CEnvhT9ZW" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Ricardo Mendes</p>
                  <p className="text-xs text-[#13ec37] font-medium">Estrategista Digital</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-400 italic mb-6 leading-relaxed">
                "O melhor investimento que fiz este ano. Saí de R$ 2k para R$ 15k por mês em apenas 45 dias aplicando o módulo de tráfego pago deles."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-800 overflow-hidden">
                  <img alt="Foto de uma cliente satisfeita" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeJ6kZGPs--SQ9IO4rTZYW1BbY-SVfiNEm9JLHjS67YZpQmKLfPDpizr673-FhFZqql_V2Qd5n3Unc3cf9Ppt2SIq_ATqC3EF1Nh9KVg6RF-3k4z3JfwpA-2JDn7EtKkjLKiESWOi22aGGtoaVkEWAXDYG8uG1LtYQOLvADMriYWjYNibNXRk96Ojuj6Qud5pI2JhdyjPbLdsqRa1QicTkqGf-qCLzgVS5tB1qWceGQeseDjMvwDatXpqWe7tLzOkEJlIn-IKaYE_x" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Mariana Silva</p>
                  <p className="text-xs text-[#13ec37] font-medium">Mentora de Negócios</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-400 italic mb-6 leading-relaxed">
                "O suporte é fenomenal e as planilhas de gestão mudaram meu jogo. Finalmente entendi onde eu estava jogando dinheiro fora no meu marketing."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-800 overflow-hidden">
                  <img alt="Foto de um cliente satisfeito" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWpZVBOv8HMHU8w83NQmAsYm4ddrWmTs4MSeRkP0lboAUq9nmAXmrAeIf6EHI-GTNa_fZnCVsW4tzOrXqbOxX0-6GivSb7GMCKwswIf91fePuur0FI6RIbLl6mSrzH7PoIDeZeA6cJZcDiWmrcYBL965cTOQxMvroTDqFz83JNWssbEUn4cTDSrwH6uCP3B84TSQQR_jkpLbDWkoDpKMks1BjlH5XZW4AwyVx3h2YU5JZyzt4UuWD_7UxrUbpydXktb6v1Coe5V-W" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Pedro Albuquerque</p>
                  <p className="text-xs text-[#13ec37] font-medium">Dono de Agência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight text-white">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {[
            {
              q: "Funciona pra qualquer cidade?",
              a: "Sim. O sistema funciona para qualquer cidade do Brasil — de 5.000 a 5 milhões de habitantes."
            },
            {
              q: "Preciso entender de tecnologia?",
              a: "Não. Se você sabe usar WhatsApp, consegue usar o sistema. Tudo é mostrado passo a passo com telas gravadas."
            },
            {
              q: "Quanto preciso investir em anúncios?",
              a: "A partir de R$ 6/dia (R$ 180/mês) já dá pra ter resultados. Dentro do sistema, você aprende exatamente quanto investir pro seu tipo de negócio."
            },
            {
              q: "Em quanto tempo vejo resultado?",
              a: "Muitos alunos recebem as primeiras mensagens no WhatsApp em 24–48 horas após ativar o primeiro anúncio."
            },
            {
              q: "Já tentei impulsionar no Instagram e não funcionou.",
              a: "Normal. O botão \"Impulsionar\" é a forma ERRADA de anunciar. No sistema, você aprende a fazer pelo caminho certo — que custa menos e traz mais resultado."
            },
            {
              q: "E se não funcionar pra mim?",
              a: "Você tem 7 dias de garantia. Se não gostar, devolvemos 100%."
            }
          ].map((item, i) => (
            <details key={i} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300 open:shadow-lg open:border-[#13ec37]/30">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white list-none">
                {item.q}
                <Zap className="w-5 h-5 text-[#13ec37] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Trust Seals & Secure Section */}
      <footer className="py-12 border-t border-[#13ec37]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <CreditCard className="w-10 h-10" />
            <Lock className="w-10 h-10" />
            <Shield className="w-10 h-10" />
            <Package className="w-10 h-10" />
          </div>
          <p className="text-xs text-slate-500">
            © 2024 Cliente Todo Dia. Todos os direitos reservados. <br/>
            Este site não faz parte do Facebook Inc. ou Google LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
