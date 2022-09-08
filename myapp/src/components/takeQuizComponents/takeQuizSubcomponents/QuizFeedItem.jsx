import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

let Container = styled.div`
  color: black;
  background-color: var(--accent-color);
  border-radius: var(--standard-border-radius);
  margin: var(--standard-margin);
  box-shadow: 0 2px 5px 0 black;
  height: 90px;
  margin-left: 20%;
  margin-right: 20%;
  &:hover {
    box-shadow: 0 5px 7px 0 black;
    cursor: pointer
  }
  &:active {
  background-color: var(--background-color);
  }
  &:target {
  background-color: green;
  }
`;

const StyledBanner = styled.img`
  border-radius: var(--standard-border-radius);
  box-shadow: 0 2px 5px 0 black;
  height: 90px;
  margin-right: var(--standard-margin);
  float: left;
  width: 110px;
`;

const StyledText = styled.div`
  font-size: 1.9em;
  margin-top: 15px;
`;

const StyledText2 = styled.div`
  font-size: 1em;

`;


const QuizFeedItem = ({ quiz, changeStatusForward, chooseQuiz, id }) => {
  const [currentlySelected, setCurrentlySelected] = useState(false)

  return (
    <Container onClick={(e) => {
      chooseQuiz(e.target.outerText)
      console.log(e)
      //e.target.parentElement.onkeypress={(e) => e.target.style.backgroundColor = 'salmon'}

      setCurrentlySelected(true);
        //e.target.parentElement.style.backgroundColor = 'blue';

      }}>
      <StyledBanner src={`${quiz.quizBanner}`}></StyledBanner>
      <StyledText>{quiz.quizName}</StyledText>
      <StyledText2>{quiz.quizDescription}</StyledText2>
      {/* {console.log('!!!!!quiz.quizBanner', quiz.quizBanner)} */}
    </Container>
  );
};

export default QuizFeedItem;
