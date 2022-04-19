import React from 'react'
import { BoxCard, BoxImg, BoxInfo, ImgType } from '../ui/home/Card'

const Card = ({ image }) => {
  return (
    <BoxCard>
      <BoxImg>
        <img src={`/${image}`}/>
      </BoxImg>
      <BoxInfo>
        <div className='info'>
          <span>Linda</span>
        </div>
        <div className='info detail_info'>
          <span>25 años - Chapinero</span>  
        </div>
        <ImgType src={`/icons/premium.svg`} />
      </BoxInfo >
    </BoxCard>
  )
}

export default Card