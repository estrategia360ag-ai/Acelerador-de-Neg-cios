import { ArrowLeft, ArrowRight, Store, UtensilsCrossed, Scissors, Stethoscope, Briefcase, Shapes } from 'lucide-react';
import { Question, QuestionOption } from '../../data/quiz';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface QuizQuestionProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onNext: (option: QuestionOption) => void;
  onBack: () => void;
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'storefront': return <Store className="w-5 h-5" />;
    case 'restaurant': return <UtensilsCrossed className="w-5 h-5" />;
    case 'spa': return <Scissors className="w-5 h-5" />;
    case 'medical_services': return <Stethoscope className="w-5 h-5" />;
    case 'design_services': return <Briefcase className="w-5 h-5" />;
    case 'category': return <Shapes className="w-5 h-5" />;
    default: return <div className="w-5 h-5 bg-slate-200 rounded-sm" />;
  }
};

export function QuizQuestion({ question, currentStep, totalSteps, onNext, onBack }: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<QuestionOption | null>(null);
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (selectedOption) {
      onNext(selectedOption);
      setSelectedOption(null); // Reset for next question
    }
  };

  const isImageGrid = question.options.some(opt => opt.image);

  return (
    <div className="flex-1 flex flex-col w-full max-w-md mx-auto bg-[#f6f8f6] min-h-screen relative shadow-xl overflow-hidden">
      {/* Top App Bar */}
      <header className="flex items-center justify-between p-4 pb-2 bg-[#f6f8f6] sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-900"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Ferramenta Diagnóstica
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 pb-6 w-full max-w-md mx-auto overflow-y-auto">
        {/* Progress Section */}
        <div className="flex flex-col gap-3 py-4">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-slate-600 text-sm font-medium leading-normal uppercase tracking-wider">
              Questão {currentStep} de {totalSteps}
            </p>
            <span className="text-[#13ec37] font-bold text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
            <div 
              className="h-full rounded-full bg-[#13ec37] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(19,236,55,0.4)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Header */}
        <div className="py-4">
          <h1 className="text-slate-900 text-[28px] font-extrabold leading-tight mb-3">
            {question.title}
          </h1>
          {question.description && (
            <p className="text-slate-500 text-base font-normal leading-relaxed">
              {question.description}
            </p>
          )}
        </div>

        {/* Options */}
        {isImageGrid ? (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedOption(option)}
                className={cn(
                  "group relative flex flex-col justify-end p-4 h-40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#13ec37] focus:ring-offset-2",
                  selectedOption === option ? "ring-2 ring-[#13ec37] ring-offset-2" : ""
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${option.image}")` }}
                ></div>
                <div className="relative z-20 flex flex-col gap-2 items-start">
                  <div className={cn(
                    "p-2 rounded-lg backdrop-blur-sm text-slate-900 transition-colors",
                    selectedOption === option ? "bg-[#13ec37]/90" : "bg-white/90 group-hover:bg-[#13ec37]/90"
                  )}>
                    {getIcon(option.icon)}
                  </div>
                  <span className="text-white text-base font-bold leading-tight">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <form className="flex flex-col gap-4">
            {question.options.map((option, idx) => (
              <label 
                key={idx}
                className={cn(
                  "group relative flex items-center gap-4 p-5 rounded-xl border-2 bg-white shadow-sm hover:border-[#13ec37]/50 hover:shadow-md cursor-pointer transition-all duration-200",
                  selectedOption === option ? "border-[#13ec37] bg-[#13ec37]/5 shadow-lg" : "border-transparent"
                )}
              >
                <div className="relative flex items-center justify-center shrink-0">
                  <input 
                    type="radio" 
                    name="question_option" 
                    className="peer h-6 w-6 appearance-none rounded-full border-2 border-gray-300 checked:border-[#13ec37] focus:ring-0 focus:ring-offset-0 transition-colors"
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-[#13ec37] scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-lg group-hover:text-[#0fb82a] transition-colors">
                    {option.label}
                  </span>
                </div>
              </label>
            ))}
          </form>
        )}
      </main>

      {/* Bottom Action Bar (Sticky) */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-[#f6f8f6]/90 backdrop-blur-md border-t border-slate-200 z-50 w-full max-w-md mx-auto">
        <button 
          onClick={handleNext}
          disabled={!selectedOption}
          className="w-full bg-[#13ec37] text-slate-900 text-base font-bold py-4 px-6 rounded-full hover:bg-green-400 active:bg-green-500 transition-colors shadow-lg shadow-[#13ec37]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
