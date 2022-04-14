import Link from 'next/link'
import {ContainerNavMenu} from '../ui/home/NavMenu'

const NavMenu = () => {
  return (
    <ContainerNavMenu>
      <Link href="/">1</Link>
      <Link href="/">2</Link>
      <Link href="/">3</Link>
    </ContainerNavMenu>
  )
}

export default NavMenu