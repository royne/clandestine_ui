import styled from '@emotion/styled'


export const Carrousel = styled.div`
  width: 100%;
  max-height: 100vh;
`

export const ConteCarrousel = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
`


export const ItemCarrousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  #itemCarrousel-1{
    background-color: rgb(226, 50, 50);
  }
  #itemCarrousel-2{
      background-color: rgb(50, 200, 226);
  }
  #itemCarrousel-3{
      background-color: rgb(200, 226, 50);
  }
`

export const ItemCarrouselTarjeta = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const ItemCarrouselArrows = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 1000;
  height: 100%;
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px; 
  & > i:hover {
    cursor: pointer;
  }
  & > a > i {
    color: white;
  }
`

export const ConteCarrouselController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & > a {
    text-decoration: none;
    font-size: 2em;
    color: grey;
  }
`

export const ContenLogo = styled.div`
  background-color: rgba(0,0,0,.5);
  width: 100%;
  position: absolute;
  bottom: 10%;
  right: 0;
` 

export const ImgProfile = styled.img`
  display: block;
  width: 30px;
  height: 30px;
  padding: 5px;
  filter: invert(100%);
  background-color: rgba(255,255,255,.8);
  border-radius: 50%;
`





