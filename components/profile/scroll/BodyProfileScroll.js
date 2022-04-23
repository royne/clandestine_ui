import React from 'react'
import CardScroll from '../../layout/CardScroll'

const BodyProfileScroll = ({escort}) => {
  return (
    <>
      {escort && escort.photos.map(elm => <CardScroll escort={escort} photo={elm} />)}
    </>
  )
}

export default BodyProfileScroll