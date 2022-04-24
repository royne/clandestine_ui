import Link from 'next/link'
import {ContainerNavMenu} from '../ui/home/NavMenu'
import { deleteToken } from '../../settings/auth'
import {useUser} from '../../context/userContext'

const NavMenu = () => {
  const { setUser } = useUser()
  const logOut = () => {
    deleteToken()
    setUser(null)
  }
  return (
    <ContainerNavMenu>
      <Link href="/premium_slides"><img src="/icons/active.svg"/></Link>
      <Link href="/"><img src="/icons/search.svg"/></Link>
      <Link href="/"><img src="/icons/noti.svg" onClick={logOut} /></Link>
    </ContainerNavMenu>
  )
}

export default NavMenu