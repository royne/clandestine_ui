import styled from '@emotion/styled'


export const MenuNav = styled.nav`
  margin-top: 4%;
`

export const MenuEmergent = styled.ul`
  display: none;
`

export const MenuInput = styled.input`
  display: none;
  &:checked ~ ul {
    display: block;
    position: absolute;
    z-index: 10;
  }
`

 export const MenuLi = styled.li`
  display: block;
  width: 200px;
  background: var(--purple1);
  margin: 0;
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid grey;
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