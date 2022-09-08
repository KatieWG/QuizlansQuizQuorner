import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import sample data

const ListItem = styled.div`
  margin: var(--standard-margin);
  text-align: left;
  font-size: var(--standard-text-size);
  font-weight: var(--standard-text-weight);
`;

const FriendsListItem = ({ userName }) => {
  return <ListItem>{userName}</ListItem>;
};

export default FriendsListItem;
