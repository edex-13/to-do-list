import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css';

const Modal = ({children, setOpenModal}) => {
  const onClose = ({target}) => {
    if (target.tagName === 'DIV' && target.className === 'ModalBackground') {
      setOpenModal(false);
    }
  };
	return ReactDOM.createPortal(
		<div className="ModalBackground" onClick={onClose}>
			{children}
		</div>,
		document.getElementById('modal')
	);
};

export {Modal};
