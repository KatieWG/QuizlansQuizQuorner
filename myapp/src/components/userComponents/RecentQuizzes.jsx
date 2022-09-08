import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import RecentQuiz from './RecentQuiz.jsx';
import QuizFeedItem from '../homeComponents/homeSubComponents/QuizFeedItem.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 500px;
  margin: var(--standard-margin);
  overflow: scroll;
  box-shadow: var(--standard-shadow);
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 30px

`;

const Title = styled.h1`
  padding: 15px
`

// nothing will show unless the currently logged in user (Nic's firebase)
// has quizzes, currently using mockdata.

const RecentQuizzes = (props) => {

  const [recentQuizzes, setRecentQuizzes] = useState(exampleQuizzes);
  const [showNumber, setShowNumber] = useState(6);


  const getRecentQuizzes = () => {
    console.log('adsfasdfgadsfasdfsd', props.userName)
    const username = 'superuser';
    const categoryName = null;
    const isReported = null;
    axios.get(`http://52.90.8.77:4444/quizzes/${username}&${categoryName}&${isReported}`)
      .then((response) => {
        console.log('USER QUIZZES!!! YAYAYAYAYYA:', response.data);
        setRecentQuizzes(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }







  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  useEffect(()=> {
   getRecentQuizzes()
   console.log('user qquiz history:', recentQuizzes)
  }, [])

  //


  return (
    <Container>
      <Title>Recent Quizzes</Title>
        {/* {props.quizHistory.map((quiz, key) => (
          <RecentQuiz quiz={quiz} key={key}/>
        ))} */}
        {recentQuizzes?.length > 0 &&
        recentQuizzes.map((listItem, index) => {
          return (
            <RecentQuiz
              quizName={listItem.quizName}
              category={listItem.category}
              timesTaken={listItem.timesTaken}
              description={listItem.quizDescription}
              banner={listItem.quizBanner}
              upvotes={listItem.quizUpvotes}
              downvotes={listItem.quizDownvotes}
              score={listItem.userScores}
              key={index}
            />
          );
        })}
    </Container>
  );
};
// props.currentUser.email

export default RecentQuizzes;