import styled from '@emotion/styled'
import Image from 'next/image'

export const ConatainerImg = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  
`

export const ImgContainer = styled.img`
  display: block;
  border-radius: 50%;
  border: 10px solid var(--purple2);
  padding: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;

`

export const ConatainerInfo = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  & > h1, & > p {
    text-align: center;
  }
`

export const BoxInfo = styled.div`
  text-transform: capitalize;
  color: #808080;
  &>h3{
    margin: 0;
  }
  .btn_wp{
    padding: 3px 30px;
    background: var(--purple1);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &>a{
      display: flex;
      line-height: 2;
    }
    &>a>img{
      width: 30px;
      height: 30px;
      filter: invert(0.5);
    }    
  }

`