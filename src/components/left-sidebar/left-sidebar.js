import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../UI/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './left-sidebar.module.css';

const LeftSidebar = ({
  activePeople,
  setActivePeople,
  friends,
  setFriends,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [modalInput, setModalInput] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  // Add friend function
  const addFriendHandler = () => {
    const newFriend = {
      name: modalInput.trim(),
      owe: 0,
      getBack: 0,
      id: uuidv4(),
      items: [],
    };

    if (modalInput.trim() === '') return;

    const addFriend = [...friends, newFriend];

    console.log(JSON.stringify(addFriend));

    setFriends(addFriend);
    localStorage.setItem('friends', JSON.stringify(addFriend));

    setModalInput('');
    setOpen(false);
  };

  // Setting friend active
  const activeFriendHandler = (index) => {
    const filterFrnd = friends.filter((friend) => friend['id'] === index);
    let [frnd] = filterFrnd;
    setActivePeople(frnd);
  };

  const dashboardHandler = () => {
    setActivePeople({});
  };

  const blurHandler = () => {
    if (modalInput.trim() === '') {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  return (
    <>
      <div className={classes.leftsidebar}>
        <p className={classes.leftDashboard} onClick={dashboardHandler}>
          Dashboard
        </p>
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
          {friends &&
            friends.length > 0 &&
            friends.map((friend, i) => (
              <p
                key={i}
                className={
                  activePeople.id === friend.id
                    ? classes.activeFrnd
                    : classes.friend
                }
                onClick={() => activeFriendHandler(friend['id'])}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>{friend.name}</span>
              </p>
            ))}
        </div>
      </div>
      <Modal open={open} title={'Add Friend'} setOpen={setOpen}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            className="modal-input"
            value={modalInput}
            onChange={(e) => setModalInput(e.target.value)}
            onBlur={blurHandler}
          />
          <br />
          {message && (
            <span className="msg">**Please enter your friend name**</span>
          )}
        </div>
        <button onClick={addFriendHandler} className={classes.submitFrnd}>
          Submit
        </button>
      </Modal>
    </>
  );
};

export default LeftSidebar;
