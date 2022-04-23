import Link from 'next/link'
import {ContainerNavMenu} from '../ui/home/NavMenu'

const NavMenu = () => {
  return (
    <ContainerNavMenu>
      <Link href="/premium_slides"><img src="/icons/active.svg"/></Link>
      <Link href="/"><img src="/icons/search.svg"/></Link>
      <Link href="/"><img src="/icons/noti.svg"/></Link>
    </ContainerNavMenu>
  )
}

export default NavMenu