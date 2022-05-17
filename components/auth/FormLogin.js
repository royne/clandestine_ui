import {useState} from 'react'
import { useUser } from "../../context/userContext";
import { login } from "../../settings/auth";
import { FormInput, ButtonsForm, ButtonCreate } from "../ui/home/FormModal"

const FormLogin = ({ closeModal, changeForm}) => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { setChargeUser, setUser } = useUser();

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

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <div>
          <label>Email</label>
        </div>
        <FormInput type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <div>
          <label>Password</label>
        </div>
        <FormInput type="password" name="password" onChange={handleChange} />
      </div>
      <ButtonsForm>
        <div>
          <input type="submit" value="SIGN IN" />
        </div>
        <ButtonCreate>
          Si aun no tienes cuenta, registrate aqui
          <input type="button" value="Crear Cuenta" onClick={changeForm} />
        </ButtonCreate>
      </ButtonsForm>
    </form>
  )
}

export default FormLogin