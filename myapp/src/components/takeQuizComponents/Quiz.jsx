import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--background-color);
  text-align: center;
  // justify-content: center; //wont allow me to center any other way, but justify also shrinks content
  margin: var(--standard-margin);
  margin-top: 80px;
  display: grid;
  flex-direction: row;
  grid-template-rows: 12% 83% 5%;
`;

const Header = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--accent-color);
  display: grid;
  flex-direction: row;
  //fixed width until I can figure out issue with justify-content
  margin: var(--standard-margin);
`;

const Body = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--accent-color);
  display: grid;
  flex-direction: row;
  height: 500px; //fixed until later
  margin: var(--standard-margin);
  font-size: x-large;
  padding: 10px;
`;

const QuestionDiv = styled.div`
  margin-top: 5%;
  font-size: 2.1em;
`;

const Footer = styled.div`
  border-radius: var(--standard-border-radius);
  display: grid;
  flex-direction: row;
  margin: var(--standard-margin);
  // margin-top: 30px; //necessary until I fix the quiz body extending into the footer
`;

const FloatRight = styled.div`
  margin: var(--standard-margin);
  float: right;
  font-size: x-large;
  margin-top: 1%;
  margin-right: 2%;
`;

const FloatLeft = styled.div`
  margin: var(--standard-margin);
  float: left;
  font-size: x-large;
  margin-top: 1%;
  margin-left: 2%;
`;

const Quiz = ({ quiz, changeStatusForward, changeStatusBackward, allQuizzes, score, keepScore, report }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [counter, setCounter] = useState(0);

  const getQuiz = () => {
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        console.log('QUIZ FOUND HERE IS THE OBJ', allQuizzes[i]);
        setSelectedQuiz(allQuizzes[i]);
      }
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const previousQuestion = () => {
    setCounter(counter - 1);
  };

  const nextQuestion = () => {
    setCounter(counter + 1);
  };

  const questionRandomizer = () => {
    // accepts state that holds an array all
    //
  }

  const checkCorrectness = () => {
    // accept event.target.outer text and check
  }

  return (
    <Container>
    <Header>{selectedQuiz ? (
    <span>
    <FloatLeft>{selectedQuiz.quizName}</FloatLeft>
    <FloatRight>
    <Stack>
      <CircularProgress variant="determinate" value={(counter + 1) * 10} />
      {/* <CircularProgress variant="determinate" value={(selectedQuiz.quizQuestions.length / counter + 1) * 10 } /> */}
    </Stack>
    {/* <div>
    {score} / {selectedQuiz.quizQuestions.length}
    </div> */}
    </FloatRight>
    </span>
    ) : null}</Header>
    <Body>
     {selectedQuiz ? <QuestionDiv>{counter + 1}. {selectedQuiz.quizQuestions[counter].question}</QuestionDiv> : null}
     {selectedQuiz ?
     (<span>
      <Button style={{
        height: 50,
        margin: "var(--standard-margin)",
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[0]}</Button>
      <Button style={{
         height: 50,
         margin: "var(--standard-margin)",
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[1]}</Button>
      <Button style={{
        height: 50,
        margin: "var(--standard-margin)",
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained" onClick={keepScore}>{selectedQuiz.quizQuestions[counter].correctAnswer}</Button>
      <Button style={{
        height: 50,
        margin: "var(--standard-margin)",
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--background-color)",
        color: "black"
        }}
        variant="contained">{selectedQuiz.quizQuestions[counter].incorrectAnswers[2]}</Button>
      </span>)
      : null}
    </Body>
    <Footer>
      <span>
        <FloatLeft>
        {selectedQuiz ? ((counter !== 0) ?
            <Button style={{
              height: 40,
              borderRadius: "var(--standard-border-radius)",
              backgroundColor: "var(--blue)",
              color: "black"
              }}
              variant="contained" onClick={previousQuestion}>Back</Button> :
            null
          ) : null}
        </FloatLeft>
        <Button style={{
        height: 40,
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--blue)",
        color: "black"
        }}
        variant="contained" onClick={report}>Report</Button>
          <Button style={{
        height: 40,
        margin: "var(--standard-margin)",
        borderRadius: "var(--standard-border-radius)",
        backgroundColor: "var(--blue)",
        color: "black"
        }}
        variant="contained" onClick={changeStatusBackward}>Exit</Button>
        <FloatRight>
          {selectedQuiz ? ((counter !== selectedQuiz.quizQuestions.length - 1) ?
            <Button style={{
              height: 40,
              borderRadius: "var(--standard-border-radius)",
              backgroundColor: "var(--blue)",
              color: "black"
              }}
              variant="contained" onClick={nextQuestion}>Next</Button> :
              <Button style={{
                height: 40,
                borderRadius: "var(--standard-border-radius)",
                backgroundColor: "var(--blue)",
                color: "black"
                }}
                variant="contained" onClick={changeStatusForward}>Finish Quiz</Button>
          ) : null}
        </FloatRight>
      </span>
    </Footer>
    </Container>
  );
};
export default Quiz;
