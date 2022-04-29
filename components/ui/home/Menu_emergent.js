import styled from '@emotion/styled'


export const MenuNav = styled.nav`
  margin-top: 4%;
`

//menu emergente
export const MenuNew = styled.div`
  background-color: var(--black);
  box-shadow: 2px 0px 5px 2px rgb(66,66,66);
  width: 70%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all .5s ease;
  & ul {
    padding: 100px 0px 20px 0px;
    list-style: none;
  }
  & ul li {
    color: white;
    display: block;
    font-size: 25px;
    text-decoration: none;
    padding: 10px 50px;
    cursor: pointer;
  }
  & ul li:hover{
    background-color: rgb(228,228,228);
    color: rgb(42,42,42);
  }
`

export const MenuInBlack = styled.div`
  position: absolute; 
  background: var(--black);
  opacity: .6;
  top: 0; 
  left: 100%;
  height: 100vh; 
  width: 43%
`