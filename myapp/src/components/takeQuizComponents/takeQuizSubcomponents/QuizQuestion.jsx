import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  width: 75%;
  text-align: center;
  justify-content: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: row;
`;

const QuizQuestion = () => {
  //TODO

  //render question
  //render 4 choices in boxes (with css grid)
  //render next and previous buttons
  //on click of the correct question, increment score by one

  return (
    <Container>
      QuizQuestion
    </Container>
  );
};

export default QuizQuestion;