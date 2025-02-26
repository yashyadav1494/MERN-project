// Quiz.js
import React, { useState } from 'react';
import './Quiz.css';

const quizData = [
  {
    question: "What is organic farming?",
    options: ["Farming without pesticides", "Farming with GMOs", "Farming with synthetic fertilizers", "Farming with industrial machines"],
    correctAnswer: "Farming without pesticides",
  },
  {
    question: "Which of these is an organic product?",
    options: ["Apple", "Potato chips", "Soda", "Packaged cake"],
    correctAnswer: "Apple",
  },
  {
    question: "True or False: Organic farming helps preserve biodiversity.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "Which pesticide is used in organic farming?",
    options: ["None", "Glyphosate", "Chlorpyrifos", "Pyrethrins"],
    correctAnswer: "Pyrethrins",
  },
  {
    question: "What is one benefit of eating organic food?",
    options: ["Less pesticides", "More calories", "Less expensive", "More sugar"],
    correctAnswer: "Less pesticides",
  },
  {
    question: "Which of these is a common organic farming method?",
    options: ["Crop rotation", "Mono-cropping", "Hydroponics", "Hydraulic fracturing"],
    correctAnswer: "Crop rotation",
  },
  {
    question: "Which of the following is not a benefit of organic farming?",
    options: ["Improved soil health", "Reduced pollution", "Faster growth", "Better water conservation"],
    correctAnswer: "Faster growth",
  },
  {
    question: "True or False: Organic food is always grown without the use of any chemicals.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "Which of these is an example of a non-organic farming technique?",
    options: ["Hydroponics", "Monoculture", "Agroforestry", "Companion planting"],
    correctAnswer: "Monoculture",
  },
  {
    question: "True or False: Organic farming avoids the use of genetically modified organisms (GMOs).",
    options: ["True", "False"],
    correctAnswer: "True",
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-container">
        <h1>Quizzes</h1>
      {!showResults ? (
        <div className="question-container">
          <h2>{quizData[currentQuestionIndex].question}</h2>

          <div className="options">
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={`option-btn ${selectedAnswer === option ? "selected" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>

          <button onClick={handleNextQuestion} className="next-btn">
            {currentQuestionIndex === quizData.length - 1 ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      ) : (
        <div className="results-container">
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
