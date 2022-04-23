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
