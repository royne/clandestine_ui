import React, {useState} from 'react'
import {BASE_URL} from '../settings/base'
import Layout from '../components/layout/Layout'
import Router, { useRouter } from 'next/router'
import {login} from '../settings/auth'
import {useUser} from '../context/userContext'

const singUpEscort = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
    password: ""
  });
  const { setChargeUser, setUser } = useUser();
  const router = useRouter();

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const url = `${BASE_URL}/users/create_escort`
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
      return router.push("/escort_book")
    }else{
      alert("error inesperado")
      setData({
        username: "",
        email: "",
        password: ""
      });
    }
  }
  return (
    <Layout>
      <h1 className='text-center'>soy el formulario</h1>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label>Email</label>
            <input type="mail" name="email" onChange={handleChange} />
          </div>
          <div>
            <label>Telefono</label>
            <input type="number" name="phone" onChange={handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <input type="submit" value="Crea Tu Perfil" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default singUpEscort