import {useState} from 'react' 
import CardScroll from '../components/layout/CardScroll'

const GaleryScroll = ({ escorts }) => {
  const [changeGrid, setChangeGrid] = useState(false)
  return (
    <>
      {escorts && escorts.map(elm => <CardScroll key={elm.photo} escort={elm} photo={elm.photo} setChangeGrid={setChangeGrid} gridHome={true}/>)}
    </>
  )
}

export default GaleryScroll
