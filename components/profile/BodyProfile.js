import { Container } from "../ui/escort_book/PhotosEdit"
import Photo from '../escort_book/Photo'

export const BodyProfile = ({photos}) => {
  return (
    <Container>
      {photos && photos.map(elm => <Photo key={elm} image={elm} />)}
    </Container>
  )
}
