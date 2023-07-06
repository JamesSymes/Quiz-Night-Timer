// App.jsx
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import LoadingScreen from './components/LoadingScreen';
import Logo from './components/Logo';
import './styles/app.css';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    // Simulating an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setQuizStarted(true);
  };

  return (
    <div className="app">
      <div className="overlay"></div> {/* Overlay div */}
      <div className="app-content"> {/* New div here */}
        <Logo />  
        {!quizStarted && !isLoading && <StartScreen onStartQuiz={handleStartQuiz} />}
        {isLoading && <LoadingScreen />}
        {quizStarted && !isLoading && <QuizScreen />}
      </div>
    </div>
  );
};

export default App;