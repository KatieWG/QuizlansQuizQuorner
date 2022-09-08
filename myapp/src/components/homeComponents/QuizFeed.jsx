import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeedItem from './homeSubComponents/QuizFeedItem.jsx';
import { exampleQuizzes } from './../../../mockData/exampleQuizzes.js';

const Container = styled.div`
  border-radius: var(--standard-border-radius)
  height: 500px;
  text-align: center;
  max-height: 1000px;
  overflow: scroll;

`;

const QuizFeed = ({
  selectedQuiz,
  setSelectedQuiz,
  fullQuizList,
  setFullQuizList,
}) => {
  let reversedList = fullQuizList.reverse();

  return (
    <Container>
      {reversedList?.length > 0 &&
        reversedList.map((listItem, index) => {
          return (
            <QuizFeedItem
              quizName={listItem.quizName}
              category={listItem.category}
              createdBy={listItem.createdBy}
              timesTaken={listItem.timesTaken}
              description={listItem.quizDescription}
              banner={listItem.quizBanner}
              upvotes={listItem.quizUpvotes}
              downvotes={listItem.quizDownvotes}
              score={listItem.aggregateScore}
              key={index}
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
              fullQuizList={fullQuizList}
              setFullQuizList={setFullQuizList}
            />
          );
        })}
    </Container>
  );
};

export default QuizFeed;
