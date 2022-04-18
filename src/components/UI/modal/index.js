import React from 'react';
import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Modal = ({
  title = 'Add',
  open = false,
  setOpen,
  titleClass = 'modal-title',
  children,
}) => {
  const closeHandler = () => {
    setOpen(false);
  };

  if (!open) return;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className={titleClass}>
          <span>{title}</span>
          <FontAwesomeIcon
            icon={faClose}
            className="close"
            onClick={closeHandler}
          />
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
