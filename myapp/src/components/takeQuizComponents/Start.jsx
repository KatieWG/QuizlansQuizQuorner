import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';
import axios from 'axios';
import QuizFeedItem from './takeQuizSubcomponents/QuizFeedItem.jsx';
import { Button } from '@mui/material';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  // background-color: var(--accent-color);
  text-align: center;
  // justify-content: center; //wont allow me to center any other way, but justify also shrinks content
  margin: var(--standard-margin);
  display: grid;
  flex-direction: row;
  grid-template-rows: 20% 70% 10%;
  margin-left: 5%;
  margin-right: 5%;
`;

const Header = styled.div`
  border-radius: var(--standard-border-radius);
  // background-color: var(--blue);
  display: grid;
  flex-direction: row;
  margin: var(--standard-margin);
  // box-shadow: inset 4px 2px 10px rgba(0, 0, 0, 0.4);
`;

const Body = styled.div`
  border-radius: var(--standard-border-radius);
  // background-color: var(--blue);
  display: grid;
  flex-direction: row;
  height: 550px; //fixed until later
  margin: var(--standard-margin);
  maxheight: 500px;
  overflow: scroll;
  margin-top: 25px;
  margin-bottom: -30px;
  // box-shadow: inset 4px 2px 10px rgba(0, 0, 0, 0.4);
`;

const Footer = styled.div`
  border-radius: var(--standard-border-radius);
  display: grid;
  flex-direction: row;
  margin: var(--standard-margin);
`;

const QuizH1 = styled.h1`
  font-size: 46px;
`;

// const Button = styled.button`
//   border-radius: var(--standard-border-radius);
//   height: 30px;
//   margin: var(--standard-margin);
//   background-color: var(--accent-color);
//   border: none;
//   //add click styling
//   // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2), 0 2px 5px 0 rgba(0,0,0,0.19);
//   box-shadow: 0 2px 5px 0 black;
//   margin-bottom: 30px;
// `;

const Start = ({
  allQuizzes,
  quiz,
  quizSelected,
  changeStatusForward,
  changeStatusBackward,
  chooseQuiz,
  chosenQuiz,
  imFeelingLucky,
}) => {
  if (!quizSelected) {
    // get all quiz data from db
    // use that quiz data to populate the feed
    return (
      <Container>
        <Header>
          <h1>Select a quiz to start playing!</h1>
          <Button
            style={{
              borderRadius: 'var(--standard-border-radius)',
              backgroundColor: '#FFD700',
              color: "black",
              margin: "0% 40% 10% 40%",
            }}
            variant='contained'
            onClick={imFeelingLucky}
          >
            I'm feeling lucky
          </Button>
        </Header>
        <Body>
          <div>
            {allQuizzes.map((quiz, idx) => {
              return (
                <QuizFeedItem
                  id={idx}
                  quiz={quiz}
                  changeStatusForward={changeStatusForward}
                  chooseQuiz={chooseQuiz}
                  key={idx}
                />
              );
            })}
          </div>
        </Body>
        <Footer>
          <span>
            <Button
              style={{
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={chosenQuiz}
            >
              Next
            </Button>
          </span>
        </Footer>
      </Container>
    );
  } else if (quizSelected) {
    // get selected quiz data from db
    //render the page that gives user the option to return home or start quiz
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h3>You've selected:</h3>
        <br />
        <QuizH1>{quiz}</QuizH1>
        <br />
        {/* <p>Quiz author</p>
    <p>Quiz category</p> */}
        <Footer>
          <span>
            <Button
              style={{
                height: 40,
                margin: 'var(--standard-margin)',
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={changeStatusBackward}
            >
              Select another Quiz
            </Button>
            <Button
              style={{
                height: 40,
                margin: 'var(--standard-margin)',
                borderRadius: 'var(--standard-border-radius)',
                backgroundColor: 'var(--accent-color)',
                color: 'black',
              }}
              variant='contained'
              onClick={changeStatusForward}
            >
              Play this one!
            </Button>
          </span>
        </Footer>
      </div>
    );
  }
};

export default Start;
