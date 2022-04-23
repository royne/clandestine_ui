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
  justify-content: space-between;
  align-items: center;
  .img_profile{
    display: flex;
    justify-content: center;
    align-items: center;
    &>img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .img_grid{
    height: 20px;
    width: 20px;
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