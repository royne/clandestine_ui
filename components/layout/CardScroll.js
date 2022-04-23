import React from 'react'
import { BoxCardScroll, HeaderCard, BoxImageCard, FooterCard } from '../ui/home/profile'

const CardScroll = ({ escort, photo, setChangeGrid}) => {
  return (
    <BoxCardScroll>
      <HeaderCard>
        <div className='img_profile'>
          <img src={escort.avatar} />
          <span>{escort.username}</span>
        </div>
        <img src="/icons/grid.svg" className='img_grid' onClick={() => setChangeGrid(false)}/>
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