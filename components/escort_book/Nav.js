import styled from '@emotion/styled'

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
  
`


const Nav = ({ setTab, tab }) => {
  const handleTab = e => setTab(parseInt(e.target.id))
  return (
    <Container>
      <div onClick={handleTab} id="0" className={`${tab == 0 && "active"}`}>Perfil</div>
      <div onClick={handleTab} id="1" className={`${tab == 1 && "active"}`}>Photos</div>
      <div onClick={handleTab} id="2" className={`${tab == 2 && "active"}`}>Info</div>
    </Container>
  )
}

export default Nav