import React from 'react'
import { BoxCardScroll, HeaderCard, BoxImageCard, FooterCard } from '../ui/home/profile'

const CardScroll = ({escort, photo}) => {
  return (
    <BoxCardScroll>
      <HeaderCard>
        <img src={escort.avatar} />
        <span>{escort.username}</span>
      </HeaderCard>
      <BoxImageCard>
        <img src={photo} />
      </BoxImageCard>
      <FooterCard>
        <span>Aca Va algo</span>
      </FooterCard>
    </BoxCardScroll>
  )
}

export default CardScroll