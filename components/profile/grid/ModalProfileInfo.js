import React from 'react';
import Modal from '../../layout/Modal';
import {ConatainerImg, ImgContainer, ConatainerInfo, BoxInfo} from "../../ui/escort_book/ModalProfileInfo.js"


const ModalProfileInfo = ({openModal, showModal, escort}) => {
  return ( 
    <Modal show={openModal} desingModal={true} onClose={showModal}>
      <div>
        <ConatainerImg>
          <ImgContainer src={escort.avatar} width="180"/>
        </ConatainerImg>
        <ConatainerInfo>
          <h1>{escort.username}</h1>
          <p>
            Hola amor, espero te encuentres bien. Me llamo Perla y soy una dulce prepago de 50 años que necesita tu vida morbosa, mi rey. Sobresalgo por ser una preciosa dama que trabaja como independiente y que tiene el privilegio de tener una silueta maravillosa.
          </p>
          <h2>Tarifas</h2>
            <table style={{color: "var(--purple3)", width: "100%"}}>
              <tr>
                <td>1 hora</td>
                <td>$130.000</td>
              </tr>
              <tr>
                <td>2 horas</td>
                <td>$200.000</td>
              </tr>
              <tr>
                <td>Amanecida</td>
                <td>$730.000</td>
              </tr>
            </table>
          <h2>Horarios</h2>
          <p>Lunes a Domingo	24 horass</p>
          <h2>Mis servicios</h2>
          <p>Actriz Porno - Besos boca - Fantasias y disfraces - Masajes eroticos - Oral natural</p>
          <h2>Lugar del encuentro</h2>
          <p>A domicilio - Cena romantica - En un hotel/motel - Eventos y fiestas - Viajes</p>
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