import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import QuizQuestion from './takeQuizSubcomponents/QuizQuestion.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--background-color);
  // text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: row;
`;

const QuizBody = () => {
  const [quizQuestion, setQuizQuestion] = useState(exampleQuizzes[0]);

  const getQuizQuestion = () => {
    axios
      .get('/FillMeIn')
      .then((response) => {
        setQuizQuestion(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getQuizQuestion()
  //}, [])

  //TODO

  //map over quiz data
  //render data in respective places (notes in quiz question component)
  //set up a carousel that replaces current question with next question when next is clicked
  //add previous button
  //add exit button?

  return (
    <Container>
      <QuizQuestion />
    </Container>
  );
};

export default QuizBody;
