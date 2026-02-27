import { ArrowLeft, ArrowRight, CheckCircle, PersonStanding, Mail, MessageCircle, Building2, MapPin, Lock } from 'lucide-react';
import { useState } from 'react';

interface QuizLeadCaptureProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export function QuizLeadCapture({ onSubmit, onBack }: QuizLeadCaptureProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-md mx-auto bg-[#f6f8f6] min-h-screen relative shadow-xl overflow-hidden">
      {/* Header / Navigation */}
      <header className="flex items-center justify-between p-4 pb-2 bg-[#f6f8f6] sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-900"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Resultados Prontos
        </h2>
      </header>

      {/* Progress Indicator */}
      <div className="px-4 py-2 w-full">
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#13ec37] w-[95%] rounded-full"></div>
        </div>
        <p className="text-xs text-slate-500 text-right mt-1 font-medium">95% Concluído</p>
      </div>

      {/* Content Body */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* Icon/Hero Area */}
        <div className="flex justify-center pt-6 pb-2">
          <div className="size-20 bg-[#13ec37]/20 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="w-10 h-10 text-[#13ec37]" />
          </div>
        </div>

        {/* Headings */}
        <h2 className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight px-6 text-center pb-2 pt-2">
          Diagnóstico concluído!
        </h2>
        <p className="text-slate-600 text-base font-normal leading-relaxed pb-6 pt-1 px-6 text-center">
          Informe seus dados para desbloquear seu <span className="text-[#0fb82a] font-bold">Score de Visibilidade Local</span> e receber o relatório completo.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-2">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-900 text-sm font-bold leading-normal ml-1" htmlFor="name">Nome Completo</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <PersonStanding className="w-5 h-5" />
              </span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-[#13ec37] border-0 bg-white shadow-sm h-14 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                id="name" 
                name="name"
                placeholder="Seu nome" 
                required 
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-900 text-sm font-bold leading-normal ml-1" htmlFor="email">E-mail Profissional</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-5 h-5" />
              </span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-[#13ec37] border-0 bg-white shadow-sm h-14 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                id="email" 
                name="email"
                placeholder="nome@empresa.com.br" 
                required 
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* WhatsApp Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-900 text-sm font-bold leading-normal ml-1" htmlFor="whatsapp">WhatsApp</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <MessageCircle className="w-5 h-5" />
              </span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-[#13ec37] border-0 bg-white shadow-sm h-14 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                id="whatsapp" 
                name="whatsapp"
                placeholder="(00) 00000-0000" 
                required
                type="tel"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Company Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-900 text-sm font-bold leading-normal ml-1" htmlFor="company">Nome da Empresa</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Building2 className="w-5 h-5" />
              </span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-[#13ec37] border-0 bg-white shadow-sm h-14 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                id="company" 
                name="company"
                placeholder="Sua empresa" 
                required
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* City Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-900 text-sm font-bold leading-normal ml-1" htmlFor="city">Cidade</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <MapPin className="w-5 h-5" />
              </span>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-[#13ec37] border-0 bg-white shadow-sm h-14 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                id="city" 
                name="city"
                placeholder="São Paulo, SP" 
                required
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="h-10"></div>
      </main>

      {/* Sticky Footer CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#f6f8f6]/90 backdrop-blur-md border-t border-slate-200 z-20">
        <button 
          onClick={handleSubmit}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[#13ec37] text-slate-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0fb82a] transition-colors shadow-lg shadow-[#13ec37]/20"
        >
          <span className="truncate">VER MEU RESULTADO AGORA</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <div className="flex items-center justify-center gap-2 mt-3 text-slate-500">
          <Lock className="w-3 h-3" />
          <p className="text-[11px] font-medium text-center">Seus dados estão seguros e não faremos spam.</p>
        </div>
      </div>
    </div>
  );
}
