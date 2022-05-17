import React, { useState, useEffect } from 'react'
import Modal from '../layout/Modal'
import FormLogin from './FormLogin';
import FormSingUp from './FormSingUp';

const Login = ({ openModal, hideModal, showViewInModal, changeForm}) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
    hideModal(false)
  }

  useEffect(() => {
    setShowModal(openModal)
  }, [openModal])

  return (
    <Modal onClose={closeModal} show={showModal} title={"Bienvenido a CLANDESTINO"}>
      {showViewInModal ? 
        <FormLogin closeModal={closeModal} changeForm={changeForm} />
        :
        <FormSingUp changeForm={changeForm} />
      }
    </Modal>
  )
}

export default Login