import {useState, useEffect} from 'react'
import {BASE_URL} from '../../settings/base'
import { ContainerPhotoProfile, ImgProfile, BoxInfo } from '../ui/escort_book/PhotosEdit'
import BtnProfilePhotos from './BtnProfilePhotos'

const ProfilePhoto = ({ user }) => {
  const [getDataPhotos, setGetDataPhotos] = useState(null)
  const escort = user.escort

  useEffect(() => {
    const sendPhoto = async () => {
      if (!getDataPhotos) return
      const url = `${BASE_URL}/escorts/${escort.id}`;
      const formData = new FormData();
      formData.append(`escort[avatar]`, getDataPhotos);
      const request = await fetch(url, {
        method: "PATCH",
        body: formData,
      });
      request.ok
        ? alert("Tus foto se subio con exito")
        : alert("Ocurrio algo inexperado");
    }
    sendPhoto()
  }, [getDataPhotos])

  return (
    <ContainerPhotoProfile>
      <div style={{position: "relative"}}>
        <ImgProfile src={`${user.avatar ? user.avatar : "/usuario.png"}`} width={100} height={100} />
        <BtnProfilePhotos setGetDataPhotos={setGetDataPhotos} />
      </div>
      <BoxInfo>
        <h3>{escort.username}</h3>
        <span>Edad: {escort.age}</span>
        <div className='btn_wp'>
          <a href={`https://wa.me/57${user.escort.phone}/?text=Hola%20${user.escort.username}%20Tienes%20un%20mensaje%20de%20CLANDESTINO`} target="_blank">
            <img src="/icons/whatsapp.svg" />
            whatsapp
          </a>
        </div>
      </BoxInfo>
    </ContainerPhotoProfile>
  )
}

export default ProfilePhoto