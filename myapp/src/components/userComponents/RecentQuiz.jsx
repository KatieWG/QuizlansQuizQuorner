import React, {useEffect} from 'react';
import styled from 'styled-components';

const QuizDiv = styled.div`
  background-color: var(--accent-color);
  height: 50px;
  font-size: var(--standard-text-size);
  width: 85%;
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  margin-bottom: var(--standard-margin);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Container = styled.div`
  border-radius: var(--standard-border-radius);
  text-align: center;
  margin: var(--standard-margin);
  background-color: var(--accent-color);
  box-shadow: var(--standard-shadow);
  font-size: var(--standard-text-size);
  font-weight: var(--standard-text-weight);
  height: 200px
  display: grid;
  grid-template-rows: 20% 80%;
`;

const Banner = styled.div`
  height: 50px;
  overflow: hidden;
  border-top-left-radius: var(--standard-border-radius);
  border-top-right-radius: var(--standard-border-radius);
  grid-row: 1 / span 1;
`;

const TextData = styled.div`
  grid-row: 2 / span 1;
  display: grid;
  grid-template-rows: 80px 200px;
  grid-template-columns: 30% 40% 30%;
`;

const Name = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  font-size: var(--minor-heading-size);
  font-weight: var(--minor-heading-weight);
  &:hover {
    color: var(--background-color);
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Category = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  //word-wrap: break-word;
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
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
`;
const Description = styled.div`
  background-color: var(--accent-color);
  width: 90%;
  box-shadow: var(--standard-shadow);
  border-radius: var(--standard-border-radius);
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  margin: auto;
`;

const RecentQuiz = ({
  quizName,
  category,
  timesTaken,
  description,
  banner,
  upvotes,
  downvotes,
  score
}) => {
  //console.log(props);
  // const quizName = props.eachQuiz.quizName;
  return (
    // <QuizDiv>
    //   <div>{props.quiz.quizName}</div>
    //   <div>Score: {props.quiz.userScores}</div>
    // </QuizDiv>
    <Container>
      <Banner>
        <img src={`${banner}`}></img>
      </Banner>
      <TextData>
        <Name onClick={() => handleQuizSelect(event)}>{quizName}</Name>
        <Category>{category}</Category>
        {/* <TimesTaken>{timesTaken} people have taken this quiz</TimesTaken> */}
        <Description>{description}</Description>
        <Score>You scored {score}</Score>
        {/* UPVOTE <FontAwesomeIcon icon="fa-solid fa-caret-up" name="upvote" onClick={()=>handleRating(event.target.name}/> */}
        {/* DOWNVOTE <FontAwesomeIcon icon="fa-solid fa-caret-down" name="downvote" onClick={()=>handleRating(event.target.name}/>/> */}
        {/* REPORT <FontAwesomeIcon icon="fa-solid fa-flag" /> */}
      </TextData>
    </Container>
  )
}

export default RecentQuiz;