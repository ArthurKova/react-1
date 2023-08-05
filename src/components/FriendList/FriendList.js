import React from 'react';
import s from './FriendList.module.css';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friendlist">
        {friends?.map(friend => {
          const { avatar, name, id, isOnline } = friend;
          return (
            <li className={s.item} key={id}>
              <span className={isOnline ? s.online : s.offline}></span>
              <img
                className="s.avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={s.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
  friend: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

export default FriendList;
