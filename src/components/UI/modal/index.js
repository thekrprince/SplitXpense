import React from 'react';
import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Modal = ({
  title = 'Add',
  input1placeholder = 'Enter value',
  btnText = 'Submit',
  open = false,
  setOpen,
  modalInput,
  setModalInput,
  addFriendHandler,
}) => {
  const closeHandler = () => {
    setOpen(false);
  };

  const inputChangeHandler = (e) => {
    setModalInput(e.target.value);
  };

  const modalSubmitHandler = () => {
    addFriendHandler();
    console.log('submitted');
  };

  if (!open) return;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-title">
          <h2>{title}</h2>
          <FontAwesomeIcon
            icon={faClose}
            className="close"
            onClick={closeHandler}
          />
        </div>
        <input
          type="text"
          placeholder={input1placeholder}
          className="modal-input"
          value={modalInput}
          onChange={inputChangeHandler}
        />
        <br />
        <button onClick={modalSubmitHandler}>{btnText}</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
