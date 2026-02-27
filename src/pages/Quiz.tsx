import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizLanding } from '../components/quiz/QuizLanding';
import { QuizQuestion } from '../components/quiz/QuizQuestion';
import { QuizLeadCapture } from '../components/quiz/QuizLeadCapture';
import { QuizResult } from '../components/quiz/QuizResult';
import { quizQuestions, QuestionOption } from '../data/quiz';

type QuizState = 'landing' | 'questions' | 'lead_capture' | 'result';

export function Quiz() {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, QuestionOption>>({});
  const [leadData, setLeadData] = useState<any>(null);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setQuizState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleNextQuestion = (option: QuestionOption) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizState('lead_capture');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setQuizState('landing');
    }
  };

  const handleLeadSubmit = (data: any) => {
    setLeadData(data);
    // Calculate score
    let calculatedScore = 0;
    Object.values(answers).forEach(answer => {
      calculatedScore += answer.points;
    });
    setScore(calculatedScore);
    
    console.log('Quiz completed!', { answers, score: calculatedScore, leadData: data });
    setQuizState('result');
  };

  const handleBackLeadCapture = () => {
    setQuizState('questions');
    setCurrentQuestionIndex(quizQuestions.length - 1);
  };

  const handleGoToSales = () => {
    navigate('/vendas');
  };

  // Calculate total possible score (assuming max points per question is 4 based on data)
  // Or just sum max points of each question
  const totalScore = quizQuestions.reduce((acc, q) => {
    const maxPoints = Math.max(...q.options.map(o => o.points));
    return acc + maxPoints;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-sans antialiased">
      {quizState === 'landing' && (
        <QuizLanding onStart={handleStart} />
      )}
      
      {quizState === 'questions' && (
        <QuizQuestion 
          question={quizQuestions[currentQuestionIndex]}
          currentStep={currentQuestionIndex + 1}
          totalSteps={quizQuestions.length}
          onNext={handleNextQuestion}
          onBack={handleBackQuestion}
        />
      )}

      {quizState === 'lead_capture' && (
        <QuizLeadCapture 
          onSubmit={handleLeadSubmit}
          onBack={handleBackLeadCapture}
        />
      )}

      {quizState === 'result' && (
        <QuizResult 
          score={score}
          totalScore={totalScore}
          onCtaClick={handleGoToSales}
        />
      )}
    </div>
  );
}
