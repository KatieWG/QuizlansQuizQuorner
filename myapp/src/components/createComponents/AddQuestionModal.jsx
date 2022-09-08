import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  background-color: var(--accent-color);
  width: 40%;
  height: 50%;
  display: grid;
  grid-template-columns: 80% 20%;
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  grid-template-rows: 10% 70% 20%;
  padding: var(--standard-padding);
`;

const Radios = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
  grid-row: 2 / span 1;
`;

const TextInputs = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const CloseButton = styled.button`
  grid-row: 1 / span 1;
  width: 20px;
  height: 20px;
  text-align: center;
`;

const SubmitButton = styled.button`
  grid-row: 3 / span 1;
`;

const AddQuestionModal = ({
  toggleModal,
  setToggleModal,
  quizToPost,
  newQuizQuestions,
  setNewQuizQuestions,
}) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  let incorrectAnswers = [];

  const handleQuestionSubmit = () => {
    if (correctAnswer === '') {
      alert('You need to select a correct answer');
      return;
    }
    incorrectAnswers = [answer1, answer2, answer3, answer4];
    for (let i = 0; i < incorrectAnswers.length; i++) {
      if (incorrectAnswers[i] === correctAnswer) {
        let tempArray = incorrectAnswers;
        incorrectAnswers.splice(i, 1);
      }
    }
    let questionObj = {
      question: newQuestion,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers,
    };

    setNewQuizQuestions((newQuizQuestions) => [
      ...newQuizQuestions,
      questionObj,
    ]);

    setTimeout(() => {
      setNewQuestion('');
      setCorrectAnswer('');
      setAnswer1('');
      setAnswer2('');
      setAnswer3('');
      setAnswer4('');
      setToggleModal(false);
      incorrectAnswers = [];
    }, 2000);
  };

  return (
    <Modal>
      <Form>
        <CloseButton
          onClick={() => {
            setToggleModal(false);
          }}
        >
          x
        </CloseButton>
        <div>Select Correct Answer</div>
        <Radios>
          <input
            type='radio'
            name='choice'
            value='choice-1'
            id='choice-1'
            onClick={() => {
              setCorrectAnswer(answer1);
            }}
          ></input>
          <input
            type='radio'
            name='choice'
            value='choice-2'
            id='choice-2'
            onClick={() => {
              setCorrectAnswer(answer2);
            }}
          ></input>
          <input
            type='radio'
            name='choice'
            value='choice-3'
            id='choice-3'
            onClick={() => {
              setCorrectAnswer(answer3);
            }}
          ></input>
          <input
            type='radio'
            name='choice'
            value='choice-4'
            id='choice-4'
            onClick={() => {
              setCorrectAnswer(answer4);
            }}
          ></input>
        </Radios>
        <TextInputs>
          <input
            type='text'
            placeholder='Question'
            onChange={() => {
              setNewQuestion(event.target.value);
            }}
          ></input>
          <br></br>
          <label></label>
          <input
            type='text'
            placeholder='Answer'
            onChange={() => {
              setAnswer1(event.target.value);
            }}
          ></input>
          {/*<input type='radio'></input>*/}

          <br></br>
          <input
            type='text'
            placeholder='Answer'
            onChange={() => {
              setAnswer2(event.target.value);
            }}
          ></input>
          {/*<input type='radio'></input>*/}

          <br></br>
          <input
            type='text'
            placeholder='Answer'
            onChange={() => {
              setAnswer3(event.target.value);
            }}
          ></input>

          <br></br>
          <input
            type='text'
            placeholder='Answer'
            onChange={() => {
              setAnswer4(event.target.value);
            }}
          ></input>
          {/*<input type='radio'></input>*/}
        </TextInputs>
        <SubmitButton onClick={handleQuestionSubmit}>Add Question</SubmitButton>
      </Form>
    </Modal>
  );
};

export default AddQuestionModal;
