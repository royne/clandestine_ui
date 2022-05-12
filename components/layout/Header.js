import React, {useState} from 'react'
import {useUser} from '../../context/userContext'
import { HeaderNav, HeaderBox, HeaderNavBottom, Logo } from "../ui/home/Header";
import { MenuNav, MenuNew, MenuInBlack} from "../ui/home/Menu_emergent"
import Link from 'next/link';
import Login from '../auth/Login'
import Image from 'next/image';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [ showViewInModal, setShowViewInModal] = useState(true)
  const { user } = useUser()
  const showModal = (e) => {
    setShowMenu(false)
    if(e.target.classList.contains("registerButton")){
      setShowViewInModal(false)
    } else {
      setShowViewInModal(true)
    }
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

  const closeMenu = (e) => {
    if(e.target.classList.contains("menuBlack")){
      setShowMenu(false)
    }
  }

  const changeForm = () => {
    if(showViewInModal){
      setShowViewInModal(false)
    } else {
      setShowViewInModal(true)
    }
  }

  return (
    <>
      <HeaderNav>
        {user && user.avatar ? 
          <Link href={'/escort_book'}>
            <Image src={user.avatar} width={35} height={35} style={{borderRadius:"50%",padding:0}}/> 
          </Link>
        : 
          <MenuNav>
            <div className="icono-menu" onClick={openMenu}>
              <img src="/icons/menu.svg" id="icono-menu" width="30"/>
            </div>
            <MenuNew className="cont-menu active" id="menu" style={showMenu ? {transform: "translate(0px)"} : {transform: "translate(-150%)"}} onClick={closeMenu}>  
              <div>
                <div className="icono-menu" onClick={openMenu} style={{marginTop: "7.5%", paddingLeft: "13px"}}>
                  <img src="/icons/menu.svg" id="icono-menu" width="30"/>
                </div>
                <ul>
                  <li onClick={showModal}> Iniciar Sesion </li>
                  <li onClick={showModal} className="registerButton"> Registrate </li>
                </ul> 
              </div>
              <MenuInBlack className="menuBlack">

              </MenuInBlack>
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
      <Login openModal={showLogin} hideModal={hideModal} showViewInModal={showViewInModal} changeForm={changeForm}/>
    </>
  );
}

export default Header;