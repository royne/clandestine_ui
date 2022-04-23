import { Container } from "../../ui/escort_book/PhotosEdit"
import Photo from '../../escort_book/Photo'

const BodyProfile = ({photos}) => {
  return (
    <Container>
      {photos && photos.map(elm => <Photo key={elm} image={elm} />)}
    </Container>
  )
}

export default BodyProfile