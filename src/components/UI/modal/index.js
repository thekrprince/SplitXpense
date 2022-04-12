import React, { useState } from 'react';
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
  modalSubmitHandler,
}) => {
  const [message, setMessage] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  const inputChangeHandler = (e) => {
    setModalInput(e.target.value);
  };

  const blurHandler = () => {
    if (modalInput.trim() === '') {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  const modalSubmitBtnHandler = () => {
    modalSubmitHandler();
  };

  if (!open) return;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-title">
          <span>{title}</span>
          <FontAwesomeIcon
            icon={faClose}
            className="close"
            onClick={closeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={input1placeholder}
            className="modal-input"
            value={modalInput}
            onChange={inputChangeHandler}
            onBlur={blurHandler}
          />
          <br />
          {message && (
            <span className="msg">**Please enter your friend name**</span>
          )}
        </div>
        <button onClick={modalSubmitBtnHandler}>{btnText}</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
