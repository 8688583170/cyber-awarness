import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const quizQuestions = [
  {
    question: "What is a strong password?",
    options: [
      "123456",
      "password",
      "Mix of letters, numbers, and special characters",
      "Your birthday"
    ],
    correct: 2
  },
  {
    question: "What should you do if you receive a suspicious email?",
    options: [
      "Click all links to check them",
      "Delete it and report as spam",
      "Share it with friends",
      "Reply with your information"
    ],
    correct: 1
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (event) => {
    setAnswers({
      ...answers,
      [currentQuestion]: parseInt(event.target.value)
    });
  };

  const handleSubmit = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach(question => {
      if (answers[question] === quizQuestions[question].correct) {
        score++;
      }
    });
    return score;
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity Quiz
      </Typography>
      {!showResults ? (
        <Card>
          <CardContent>
            <Typography variant="h6">
              {quizQuestions[currentQuestion].question}
            </Typography>
            <RadioGroup onChange={handleAnswer}>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ marginTop: '20px' }}
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h6">
              Quiz Complete! Your score: {calculateScore()} out of {quizQuestions.length}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Quiz; 