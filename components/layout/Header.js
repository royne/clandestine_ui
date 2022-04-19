import React, {useState} from 'react'
import {useUser} from '../../context/userContext'
import { HeaderNav, HeaderBox, HeaderNavBottom } from "../ui/home/Header";
import Link from 'next/link';
import Login from '../auth/Login'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)
  const { user } = useUser()
  const showModal = () => setShowLogin(true)
  const hideModal = (elm) => setShowLogin(elm)
  
  return (
    <>
      <HeaderNav>
        <img src="/icons/menu.svg" />
        {user ? <img src="/usuario.png" /> : <span onClick={showModal}>Iniciar sesion</span>}
      </HeaderNav>
      <HeaderBox>
        <HeaderNavBottom />
        <Link href="/"><h2>CLANDESTINO</h2></Link>
      </HeaderBox>
      <Login openModal={showLogin} hideModal={hideModal}/>
    </>
  );
}

export default Header;