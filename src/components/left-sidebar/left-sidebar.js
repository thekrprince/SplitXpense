import React, { useState } from 'react';
import Modal from '../UI/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './left-sidebar.module.css';

const LeftSidebar = () => {
  const [inputVal, setInputVal] = useState('');
  const [modalInput, setModalInput] = useState('');
  const people = localStorage.getItem('friendList');
  const [friends, setFriends] = useState(people || []);
  const [open, setOpen] = useState(false);

  const addFriendHandler = () => {
    const newFriend = {
      name: modalInput,
      owe: 0,
      getBack: 0,
    };

    const addFriend = [...friends, newFriend];

    setFriends(addFriend);
    localStorage.setItem('friends', JSON.stringify(addFriend));
  };

  return (
    <>
      <div className={classes.leftsidebar}>
        <p>Dashboard</p>
        <div className={classes.search}>
          <input
            type="text"
            placeholder="Filter by name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        <div className={classes.people}>
          <div className={classes.addFriend}>
            <span>FRIENDS</span>
            <span className={classes.plusIcon} onClick={() => setOpen(true)}>
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
      <Modal
        open={open}
        input1placeholder={'Enter name'}
        setOpen={setOpen}
        modalInput={modalInput}
        setModalInput={setModalInput}
        addFriendHandler={addFriendHandler}
      />
    </>
  );
};

export default LeftSidebar;
