import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsListItem from './homeSubComponents/FriendsListItem.jsx';
import { mockUserList } from '../../../mockData/mockUsers.js';

//OMG KATIE TRY THE VARIABLES i wanna know if it works k sorry I'll leave u be LOL see ya!!!!<3
// OH TRUE I FORGOT BOUT THEM
// one sec
const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  text-align: center;
  margin: var(--standard-margin);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const ListTitle = styled.div`
  margin: 10px;
`;
//display list withou bullets (later: ask jemmy)

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState(mockUserList);

  const getFriends = () => {
    axios
      .get('/FillMeIn')
      .then((response) => {
        setFriendsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getFriends()
  //}, [])

  return (
    <Container>
      <ListTitle>Friends List</ListTitle>
      <div>
        {friendsList.map((user, idx) => {
          return <FriendsListItem userName={user.userName} />;
        })}
      </div>
    </Container>
  );
};

export default FriendsList;
