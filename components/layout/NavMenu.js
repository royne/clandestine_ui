import React, {useState} from 'react'
import Link from 'next/link'
import FilterSearch from '../layout/Filter'
import {ContainerNavMenu} from '../ui/home/NavMenu'
import { deleteToken } from '../../settings/auth'
import {useUser} from '../../context/userContext'
import { MenuNav, MenuInBlackUp, MenuNewUp} from "../ui/home/Menu_emergent"


const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { setUser } = useUser()
  const logOut = () => {
    deleteToken()
    setUser(null)
  }

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

  return (
    <ContainerNavMenu>
      <Link href="/premium_slides"><img src="/icons/active.svg"/></Link>
      
      <MenuNav>
        <div className="icono-menu" onClick={openMenu}>
          <img src="/icons/search.svg" id="icono-menu" width="25"/>
        </div>
        <MenuNewUp className="cont-menu active" id="menu" style={showMenu ? {transform: "translateY(0px)"} : {transform: "translateY(150%)"}} onClick={closeMenu}>  
          <MenuInBlackUp className="menuBlack">
            <h1><img src="/icons/search.svg" id="icono-menu" width="20"/> Buscar escort</h1>
          </MenuInBlackUp>
          
          <div>
            <FilterSearch openMenu={openMenu}/>
            <div className="icono-menu" onClick={openMenu} style={{position: "absolute", bottom: "3%", right: "5%"}}>
              <img src="/icons/delete.png" id="icono-menu" width="20" style={{filter: "invert(100%)"}}/>
            </div>
          </div>
        </MenuNewUp>
      </MenuNav>

      <Link href="/"><img src="/icons/profile2.svg" onClick={logOut} style={{ filter: "invert(100%)" }} /></Link>
    </ContainerNavMenu>
  )
}

export default NavMenu