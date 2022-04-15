import React, { useState, useEffect } from 'react'
import Modal from '../layout/Modal'
import { useUser } from "../../context/userContext";
import { login } from "../../settings/auth";

const Login = ({ openModal, hideModal}) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { setChargeUser, setUser } = useUser();

  const closeModal = () => {
    setShowModal(false)
    hideModal(false)
  }

  useEffect(() => {
    setShowModal(openModal)
  }, [openModal])

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const dataUser = await login(data);
    if (dataUser) {
      setUser(dataUser);
      setChargeUser(false);
    } else {
      closeModal()
      alert("algo salio mal")
      return
    }
    closeModal();
  }

  return (
    <Modal onClose={closeModal} show={showModal}>
      <form onSubmit={submitForm}>
        <div>
          <label>Email</label>
          <input type="mail" name="email" onChange={handleChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange}/>
        </div>
        <div>
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </Modal>
  )
}

export default Login