import React, {useState} from 'react'
import CardScroll from '../../layout/CardScroll'
import ModalProfile from './ModalProfile'

const BodyProfileScroll = ({ escort, setChangeGrid}) => {
  const [showLogin, setShowLogin] = useState(false)
  const [imageSelect, setImageSelect] = useState('')

  const closeModal = () => {
    setShowLogin(false)
  }

  const openModal = e => {
    setShowLogin(true)
    setImageSelect(e.target.classList[0]);
  }


  return (
    <>
      {escort && escort.photos.map((elm, index) => <CardScroll key={elm} escort={escort} photo={elm} setChangeGrid={setChangeGrid} openModal={openModal} index={index}/>)}
      <ModalProfile openModal={showLogin} closeModal={closeModal} escort={escort} imageSelect={imageSelect}/>
    </>
  )
}

export default BodyProfileScroll