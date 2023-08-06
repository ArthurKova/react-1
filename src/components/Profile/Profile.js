import React from 'react';
import s from './Profile.module.css';
import propTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={user.avatar} alt={user.username} className={s.avatar} />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers:</span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views:</span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes:</span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: propTypes.object.isRequired,
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }),
};

export default Profile;
