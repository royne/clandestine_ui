import React, { useState, useEffect } from 'react'
import Modal from '../layout/Modal'
import { useUser } from "../../context/userContext";
import { login } from "../../settings/auth";
import { FormInput, ButtonsForm, ButtonCreate, FormSelect } from "../ui/home/FormModal"

const Login = ({ openModal, hideModal}) => {
  const [showModal, setShowModal] = useState(false);
  const [ showViewInModal, setShowViewInModal] = useState(true)
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { setChargeUser, setUser } = useUser();

  const closeModal = () => {
    setShowModal(false)
    hideModal(false)
    setShowViewInModal(true)
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

  const changeForm = () => {
    if(showViewInModal){
      setShowViewInModal(false)
    } else {
      setShowViewInModal(true)
    }
  }

  return (
    <Modal onClose={closeModal} show={showModal} title={"Bienvenido a CLANDESTINO"}>
      {showViewInModal ? 
        <form onSubmit={submitForm}>
          <div>
            <div>
              <label>Soy</label>
            </div>
            <FormSelect name="selectUser">
              <option value="cliente">Cliente</option>
              <option value="escort">Escort</option>
            </FormSelect>
          </div>
          <div>
            <div>
              <label>Email</label>
            </div>
            <FormInput type="mail" name="email" onChange={handleChange}/>
          </div>
          <div>
            <div>
              <label>Password</label>
            </div>
            <FormInput type="password" name="password" onChange={handleChange}/>
          </div>
          <ButtonsForm>
            <div>
              <input type="submit" value="SIGN IN" />
            </div>
            <ButtonCreate>
              Si aun no tienes cuenta, registrate aqui
              <input type="button" value="Crear Cuenta"  onClick={changeForm}/>
            </ButtonCreate>
          </ButtonsForm>
        </form>
        :
        <form style={{color: "var(--white)", textAlign: "center"}}>
          formulario para crear cuenta
          <ButtonCreate>
            <input type="button" value="Crear Cuenta"/>
          </ButtonCreate>
          <ButtonCreate>
            <input type="button" value="Ya tengo Cuenta"  onClick={changeForm}/>
          </ButtonCreate>
        </form>
    }
      
    </Modal>
  )
}

export default Login