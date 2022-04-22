import {useState, useEffect} from 'react'
import {BASE_URL} from '../../settings/base'
import { ContainerPhotoProfile, ImgProfile, BoxInfo } from '../ui/escort_book/PhotosEdit'
import BtnGridPhotos from './BtnGridPhotos'

const ProfilePhoto = ({ user }) => {
  const [getPhotos, setGetPhotos] = useState(null)
  const escort = user.escort

  useEffect(() => {
    const sendPhotos = async () => {
      if (!getPhotos) return
      const url = `${BASE_URL}/escorts/${escort.id}`;
      const formData = new FormData();
      formData.append(`escort[avatar]`, getPhotos[0]);
      const request = await fetch(url, {
        method: "PATCH",
        body: formData,
      });
      request.ok
        ? alert("Tus foto se subio con exito")
        : alert("Ocurrio algo inexperado");
    }
    sendPhotos()
  }, [getPhotos])

  return (
    <ContainerPhotoProfile>
      <div style={{position: "relative"}}>
        <ImgProfile src={`${user.avatar ? user.avatar : "/usuario.png"}`} />
        <BtnGridPhotos setGetPhotos={setGetPhotos} profile={true}/>
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