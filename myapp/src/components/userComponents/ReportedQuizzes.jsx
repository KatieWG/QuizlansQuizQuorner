import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {exampleQuizzes} from './../../../mockData/exampleQuizzes.js';
import RecentQuiz from './RecentQuiz.jsx';
import ReportedQuiz from './ReportedQuiz.jsx';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 250px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// nothing will show unless the currently logged in user (Nic's firebase)
// has quizzes, currently using mockdata.

const ReportedQuizzes = (props) => {

  // const reportedQuizzesMock = () => {
  //   return exampleQuizzes.filter(exampleQuiz => {
  //     exampleQuiz.reported === true;
  //   });
  // };

  useEffect(()=> {
    getReportedQuizzes()

  }, [])

  const [reportedQuizzesList, setReportedQuizzesList] = useState([]);

  const deleteQuiz = (quizId) => {

    //const [isDeleted, setIsDeleted] = useState(false);

    axios.post(`http://52.90.8.77:4444/removeQuiz`, {quizId: quizId})
    .then((results) => {
    // document.getElementByID(quizId).style.visiblity='hidden'
      console.log('success')
      getReportedQuizzes()

    })
    .catch((error) => {
      console.log(error);
    })
  }


  const getReportedQuizzes = () => {
    const createdBy = null;
    const category = null;
    const isReported = true;

    axios.get(`http://52.90.8.77:4444/quizzes/${createdBy}&${category}&${isReported}`)
    //console.log()
    .then((results) => {
      setReportedQuizzesList(results.data);
      console.log('ReportedQuizzes👀👀👀👀:', results);
      console.log('reportedQuizzesList', reportedQuizzesList);
    })
    .catch((error) => {
      console.log(error);
      //console.log('Caught👀👀👀👀: ', error);
    });
  };
  //console.log(`🔥🔥🔥🔥🔥🔥`);




  console.log('reportedQuizzesList', reportedQuizzesList);

  return (
    <Container>
      Reported Quizzes

        {reportedQuizzesList.map((eachReportedQuiz) => (
          <ReportedQuiz eachReportedQuiz={eachReportedQuiz} deleteQuiz={deleteQuiz}/>
        ))}

    </Container>
  );
};

export default ReportedQuizzes;