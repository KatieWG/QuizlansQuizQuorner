import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopularQuizItem from './homeSubComponents/PopularQuizItem.jsx';
import axios from 'axios';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
//import sample data

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 500px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const ListTitle = styled.div`
  margin: 10px;
`;

const PopularQuizzes = ({ selectedQuiz, setSelectedQuiz }) => {
  const [popularQuizList, setPopularQuizList] = useState(exampleQuizzes);

  const getPopularQuizzes = () => {
    axios
      .get('/FillMeIn')
      .then((response) => {
        setPopularQuizList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getPopularQuizzes()
  //}, [])

  return (
    <Container>
      <ListTitle>Popular Quizzes</ListTitle>
      {popularQuizList.length > 0 &&
        popularQuizList
          .sort((a, b) => {
            return b.quizUpvotes - a.quizUpvotes;
          })
          .map((listItem, index) => (
            <PopularQuizItem quizName={listItem.quizName} key={index} />
          ))}
    </Container>
  );
};

export default PopularQuizzes;
