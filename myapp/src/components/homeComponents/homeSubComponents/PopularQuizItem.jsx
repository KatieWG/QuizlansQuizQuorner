import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin: var(--standard-margin);
  font-size: var(--standard-text-size);
  font-weight: var(--standard-text-weight);
`;

const PopularQuizItem = ({ quizName, selectedQuiz, setSelectedQuiz }) => {
  return (
    <Container>
      {quizName}
      {/*eventually link to individual quiz page*/}
    </Container>
  );
};

export default PopularQuizItem;
