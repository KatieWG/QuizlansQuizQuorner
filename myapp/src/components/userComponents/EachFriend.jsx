import React, {useState} from 'react';
import mockUsers from '../../../mockData/mockUsers.js';
import styled from 'styled-components';

const FriendDiv = styled.div`
  background-color: var(--accent-color);
  height: 50px;
  font-size: var(--standard-text-size);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  margin-bottom: var(--standard-margin);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;

`

const EachFriend = (props) => {
  const friendID = props.friend;
  //console.log('👅👅👅friend', props.friend);

  return(
    <FriendDiv>
      {props.friend}
      {/* {mockUsers.friend} */}
    </FriendDiv>
  )
}

export default EachFriend;