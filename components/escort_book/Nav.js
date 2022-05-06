import styled from '@emotion/styled'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--purple3);
  &>div{
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-of-type(2){
      border-left: 1px solid var(--purple3);
      border-right: 1px solid var(--purple3);
    }
    color: var(--purple3);
  }
  .active{
    font-weight: bold;
    font-size: 18px;
  }
  .ico_1{
    fill: var(--purple3) !important;
  }
  
`


const Nav = ({ setTab, tab }) => {
  const handleTab = e => setTab(parseInt(e.target.id))
  return (
    <Container>
      <div><Image src="/icons/profile.svg" width={35} height={25} onClick={handleTab} id="0" className={`${tab == 0 && "active"}`}/></div>
      <div><Image src="/icons/grid.svg" width={20} height={20} onClick={handleTab} id="1" className={`${tab == 1 && "active"}`}/></div>
      <div><Image src="/icons/info.svg" width={20} height={20} onClick={handleTab} id="2" className={`${tab == 2 && "active"}`} /></div>
    </Container>
  )
}

export default Nav