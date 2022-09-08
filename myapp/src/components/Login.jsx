import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../index.js';
import { getFirestore } from 'firebase/firestore';
import {reactLocalStorage} from 'reactjs-localstorage';
import firebaseConfig from "../../config.js";
import styled from 'styled-components';
// import firebaseConfig from "../index.js";

const Login = ({
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  currentUser,
  setCurrentUser,
  userName,
  setUserName,
  isAdmin,
  setIsAdmin
}) => {


  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [currentUser, setCurrentUser] = useState({});

  onAuthStateChanged(auth, (loggedInUser) => {
    setCurrentUser(loggedInUser);
  });

  const createEmailHandler = (event) => {
    console.log('email handler', event.target.value)
    setRegisterEmail(event.target.value);
  };

  const createPasswordHandler = (event) => {
    console.log('password handler', event.target.value)
    setRegisterPassword(event.target.value);
  };

  // const createUserHandler = (event) => {
  //   setUserName(event.target.value);
  // }

  const registerUser = () => {
    axios.post('http://52.90.8.77:4444/addUser', {userName: userName, email: registerEmail})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

    const user = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then((user) => {
        console.log(user);
        document.location.href = 'http://localhost:8080/#/home';
      })
      .catch((error) => {
        console.log(error.message);
      });
      // setUserName(userName);
      // setUserEmail(registerEmail);

  };

  const LoginUser = () => {
    // setUserName(userName);
    // setUserEmail(registerEmail);

    const getUser = () => {
      axios.get(`http://52.90.8.77:4444/user/${registerEmail}`)
        .then((response) => {
          setUserName(response.data.userName);
          setUserEmail(response.data.email);
          console.log('USER DATA:', response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    const user = signInWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
      )
      .then((user) => {
        console.log('INSIDE signInWithEmailAndPassword:', user)
        console.log(user);
        document.location.href = 'http://localhost:8080/#/home';
      })
      .catch((error) => {
        console.log('INSIDE signInWithEmailAndPassword:', error)
        console.log(error.message);
      });

  };

  return (
    <FormBox>
      <Heading>Please enter in your username, email, and password.</Heading>
      <div>
        {/* <FormLine>
          <label>Username:</label>
          <Input type='text' required={true} onChange={createUserHandler}/>
        </FormLine> */}
        <div>
        <FormLine>
          <label>Email:</label>
          <Input type='email' required={true} onChange={createEmailHandler} />
        </FormLine>
        </div>
        <div>
          <FormLine>
            <label>Password:</label>
            <Input type='password' required={true} onChange={createPasswordHandler}/>
          </FormLine>
        </div>
      </div>
      <FormLine>
        <span>
          <StyledButton onClick={registerUser}>Create Account</StyledButton>
          <StyledButton onClick={LoginUser} >Login</StyledButton>
        </span>
      </FormLine>
      <Note>If you do not have an account yet, sign up in this form with the same credentials!</Note>
      <Note>All user emails must be in a valid format, and all user passwords must be at least six characters in length.</Note>
    </FormBox>
  );
};

export default Login;

const FormBox = styled.form`
  background-color: var(--blue);
  color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
  font-size: 36px;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  transform: translate(0%, 20%);
`

const StyledButton = styled.button`
  background-color: var(--accent-color);
  color: var(--text-color);
  border-radius: var(--standard-border-radius);
  border-width: 0;
  box-shadow: var(--standard-shadow);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5%;
  margin-right: 5%;
  width: 40%;
  font-size: 24px;
`

const FormLine = styled.div`
  background-color: var(--blue);
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 24px;
`

const Input = styled.input`
  float: right;
  margin-right: 5%;
`

const Heading = styled.h1`
  background-color: var(--blue);
  font-size: 36px;
  text-align: center;
`

const Note = styled.li`
  font-size: 18px;
  text-indent: -20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`