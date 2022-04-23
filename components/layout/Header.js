import React, {useState} from 'react'
import {useUser} from '../../context/userContext'
import { HeaderNav, HeaderBox, HeaderNavBottom, Logo } from "../ui/home/Header";
import { MenuNav, MenuEmergent, MenuInput, MenuLi} from "../ui/home/Menu_emergent"
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
        {user && user.avatar ? 
          <Link href={'/escort_book'}>
            <img src={user.avatar} style={{width:"30px",height:"30px",borderRadius:"50%",padding:0}}/> 
          </Link>
        : 
          <MenuNav>
            <MenuInput type="checkbox" id="menu"/>
            <label htmlFor="menu"><img width="30" src="/icons/menu.svg" /></label>
            <MenuEmergent>
              <MenuLi onClick={showModal}>Iniciar Sesion</MenuLi>
              <MenuLi onClick={showModal}>Registrarse</MenuLi>
            </MenuEmergent>
          </MenuNav>
          
        }  
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