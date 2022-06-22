import {useState} from 'react'
import { useRouter } from 'next/router'
import { login } from '../../settings/auth'
import { BASE_URL } from '../../settings/base'
import { useUser } from '../../context/userContext'
import { FormInput, ButtonCreate } from "../ui/home/FormModal"

const FormSingUp = ({ changeForm}) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: ""
  });
  const { setChargeUser, setUser } = useUser();
  const router = useRouter();


  const submitForm = async e => {
    e.preventDefault()
    const url = `${BASE_URL}/users`
    const request = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: data })
    })
    if (request.ok) {
      const dataLogin = await login({
        email: data.email,
        password: data.password,
      });
      if (dataLogin) {
        setUser(dataLogin);
        setChargeUser(false);
      }
      return router.push("/")
    } else {
      alert("error inesperado")
      setData({
        username: "",
        email: "",
        password: ""
      });
    }
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
        <input type="submit" value="Crear Cuenta" />
      </ButtonCreate>
      <ButtonCreate>
        <input type="button" value="Ya tengo Cuenta" onClick={changeForm} />
      </ButtonCreate>
    </form>
  )
}

export default FormSingUp