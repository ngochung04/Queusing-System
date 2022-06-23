import React from 'react';
import './modal.scss';
const Modal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="app__modal">{children}</div>;
};

export default Modal;
