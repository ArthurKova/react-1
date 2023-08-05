import React from 'react';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import Trans from './Trans/Trans';
import friends from '../friends.json';
import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FriendList friends={friends} />
      <Profile user={user} />
      <Stats title="Upload stats" data={data} />
      <Stats data={data} />
      <Trans data={transactions} />
    </div>
  );
};
