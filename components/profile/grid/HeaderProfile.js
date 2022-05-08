import React from 'react'
import { ContainerPhotoProfile, ImgProfile, BoxInfo } from '../../ui/escort_book/PhotosEdit'

const HeaderProfile = ({ escort }) => {

  if (Object.keys(escort).length === 0) return null

  return (
    <>
      <ContainerPhotoProfile>
        <div style={{ position: "relative" }}>
          <ImgProfile src={`${escort.avatar ? escort.avatar : "/usuario.png"}`} width={100} height={100}/>
        </div>
        <BoxInfo>
          <h3>{escort.username}</h3>
          <span>Edad: {escort.age}</span><br/>
          <span>Tarifa: ${escort.price}</span>
          <div className='btn_wp'>
            <a href={`https://wa.me/57${escort.phone}/?text=Hola%20${escort.username}%20Tienes%20un%20mensaje%20de%20CLANDESTINO`} target="_blank">
              <img src="/icons/whatsapp.svg" />
              whatsapp
            </a>
          </div>
        </BoxInfo>
      </ContainerPhotoProfile>
      <div>
        <span>{escort.description}</span>
      </div>
    </>
  )
}

export default HeaderProfile