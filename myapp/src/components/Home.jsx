import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizFeed from './homeComponents/QuizFeed.jsx';
import FriendsList from './homeComponents/FriendsList.jsx';
import PopularQuizzes from './homeComponents/PopularQuizzes.jsx';
import UserBox from './homeComponents/UserBox.jsx';
//import subcomponents
// import hiKatie from Jenny:D
// import ily <3 from all of my heart;

//I can explain this after my tapout!! But it should be work-on-able now
const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 30% 50% 20%;
  font-size: var(--major-heading-size);
  font-weight: var(--major-heading-weight);
`;

//elements to add (aka add to subcomponents folder and then plug into HomeLayout Div):
//feed
//right sidebar (friend's list)
//left sidebar (popular quizzes)

const Home = ({
  fullQuizList,
  selectedQuiz,
  setSelectedQuiz,
  setFullQuizList,
}) => {
  return (
    <HomeLayout>
      <div>
        <UserBox />
        <FriendsList />
      </div>
      <QuizFeed
        fullQuizList={fullQuizList}
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
        setFullQuizList={setFullQuizList}
      />
      <PopularQuizzes
        selectedQuiz={selectedQuiz}
        setSelectedQuiz={setSelectedQuiz}
      />
      {/*<FilterByCategory {if we have time} />*/}
    </HomeLayout>
  );
};

export default Home;
