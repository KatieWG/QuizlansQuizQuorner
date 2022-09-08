import React from 'react';
import styled from 'styled-components';

const QuizDiv = styled.div`
  background-color: var(--accent-color);
  height: 50px;
  font-size: var(--standard-text-size);
  width: 85%;
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  margin-bottom: var(--standard-margin);
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserGeneratedQuiz = (props) => {


  return (
    <QuizDiv>
      <span>{props.userQuiz.quizName}</span>
    </QuizDiv>
  )
}

export default UserGeneratedQuiz;