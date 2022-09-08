import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mockUserList } from '../../../mockData/mockUsers.js';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  //height: 100px;
  text-align: center;
  margin: var(--standard-margin);
  display: grid;
  grid-template-columns: 30% 70%;
  box-shadow: var(--standard-shadow);
`;

const Contents = styled.div`
  grid-column-start: 2
  margin: var(--standard-margin);
  word-wrap: break-all;
  font-size: var(--minor-heading-size);
  font-weight: var(--minor-heading-weight);
`;

const IMG = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 50%;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  grid-column: 1 / span 1;
  margin: auto;
`;

const UserBox = () => {
  const [userData, setUserData] = useState(mockUserList[0]);

  return (
    <Container>
      <Avatar>
        <IMG src='https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' />
      </Avatar>
      <Contents>
        <br></br>
        <div>{userData.userName}</div>
        <div>{userData.email}</div>
      </Contents>
    </Container>
  );
};

export default UserBox;
