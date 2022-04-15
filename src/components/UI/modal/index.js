import React from 'react';
import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Modal = ({
  title = 'Add',
  btnText = 'Submit',
  open = false,
  setOpen,
  modalSubmitHandler,
  children,
}) => {
  const closeHandler = () => {
    setOpen(false);
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
        {children}
        <button onClick={modalSubmitBtnHandler}>{btnText}</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
