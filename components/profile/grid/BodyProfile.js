import { Container } from "../../ui/escort_book/PhotosEdit"
import Photo from '../../escort_book/Photo'

const BodyProfile = ({ photos, setChangeGrid}) => {
  return (
    <Container>
      {photos && photos.map(elm => <Photo key={elm} image={elm} setChangeGrid={setChangeGrid}/>)}
    </Container>
  )
}

export default BodyProfile