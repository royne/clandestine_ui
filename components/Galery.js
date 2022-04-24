import {useEffect, useState} from 'react' 
import {BASE_URL} from '../settings/base'
import Card from './layout/Card'
import {ContainerGalery} from './ui/home/Galery'

const Galery = () => {
  const [escorts, setScorts] = useState([])

  useEffect(() => {
    const getData = async () =>{
      const response = await fetch(`${BASE_URL}/escorts`)
      const data = await response.json()
      setScorts(data)
    }
    getData()
  }, [])
  // console.log(escorts[0].photos)
  return (
    <ContainerGalery>
      {escorts && escorts.map(elm => <Card element={elm} key={elm.id} />)}
    </ContainerGalery>
  )
}

export default Galery