import React, { useEffect, useState } from 'react';
import Modal from '../UI/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './left-sidebar.module.css';

const LeftSidebar = () => {
  const [inputVal, setInputVal] = useState('');
  const [modalInput, setModalInput] = useState('');
  // const people = localStorage.getItem(JSON.parse('friends'));
  const [friends, setFriends] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetching data in starting
    const retrievePeople = localStorage.getItem('friends');
    const people = JSON.parse(retrievePeople);
    setFriends(people);
  }, []);

  const addFriendHandler = () => {
    const newFriend = {
      name: modalInput.trim(),
      owe: 0,
      getBack: 0,
    };

    if (modalInput.trim() === '') return;

    const addFriend = [...friends, newFriend];

    console.log(JSON.stringify(addFriend));

    setFriends(addFriend);
    localStorage.setItem('friends', JSON.stringify(addFriend));

    setModalInput('');
    setOpen(false);
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
          {friends &&
            friends.length > 0 &&
            friends.map((friend, i) => (
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
        title={'Add Friend'}
        setOpen={setOpen}
        modalInput={modalInput}
        setModalInput={setModalInput}
        modalSubmitHandler={addFriendHandler}
      />
    </>
  );
};

export default LeftSidebar;
