import React from 'react'
import CardScroll from '../../layout/CardScroll'

const BodyProfileScroll = ({ escort, setChangeGrid}) => {
  return (
    <>
      {escort && escort.photos.map(elm => <CardScroll escort={escort} photo={elm} setChangeGrid={setChangeGrid} />)}
    </>
  )
}

export default BodyProfileScroll