import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './left-sidebar.module.css';

const friends = [
  {
    name: 'Payal',
    money: 770,
  },
  {
    name: 'Hiten',
    money: 770,
  },
  {
    name: 'Jitendra',
    money: 770,
  },
];

const LeftSidebar = () => {
  const theme = localStorage.getItem('theme');

  console.log(theme);

  return (
    <div className={classes.leftsidebar}>
      <p>Dashboard</p>
      <div className={classes.search}>
        <input type="text" placeholder="Filter by name" />
      </div>
      <div className={classes.people}>
        <div className={classes.addFriend}>
          <span>FRIENDS</span>
          <span className={classes.plusIcon}>
            <FontAwesomeIcon icon={faPlus} />
            add
          </span>
        </div>
        {friends.map((friend, i) => (
          <p key={i} className={classes.friend}>
            <FontAwesomeIcon icon={faUser} />
            <span>{friend.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
