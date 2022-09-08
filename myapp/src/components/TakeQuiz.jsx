import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizBody from './takeQuizComponents/QuizBody.jsx';
import Start from './takeQuizComponents/Start.jsx';
import Quiz from './takeQuizComponents/Quiz.jsx';
import Results from './takeQuizComponents/Results.jsx';
import axios from 'axios';
import {exampleQuizzes} from './../../mockData/exampleQuizzes.js'

const BaseLayout = styled.div`
  margin: var(--standard-margin);
  text-align: center;
  height: 600px;
`;

const TakeQuiz = (props) => {
  const [pageStatus, setPageStatus] = useState('start'); //start, quiz, results
  const [quiz, setQuiz] = useState(null); //will change to quiz id (ex: 623b4f3193deed525907e16b) when a user selects a quiz to play
  const [allQuizzes, setAllQuizzes] = useState(exampleQuizzes);
  const [quizSelected, setQuizSelected] = useState(false);
  const [score, setScore] = useState(0);

  const getQuizzes = () => {
    axios.get('http://52.90.8.77:4444/getAllQuizzes')
    .then((response) => {
      console.log('Got all quizzes from database -> ', response.data);
      setAllQuizzes(response.data)
    })
    .then(() => {
        console.log("allQuizzes ->", allQuizzes)
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const report = () => {
    // axios
    //   .post('http://52.90.8.77:4444/reportQuiz')
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    //REPORT THIS QUIZ BY REMOVING IT FROM LIST AND ADDING IT TO ADMIN REPORTED LIST
    window.alert(`You have reported ${quiz}`);
    //find that quiz in the allQuizzes list and remove it
    for (let i = 0; i < allQuizzes.length; i++) {
      if (allQuizzes[i].quizName === quiz) {
        let newArray = allQuizzes;
        newArray.splice(i, 1);
        setAllQuizzes(newArray);
      }
    }
    //redirect user to start page to select a quiz to play
    setPageStatus('start')
    setQuizSelected(null);
  };

  useEffect(() => {
    getQuizzes()

    if (props.selectedQuiz) {
      setQuiz(props.selectedQuiz)
      chosenQuiz();
    }
  }, [])

  const changeStatusForward = () => {
    if (pageStatus === 'start') {
      setPageStatus('quiz');
    } else if (pageStatus === 'quiz') {
      setPageStatus('results');
    } else if (pageStatus === 'results') {
      setPageStatus('start') //display options to start new quiz
    }
  }

  const changeStatusBackward = () => {
    if (pageStatus === 'start') {
      setQuizSelected(null);
    } else if (pageStatus === 'quiz') {
      setPageStatus('start');
      setQuizSelected(null);
    } else if (pageStatus === 'results') {
      setPageStatus('quiz') //display options to start new quiz
    }
  }

  const chooseQuiz = (quizName) => { //change to quizId later
    // setQuiz(quizId);
    setQuiz(quizName);
    // setColor()
  }

  const chosenQuiz = () => {
    setQuizSelected(!quizSelected);
  }

  const keepScore = () => {
    setScore(score + 1)
  }

  const imFeelingLucky = () => {
    // setQuiz to random quiz from allQuizzes
    // invoke chosenQuiz
    const min = 0;
    const max = allQuizzes.length - 1;
    const randomQuiz = allQuizzes[Math.floor(Math.random() * (max - min) + min)];
    const randomQuizName = randomQuiz.quizName;
    setQuiz(randomQuizName);
    chosenQuiz();
  }
  //TODO
  //CONDITIONAL RENDERING (either Header, StartPage and Footer or QuizBody)
  //if isPlaying === false (defualt)
    //page should display *quizname* stats and start button
  //button click should setIsPlaying to true
    //and display modal/page with questions in order

  return (
  <BaseLayout>
  {pageStatus === 'start' ? <Start allQuizzes={allQuizzes} quiz={quiz} quizSelected={quizSelected} changeStatusForward={changeStatusForward} changeStatusBackward={changeStatusBackward} chooseQuiz={chooseQuiz} chosenQuiz={chosenQuiz} imFeelingLucky={imFeelingLucky}/> :
  pageStatus === 'quiz' ? <Quiz quiz={quiz} allQuizzes={allQuizzes} changeStatusForward={changeStatusForward} changeStatusBackward={changeStatusBackward} score={score} keepScore={keepScore} report={report}/> :
  pageStatus === 'results' ? <Results changeStatusForward={changeStatusForward} changeStatusBackward={changeStatusBackward} score={score} quiz={quiz} allQuizzes={allQuizzes} report={report} /> : null }

  </BaseLayout>);
};

export default TakeQuiz;

/*

Header
QuizBody
Footer

*/