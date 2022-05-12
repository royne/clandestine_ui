import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { StyledModalOverlay, StyledModal, StyledModalHeader, StyledModalBody, StyledModalTitle } from '../ui/home/Modal'

const Modal = ({ show, onClose, children, title, desingModal=false }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const closeModal = (e) => {
    if(e.target.classList.contains("modalTarget")){
      onClose()
    }
  }
  
  const modalContent = show ? (
    <StyledModalOverlay className="modalTarget" onClick={closeModal}>
      <StyledModal optionDesing={desingModal}>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;