import React, {useState} from 'react'
import CardScroll from '../../layout/CardScroll'
import ModalProfile from './ModalProfile'

const BodyProfileScroll = ({ escort, setChangeGrid}) => {
  const [showLogin, setShowLogin] = useState(false)

  const closeModal = () => {
    setShowLogin(false)
  }

  const openModal = () => {
    setShowLogin(true)
  }


  return (
    <>
      {escort && escort.photos.map(elm => <CardScroll key={elm} escort={escort} photo={elm} setChangeGrid={setChangeGrid} openModal={openModal}/>)}
      <ModalProfile openModal={showLogin} closeModal={closeModal} escort={escort}/>
    </>
  )
}

export default BodyProfileScroll