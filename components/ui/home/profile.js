import styled from '@emotion/styled'

export const BoxCardScroll = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 35px;
`
export const HeaderCard = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &>img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  text-transform: capitalize;
`
export const BoxImageCard = styled.div`
  width: 100%;
  display: flex;
  &>img{
    max-width: 100%;
    min-width: 100%;
    height: auto;
  }
`
export const FooterCard = styled.div`
  width: 100%;
  height: 30px;
`