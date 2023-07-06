// Timer.jsx
import React, { useEffect, useState } from 'react';
import '../styles/timer.css';

const Timer = ({ questionTime, answerTime, onQuestionTimeUp, onAnswerTimeUp, start }) => {
  const [timeLeft, setTimeLeft] = useState(questionTime);
  const [key, setKey] = useState(0);
  const [isAnswerTime, setIsAnswerTime] = useState(false);

  useEffect(() => {
    if (!start) return;

    if (timeLeft <= 0) {
      if (isAnswerTime) {
        onAnswerTimeUp();
        setIsAnswerTime(false);
        setTimeLeft(questionTime);
      } else {
        onQuestionTimeUp();
        setIsAnswerTime(true);
        setTimeLeft(answerTime);
      }
      setKey(prevKey => prevKey + 1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [start, timeLeft, questionTime, answerTime, onQuestionTimeUp, onAnswerTimeUp, isAnswerTime]);

  return (
    <div className="timer-container">
      <div className="progress-bar">
        <div 
          key={key}
          className={`progress-bar-inner ${start ? "running" : ""}`} 
          style={{ 
            animationDuration: `${isAnswerTime ? answerTime : questionTime}s`, 
            animationName: isAnswerTime ? "progress-bar-fill-reverse" : "progress-bar-fill",
            backgroundColor: isAnswerTime ? "#32CD32" : "#ff69b4", // Changed from "#0080ff" to "LimeGreen" (#32CD32)
            boxShadow: `0 0 1vh ${isAnswerTime ? "#32CD32" : "#ff69b4"}`,
            borderRadius: '50px' // Added to give curved ends
          }} 
        />
      </div>
    </div>
  );  
};

export default Timer;