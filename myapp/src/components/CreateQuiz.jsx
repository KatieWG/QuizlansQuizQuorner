import React, { useState, useEffect } from 'react';
import AddQuestionModal from './createComponents/AddQuestionModal.jsx';
import styled from 'styled-components';
import axios from 'axios';

const NewQuiz = styled.div`
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  display: grid;
  grid-template-rows: 20% 50% 30%;
  grid-template-columns: 30% 70%;
  background-color: var(--background-color);
  margin-top: 40px;
`;

const ChosenIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid green;
  border-radius: var(--standard-border-radius);
`;

const Gallery = styled.div`
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  grid-row-start: 2;
  grid-column: 2 / span 1;
  overflow: scroll;
  background-color: var(--background-color);
  border-radius: 2px;
  margin-top: 50px;
`;

const QuizName = styled.input`
  height: 40px;
`;

const EachQuestion = styled.div`
  background-color: var(--background-color);
  border: 5px solid var(--blue);
  margin: var(--standard-margin);
  padding: var(--standard-padding);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  z-index: 0;
  overflow: scroll;
`;

const TextInputs = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 1;
`;

const Description = styled.textarea`
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 5px solid transparent;
  border-radius: var(--blue);
  box-shadow: var(--standard-shadow);
`;

const CreatedQuestions = styled.div`
  height: 10%;
  grid-column: 2 / span 1;
  margin: var(--standard-margin);
  //box-sizing: border-box;
  height: 250px;
  background-color: var(--accent-color);
  padding: var(--standard-padding);
  border-radius: 2px;
  over-flow: scroll;
`;

const FakeDiv = styled.div`
  height: 99%;
  background-color: var(--background-color);
  display: grid;
  grid-template-rows: repeat(10, 200px);
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  overflow: scroll;
  margin: auto;
  padding: 0px;
`;

const AddQButton = styled.button`
  height: 50px;
  background-color: var(--blue);
  border-radius: var(--standard-border-radius);
  font-size: 1.3em;
  margin-top: 20px;
`;

const SubmitBtn = styled.button`
  height: 50px;
  background-color: var(--accent-color);
  border-radius: var(--standard-border-radius);
  position: relative;
  bottom: 90%;
  font-size: 1.3em;
  margin-top: -210px;
`;

const CreateQuiz = ({ userName }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  const [newQuizBanner, setNewQuizBanner] = useState('');
  const [newQuizCategory, setNewQuizCategory] = useState('');
  const [newQuizQuestions, setNewQuizQuestions] = useState([]);

  const addQuiz = (quizObj) => {
    axios
      .post('http://52.90.8.77:4444/addQuiz', quizObj)
      .then((response) => {
        //console.log(response.data);
        resetInputs();
        alert('Quiz successfully created!');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const quizToPost = {
    quizName: newQuizTitle,
    quizQuestions: newQuizQuestions,
    category: newQuizCategory,
    quizDescription: newQuizDescription,
    quizBanner: newQuizBanner,
    createdBy: userName,
  };
  const handleQuizSubmission = () => {
    addQuiz(quizToPost);
  };

  const resetInputs = () => {
    setNewQuizTitle('');
    setNewQuizDescription('');
    setNewQuizBanner('');
    setNewQuizCategory('');
    setNewQuizQuestions([]);
  };

  const handleCategorySelect = (event) => {
    setNewQuizCategory(event.target.value);
  };

  const bannerOptions = [
    'https://i.imgur.com/Xwv08Qv.jpg',
    'https://i.imgur.com/4wZslIx.png',
    'https://i.imgur.com/vW2wWam.jpg',
    'https://i.imgur.com/YEeyJKU.jpg',
    'https://i.imgur.com/kYHSNyT.jpg',
    'https://i.imgur.com/542Jxv9.jpg',
    'https://i.imgur.com/ASQMn4Y.jpg',
    'https://i.imgur.com/8o0Mo3R.jpg',
    'https://i.imgur.com/FSIPzwE.jpg',
  ];

  return (
    <NewQuiz>
      <CreatedQuestions style={{ backgroundColor: "transparent"}}>
      <h3 style={{ backgroundColor: "transparent", marginLeft: 20 }}>
            Questions:
          </h3>
        <FakeDiv>
          <br/>
          {newQuizQuestions?.length > 0 &&
            newQuizQuestions.map((question, index) => {
              return (
                <EachQuestion key={index}>
                  <div>{question.question}</div>
                  <div>{question.correctAnswer} - Correct Answer</div>
                  <div>{question.incorrectAnswers[0]}</div>
                  <div>{question.incorrectAnswers[1]}</div>
                  <div>{question.incorrectAnswers[2]}</div>
                </EachQuestion>
              );
            })}
        </FakeDiv>
      </CreatedQuestions>
      <TextInputs>
        <label style={{ fontSize: 30 }}>Quiz Name:</label>
        <QuizName
          style={{ fontSize: 18 }}
          type='text'
          size='40'
          placeholder='Quiz Name'
          value={newQuizTitle}
          onChange={() => {
            setNewQuizTitle(event.target.value);
          }}
        ></QuizName>
        <br></br>
        <label style={{ fontSize: 24 }}>
          Select a Category:
        </label>
        <select style={{ fontSize: 18, height: 24 }} onChange={handleCategorySelect}>
          <option value='Animals'>Animals</option>
          <option value='Pop Culture'>Pop Culture</option>
          <option value='History'>History</option>
          <option value='Literature'>Literature</option>
          <option value='Just for Fun'>Just for Fun</option>
          <option value='Science'>Science</option>
          <option value='TV and Movies'>TV and Movies</option>
        </select>
        <br/>
        <label style={{ fontSize: 24 }}>Quiz Description:</label>
        <Description
          name='DescriptionInput'
          cols='40'
          rows='5'
          value={newQuizDescription}
          onChange={() => {
            setNewQuizDescription(event.target.value);
          }}
        ></Description>
      </TextInputs>
      <Gallery>
        <h3 style={{marginLeft: 20}}>Select a Banner Image</h3>
        {bannerOptions?.map((image, index) => {
          if (image === newQuizBanner) {
            return (
              <ChosenIMG
                onClick={() => {
                  setNewQuizBanner(image);
                }}
                key={index}
                src={image}
              ></ChosenIMG>
            );
          }
          return (
            <IMG
              onClick={() => {
                setNewQuizBanner(image);
              }}
              key={index}
              src={image}
            ></IMG>
          );
        })}
      </Gallery>

      <AddQButton onClick={() => {setToggleModal(true);}}>
        Add Question
      </AddQButton>
      <SubmitBtn onClick={handleQuizSubmission}>
        Submit Quiz
      </SubmitBtn>
      {toggleModal && (
        <AddQuestionModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          quizToPost={quizToPost}
          newQuizQuestions={newQuizQuestions}
          setNewQuizQuestions={setNewQuizQuestions}
        />
      )}
    </NewQuiz>
  );
};

export default CreateQuiz;
