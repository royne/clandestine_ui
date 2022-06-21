import React from 'react';
import Modal from '../../layout/Modal';
import {ConatainerImg, ImgContainer, ConatainerInfo, BoxInfo} from "../../ui/escort_book/ModalProfileInfo.js"


const ModalProfileInfo = ({openModal, showModal, escort}) => {
  console.log(escort);
  const addDash = (arr, i) => arr.length === i + 1 ? false : true

  return ( 
    <Modal show={openModal} desingModal={true} onClose={showModal}>
      <div>
        <ConatainerImg>
          <ImgContainer src={escort.avatar} width="180"/>
        </ConatainerImg>
        <ConatainerInfo>
          <h1>{escort.username}</h1>
          <p>{escort.description}</p>
          <h2>Tarifas</h2>
            <table style={{color: "var(--purple3)", width: "100%"}}>
              <tr>
                <td>1 hora</td>
                <td>${escort.price}</td>
              </tr>
            </table>
          <h2>Horarios</h2>
          <p>Lunes a Domingo	24 horass</p>
          <h2>Mis servicios</h2>
          <p>{escort.activities.map((elm, i) => <>{elm.name}{addDash(escort.activities, i) ? ' - ' : ''}</>)}</p>
          <h2>Lugar del encuentro</h2>
          <p>{escort.locations.map((elm, i) => <>{elm.name}{addDash(escort.locations, i) ? ' - ' : ''}</>)}</p>
          <h2>Categorias</h2>
          <p>{escort.categories.map((elm, i) => <>{elm.name}{addDash(escort.categories, i) ? ' - ' : ''}</>)}</p>
          <h2>Contactame</h2>
          <BoxInfo>
            <div className='btn_wp'>
              <a href={`https://wa.me/57${escort.phone}/?text=Hola%20${escort.username}%20Tienes%20un%20mensaje%20de%20CLANDESTINO`} target="_blank">
                <img src="/icons/whatsapp.svg" />
                whatsapp
              </a>
            </div>
          </BoxInfo>
         
        </ConatainerInfo>
      </div>
    </Modal>
   );
}
 
export default ModalProfileInfo;