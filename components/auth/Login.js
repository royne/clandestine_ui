import React, { useState, useEffect } from 'react'
import Modal from '../layout/Modal'

const Login = ({ openModal, hideModal}) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
    hideModal(false)
  }

  useEffect(() => {
    setShowModal(openModal)
  }, [openModal])

  return (
    <Modal onClose={closeModal} show={showModal}>
      <form>
        <div>
          <label>Email</label>
          <input type="mail" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </Modal>
  )
}

export default Login