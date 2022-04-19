import styled from '@emotion/styled'

export const ContainerNavMenu = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(0deg, var(--purple1) 50%, var(--purple2) 100%);
  color: var(--purple3);
  &>img{
    width: 25px;
    height: 25px;
  }
`