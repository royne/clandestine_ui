import React, {useState} from 'react'
import {useUser} from '../../context/userContext'
import { HeaderNav, HeaderBox, HeaderNavBottom, Logo } from "../ui/home/Header";
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
        {user ? <img src="/usuario.png" style={{width:"30px"}}/> : <img src="/icons/menu.svg" onClick={showModal}/>}
      </HeaderNav>
      <HeaderBox>
        <HeaderNavBottom />
        <Link href={"/"} >
          <a className="logo"><img src={"/logo.png"} /></a>
        </Link>
      </HeaderBox>
      <Login openModal={showLogin} hideModal={hideModal}/>
    </>
  );
}

export default Header;