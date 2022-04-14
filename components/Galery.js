import Card from './layout/Card'
import {ContainerGalery} from './ui/home/Galery'

const Galery = () => {
  return (
    <ContainerGalery>
      <Card image={"escort1.jpg"}/>
      <Card image={"escort2.jpg"} />
      <Card image={"escort3.jpg"} />
      <Card image={"escort4.jpg"}/>
    </ContainerGalery>
  )
}

export default Galery