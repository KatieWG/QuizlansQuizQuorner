import React, {useState, useEffect} from 'react';
import { mockUserList } from '../../../mockData/mockUsers.js';
import EachFriend from './EachFriend.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 300px;
  //need to look up how to adjust height of box based on content rather than px
  text-align: center;
  margin: var(--standard-margin);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

// Pass loggedIn users and use to display online status
// maybe add in a toggle for showing loggedin friends

const FriendsList = (props) => {
  // const [showFriends, setShowFriends] = useState(10);
  // const [users, setUsers] = useState(mockUserList);
  // //console.log('🥶🥶🥶🥶', users[0].email);
  // const presentUser = users.filter(user => user.email === 'pat@gmail.com');
  // console.log(presentUser[0].friends);

  // const userEmailRequest = props.friends.map((friend) => {
  //   return props.getUser(friend);
  // })

  // useEffect(() => {
  //   console.log('', props.friends)
  //   axios.all(userEmailRequest)
  //     .then((response) => {
  //       console.log('FRIENDSSSSSSS', response)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])


    //   axios.spread((...responses) => {
    //   // const responseOne = responses[0]
    //   // const responseTwo = responses[1]
    // })).catch((errors) => {
    //   console.log(errors);
    // })


  // for (let i = 0; i < props.friends.length; i++) {
  //   let friend = props.friends[i];
  //   props.getUser(friend);
  // }

  return (
    <Container>
      Friends
    {props.friends.map((friend) => {
      return <EachFriend friend={friend} key={friend}/>
    })}
    </Container>
  )
}

export default FriendsList;