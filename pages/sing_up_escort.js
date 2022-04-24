import React, {useState} from 'react'
import {BASE_URL} from '../settings/base'
import Layout from '../components/layout/Layout'
import Router, { useRouter } from 'next/router'
import {login} from '../settings/auth'
import {useUser} from '../context/userContext'
import {BoxForm, BoxIputs, FormInput} from '../components/ui/escort_book/FormEscort'

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
      <h1 className='text-center' style={{textAlign: "center"}}>Soy el formulario</h1>
      <BoxForm>
        <form onSubmit={submitForm}>
          <BoxIputs>
            <div>
              <label>Email</label>
            </div>
            <FormInput type="mail" name="email" onChange={handleChange} />
          </BoxIputs>
          <BoxIputs>
            <div>
              <label>Telefono</label>
            </div>
            <FormInput type="number" name="phone" onChange={handleChange} />
          </BoxIputs>
          <BoxIputs>
            <div>
              <label>Password</label>
            </div>
            <FormInput type="password" name="password" onChange={handleChange} />
          </BoxIputs>
          <BoxIputs>
            <input type="submit" value="Crea Tu Perfil" />
          </BoxIputs>
        </form>
      </BoxForm>
    </Layout>
  )
}

export default singUpEscort