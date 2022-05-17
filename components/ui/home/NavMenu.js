import styled from '@emotion/styled'

export const ContainerNavMenu = styled.div`
  position: sticky;
  bottom: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(0deg, var(--purple1) 50%, var(--purple2) 100%);
  color: var(--purple3);
  &>img{
    width: 25px;
    height: 25px;
  }
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    width: 110px;
    height: 55px;
    background-color: var(--black);
    border-radius: 0 0 100px 100px;
  }
`

export const ContainerSearch = styled.div`
  border-radius: 50%;
  padding: 20px;
  background: linear-gradient(0deg, var(--purple1) 50%, var(--purple2) 100%);
  position: relative;
  top: -35px;
  left: 1px;
`
