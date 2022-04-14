import React from 'react'
import { HeaderNav, HeaderBox, HeaderNavBottom } from "../ui/home/Header";
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <HeaderNav>
        <img src="/menu.png" />
        <img src="/usuario.png" />
      </HeaderNav>
      <HeaderBox>
        <HeaderNavBottom />
        <Link href="/"><h2>CLANDESTINO</h2></Link>
      </HeaderBox>
    </>
  );
}

export default Header;