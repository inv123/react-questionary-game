import './style/style.css';
import { Header } from './components/Header';
import { Questions } from './components/Questions';
import { QUESTIONS } from './questions.js';
import { useState } from 'react';
 
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const correctAnswer = [...QUESTIONS][currentQuestionIndex].answers[0];
  const shuffledQuestions = [...QUESTIONS][currentQuestionIndex].answers.sort(() => Math.random() - 0.5)

 
  
  return (
    <div className="app" >
      <Header />
      <Questions shuffledQuestions={shuffledQuestions} question={QUESTIONS[currentQuestionIndex]} correctAnswer={correctAnswer}/>
    </div>
  );
}

export default App;
