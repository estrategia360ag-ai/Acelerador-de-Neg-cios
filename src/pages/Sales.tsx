import { Zap, Play, Volume2, ShieldCheck, Award, CalendarCheck, Star, CreditCard, Lock, Shield, Package } from 'lucide-react';

export function Sales() {
  return (
    <div className="min-h-screen bg-[#f6f8f6] text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#f6f8f6]/80 backdrop-blur-md border-b border-[#13ec37]/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-[#13ec37] w-8 h-8" />
            <span className="font-bold text-lg tracking-tight uppercase">Sistema Cliente Todo Dia</span>
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
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
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
          <a className="w-full max-w-md bg-[#13ec37] hover:bg-[#13ec37]/90 text-[#102213] py-6 rounded-full text-xl md:text-2xl font-black tracking-tight shadow-[0_20px_40px_rgba(19,236,55,0.3)] hover:translate-y-[-2px] transition-all flex flex-col items-center" href="#">
            <span>QUERO CLIENTES TODO DIA</span>
            <span className="text-sm font-bold opacity-80 mt-1 uppercase">12x de R$ 19,70</span>
          </a>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="text-[#13ec37] w-5 h-5" />
              Compra 100% Segura
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="text-[#13ec37] w-5 h-5" />
              7 Dias de Garantia
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarCheck className="text-[#13ec37] w-5 h-5" />
              Acesso Imediato
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Section */}
      <section className="bg-[#13ec37]/5 py-20 border-y border-[#13ec37]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Quem aplica, colhe resultados reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "Antes do Sistema Cliente Todo Dia, eu ficava postando e rezando. Hoje tenho uma máquina que traz leads qualificados todos os dias sem eu precisar aparecer."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Foto de um cliente satisfeito" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALESOUVWzK4sOfk8g7eonISjss8FInpZPt2Hnr5DBdiugVCwljusYK0otQKK1UT6DcHw_9Ee23eee1o7NPMqK5GQRM65-M8sJh9Htlgf2yhGAhKFjqAjJIxjaBn8qxgzNE9VM6q8PPODzqX93M_vWCwA4ARkzxnR_P6i1SI2XufbIKBq4R0rxcMMtkCKiPZp3dLfAqTGp0U1pQZN-uIo4o26SqAHrxtQmjMU_BOTJJRi2gFrelXwCGJmVmuteFdxFYON3CEnvhT9ZW" />
                </div>
                <div>
                  <p className="font-bold text-sm">Ricardo Mendes</p>
                  <p className="text-xs text-[#13ec37] font-medium">Estrategista Digital</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "O melhor investimento que fiz este ano. Saí de R$ 2k para R$ 15k por mês em apenas 45 dias aplicando o módulo de tráfego pago deles."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Foto de uma cliente satisfeita" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeJ6kZGPs--SQ9IO4rTZYW1BbY-SVfiNEm9JLHjS67YZpQmKLfPDpizr673-FhFZqql_V2Qd5n3Unc3cf9Ppt2SIq_ATqC3EF1Nh9KVg6RF-3k4z3JfwpA-2JDn7EtKkjLKiESWOi22aGGtoaVkEWAXDYG8uG1LtYQOLvADMriYWjYNibNXRk96Ojuj6Qud5pI2JhdyjPbLdsqRa1QicTkqGf-qCLzgVS5tB1qWceGQeseDjMvwDatXpqWe7tLzOkEJlIn-IKaYE_x" />
                </div>
                <div>
                  <p className="font-bold text-sm">Mariana Silva</p>
                  <p className="text-xs text-[#13ec37] font-medium">Mentora de Negócios</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl border border-[#13ec37]/10 shadow-sm">
              <div className="flex gap-1 text-[#13ec37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "O suporte é fenomenal e as planilhas de gestão mudaram meu jogo. Finalmente entendi onde eu estava jogando dinheiro fora no meu marketing."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Foto de um cliente satisfeito" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWpZVBOv8HMHU8w83NQmAsYm4ddrWmTs4MSeRkP0lboAUq9nmAXmrAeIf6EHI-GTNa_fZnCVsW4tzOrXqbOxX0-6GivSb7GMCKwswIf91fePuur0FI6RIbLl6mSrzH7PoIDeZeA6cJZcDiWmrcYBL965cTOQxMvroTDqFz83JNWssbEUn4cTDSrwH6uCP3B84TSQQR_jkpLbDWkoDpKMks1BjlH5XZW4AwyVx3h2YU5JZyzt4UuWD_7UxrUbpydXktb6v1Coe5V-W" />
                </div>
                <div>
                  <p className="font-bold text-sm">Pedro Albuquerque</p>
                  <p className="text-xs text-[#13ec37] font-medium">Dono de Agência</p>
                </div>
              </div>
            </div>
          </div>
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
            © 2024 Sistema Cliente Todo Dia. Todos os direitos reservados. <br/>
            Este site não faz parte do Facebook Inc. ou Google LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
