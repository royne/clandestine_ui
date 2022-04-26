import { useEffect, useState } from 'react'
import { BASE_URL } from '../settings/base'
import CardScroll from '../components/layout/CardScroll'

const GaleryScroll = () => {
  const [escorts, setScorts] = useState([])
  const [changeGrid, setChangeGrid] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${BASE_URL}/escorts/randon_premium`)
      const data = await response.json()
      setScorts(data)
    }
    getData()
  }, [])
  return (
    <>
      {escorts && escorts.map(elm => <CardScroll key={elm.photo} escort={elm} photo={elm.photo} setChangeGrid={setChangeGrid} gridHome={true}/>)}
    </>
  )
}

export default GaleryScroll
