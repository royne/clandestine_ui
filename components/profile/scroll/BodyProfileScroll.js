import React from 'react'
import CardScroll from '../../layout/CardScroll'

const BodyProfileScroll = ({ escort, setChangeGrid}) => {
  return (
    <>
      {escort && escort.photos.map(elm => <CardScroll key={elm} escort={escort} photo={elm} setChangeGrid={setChangeGrid} />)}
    </>
  )
}

export default BodyProfileScroll