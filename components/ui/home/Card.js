import styled from '@emotion/styled'

export const BoxCard = styled.div`
  width: 49%;
  height: 300px;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    width: 200px;
  }
`

export const BoxImg = styled.div`
  width: 100%;
  height: 240px;
  cursor: pointer;
  &>img{
    min-width: 100%;
    max-width: 100%;
    max-height: 240px;
    min-height: 240px;
  }
`

export const BoxInfo = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: var(--purple1);
  box-sizing: border-box;
  padding: 5px;
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--purple3);
    font-weight: bold;
  }
  .detail_info{
    font-size: 13px;
  }
`
export const ImgType = styled.img`
  max-width: 50px;
  max-height: 50px;
  position: absolute;
  bottom: 50%;
  right: 1.5%;
  transform: translateY(50%);
`