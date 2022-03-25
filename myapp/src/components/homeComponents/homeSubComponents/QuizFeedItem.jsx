import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Container = styled.div`
  border-radius: var(--standard-border-radius);
  text-align: center;
  margin: var(--standard-margin);
  background-color: var(--blue);
  box-shadow: var(--standard-shadow);
  font-size: var(--standard-text-size);
  font-weight: var(--standard-text-weight);
  display: grid;
  grid-template-rows: 40% 60%;
`;

const Icon = styled.i`
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: var(--background-color);
  }
`;

const Report = styled.i`
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: var(--background-color);
  }
  grid-column: 3;
  grid-row: 3;
`;

const Banner = styled.div`
  height: 200px;
  overflow: hidden;
  border-top-left-radius: var(--standard-border-radius);
  border-top-right-radius: var(--standard-border-radius);
  grid-row: 1 / span 1;
  margin-bottom: 30px;
`;

const TextData = styled.div`
  grid-row: 2 / span 1;
  display: grid;
  grid-template-rows: 100px 150px 80px;
  grid-template-columns: 30% 40% 30%;
`;

const QuizFeedItem = ({
  quizName,
  category,
  createdBy,
  timesTaken,
  description,
  banner,
  upvotes,
  downvotes,
  score,
  selectedQuiz,
  setSelectedQuiz,
  fullQuizList,
  setFullQuizList,
}) => {
  //QuizFeed ->
  // map over quizzes and sort by recently made (what other sorting criteria?)

  const [up, setUp] = useState(upvotes);
  const [down, setDown] = useState(downvotes);
  const upvote = () => {
    setUp(up + 1);
    axios
      .post('http://52.90.8.77:4444/upvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downvote = () => {
    setDown(down + 1);
    axios
      .post('http://52.90.8.77:4444/downvote')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleQuizSelect = () => {
    console.log(event.target.value);
    window.location.href = 'http://localhost:8080/#/takequiz';
    setSelectedQuiz(event.target.value);
  };

  const report = () => {
    window.alert(`You have reported ${quizName}`);
    //find that quiz in the allQuizzes list and remove it
    for (let i = 0; i < fullQuizList.length; i++) {
      console.log('isequal', fullQuizList[i]['quizName'] === quizName);
      if (fullQuizList[i]['quizName'] === quizName) {
        let newArray = fullQuizList;
        newArray.shift();
        setFullQuizList((fullQuizList) => newArray);
      }
    }
    //redirect user to start page to select a quiz to play
    //window.location.href = 'http://localhost:8080/#/home';
  };

  const handleReport = () => {
    axios
      .post('/FillMeIn')
      .then((response) => {
        console.log('report handled');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Banner>
        <img src={`${banner}`} />
      </Banner>
      <TextData>
        <Link
                style={linkStyle}
                to={{
                  pathname: '/takequiz',
                  state: { quizSelected: quizName },
                }}
                onClick={()=>{setSelectedQuiz(quizName)}}
              >
                {quizName}
        </Link>
        {/*<Name value={quizName} onClick={() => handleQuizSelect(event)}>{quizName}</Name>*/}
        <Category>{category}</Category>
        <Author>Author: {createdBy}</Author>
        <TimesTaken>{timesTaken} people have taken this quiz</TimesTaken>
        <Description>{description}</Description>
        <Votes>
          <span>
            {up}
            <Icon className='fa-solid fa-angle-up' onClick={upvote}></Icon>
          </span>
          <span>
            {down}
            <Icon className='fa-solid fa-angle-down' onClick={downvote}></Icon>
          </span>
        </Votes>
        {score % timesTaken === 0 || score % timesTaken ? (
          <Score>{score % timesTaken}% average score</Score>
        ) : null}
        <Report className='fa-solid fa-flag' onClick={report}></Report>
      </TextData>
    </Container>
  );
};

export default QuizFeedItem;

const Name = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  font-size: var(--minor-heading-size);
  font-weight: var(--minor-heading-weight);
  //word-wrap: break-word;
  &:hover {
    color: var(--background-color);
    cursor: pointer;
    textdecoration: underline;
  }
  padding: 10px;
`;
const Category = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  //word-wrap: break-word;
  padding: 10px;
`;
const Author = styled.div`
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  word-break: break-all;
  padding: 10px;
`;
const TimesTaken = styled.div`
  grid-row: 3 / span 1;
  grid-column: 2 . span 1;
`;
const Votes = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
`;
const Score = styled.div`
  grid-row: 2 / span 1;
  grid-column: 3;
`;
const Description = styled.div`
  background-color: var(--accent-color);
  width: 50%;
  //box-shadow: var(--standard-shadow);
  border-radius: var(--standard-border-radius);
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  margin: auto;
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const linkStyle = {
  'grid-row': '1 / span 1',
  'grid-column': '2 / span 1',
  'font-size': 'var(--minor-heading-size)',
 ' font-weight': 'var(--minor-heading-weight)',
    'color': 'var(--text-color)',
  //word-wrap: break-word;
  //&:hover {
  //  'color': var(--background-color);
  //  cursor: pointer;
  //  textdecoration: underline;
  //}
  'padding': '10px'
};