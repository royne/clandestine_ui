import { useEffect, useState } from "react"
import { BASE_URL } from '../../settings/base'
import { Container } from "../ui/escort_book/PhotosEdit"
import Photo from "./Photo"
import BtnGridPhotos from './BtnGridPhotos'

const PhotosEdit = ({user}) => {
  const [getPhotos, setGetPhotos] = useState(null)
  const photos = user.photos
  console.log(user);

  useEffect(() => {
    const sendPhotos = async () => {
      if (!getPhotos) return
      const url = `${BASE_URL}/escorts/${user.escort.id}`;
      const formData = new FormData();
      getPhotos.map((elm, i) => formData.append(`escort[photos][${i}]`, elm));
      const request = await fetch(url, {
        method: "PATCH",
        body: formData,
      });
      request.ok
        ? alert("Tus fotos se subieron con exito")
        : alert("Ocurrio algo inexperado");
    }
    sendPhotos()
  }, [getPhotos])

  return (
    <div>
      <Container>
        {photos && photos.map(elm => <Photo key={elm.id} image={elm.url}/>)}
      </Container>
      <BtnGridPhotos setGetPhotos={setGetPhotos}/>
    </div>
  )
}

export default PhotosEdit