import {useState} from 'react'
import { FormInput, ButtonsForm, ButtonCreate, FormSelect } from "../ui/home/FormModal"

const FormSingUp = ({ changeForm}) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const submitForm = async e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form style={{ color: "var(--white)", textAlign: "center" }} onSubmit={submitForm}>
      <div>
        <div>
          <label>Email</label>
        </div>
        <FormInput type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <div>
          <label>User Name</label>
        </div>
        <FormInput type="text" name="username" onChange={handleChange} />
      </div>
      <div>
        <div>
          <label>Password</label>
        </div>
        <FormInput type="password" name="password" onChange={handleChange} />
      </div>
      <ButtonCreate>
        <input type="button" value="Crear Cuenta" />
      </ButtonCreate>
      <ButtonCreate>
        <input type="button" value="Ya tengo Cuenta" onClick={changeForm} />
      </ButtonCreate>
    </form>
  )
}

export default FormSingUp