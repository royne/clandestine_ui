import React from 'react';
import Modal from '../../layout/Modal'
import SliderProfile from './SliderProfile';


const ModalProfile = ({openModal, closeModal, escort}) => {

  return ( 
    <Modal show={openModal} onClose={closeModal} desingModal={true}>
      <SliderProfile escort={escort}/>
    </Modal>
   );
}
 
export default ModalProfile;