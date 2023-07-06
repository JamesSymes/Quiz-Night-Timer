// StartScreen.jsx
import React from 'react';

const StartScreen = ({ onStartQuiz }) => {
  return (
    <div className="start-screen">
      <h2>Welcome to Quiz Night!</h2>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartScreen;