import React from 'react';
import Modal from '../../layout/Modal'
import SliderProfile from './SliderProfile';


const ModalProfile = ({openModal, closeModal, escort, imageSelect}) => {

  return ( 
    <Modal show={openModal} onClose={closeModal} desingModal={true}>
      <SliderProfile escort={escort} imageSelect={imageSelect}/>
    </Modal>
   );
}
 
export default ModalProfile;