import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import UserGeneratedQuiz from './UserGeneratedQuiz.jsx';
import FriendsList from './FriendsList.jsx';
import ReportedQuizzes from './ReportedQuizzes.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 400px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
  vh: 400 px;
  overflow: scroll;
  box-shadow: var(--standard-shadow);
`;

const UserQuizzes = (props) => {

  const [userQuizzes, setUserQuizzes] = useState(exampleQuizzes);
  const [showQuizzes, setShowQuizzes] = useState(4);
  const [userQuizList, setUserQuizList] = useState([]);

  const getUserQuizzes = () => {
    console.log('adsfasdfgadsfasdfsd', props.userName)
    const username = 'superuser';
    const categoryName = null;
    const isReported = null;
    axios.get(`http://52.90.8.77:4444/quizzes/${username}&${categoryName}&${isReported}`)
      .then((response) => {
        console.log('USER QUIZZES!!! YAYAYAYAYYA:', response.data);
        setUserQuizList(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //console.log('👅👅👅👅👅', userQuizzes);
 //console.log('💄💄💄💄💄👁👁', props.currentUser);
  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  useEffect(()=> {
    getUserQuizzes()
  }, [])


  return (
    <Container>
      User Quizzes
      {userQuizList.map((userQuiz, i) => {
        return <UserGeneratedQuiz userQuiz={userQuiz} userQuizList={userQuizList} key={i}/>
        // <ReportedQuizzes/>
      })}
    </Container>
  );
};
//userQuiz.createBy

export default UserQuizzes;