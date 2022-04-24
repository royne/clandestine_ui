import React, {useState} from 'react'
import {useUser} from '../../context/userContext'
import { HeaderNav, HeaderBox, HeaderNavBottom, Logo } from "../ui/home/Header";
import { MenuNav, MenuEmergent, MenuInput, MenuLi, MenuNew} from "../ui/home/Menu_emergent"
import Link from 'next/link';
import Login from '../auth/Login'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useUser()
  const showModal = () => {
    setShowMenu(false)
    setTimeout(() => {
      setShowLogin(true)
    }, 500);
  }
  const hideModal = (elm) => setShowLogin(elm)
  
  const openMenu = () => {
    if(showMenu){
      setShowMenu(false)
    }else{
      setShowMenu(true)
    }
    
  }

  return (
    <>
      <HeaderNav>
        {user && user.avatar ? 
          <Link href={'/escort_book'}>
            <img src={user.avatar} style={{width:"30px",height:"30px",borderRadius:"50%",padding:0}}/> 
          </Link>
        : 
          // <MenuNav>
          //   <MenuInput type="checkbox" id="menu"/>
          //   <label htmlFor="menu"><img width="30" src="/icons/menu.svg" /></label>
          //   <MenuEmergent>
          //     <MenuLi onClick={showModal}>Iniciar Sesion</MenuLi>
          //     <MenuLi onClick={showModal}>Registrarse</MenuLi>
          //   </MenuEmergent>
          // </MenuNav>
          <MenuNav>
            <div className="icono-menu" onClick={openMenu}>
              <img src="/icons/menu.svg" id="icono-menu" width="30"/>
            </div>
            <MenuNew className="cont-menu active" id="menu" style={showMenu ? {transform: "translate(0px)"} : {transform: "translate(-110%)"}}>
                <div className="icono-menu" onClick={openMenu} style={{marginTop: "7.5%", paddingLeft: "13px"}}>
                  <img src="/icons/menu.svg" id="icono-menu" width="30"/>
                </div>
                <ul>
                  <li onClick={showModal}> Iniciar Sesion </li>
                  <li onClick={showModal}> Registrate </li>
                </ul>
            </MenuNew>
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