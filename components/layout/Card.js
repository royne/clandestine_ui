import React from 'react'
import { BoxCard, BoxImg, BoxInfo } from '../ui/home/Card'

const Card = ({image}) => {
  return (
    <BoxCard>
      <BoxImg>
        <img src={`/${image}`}/>
      </BoxImg>
      <BoxInfo>
        <div className='info'>
          <span>Linda</span>
          <span>* 4.5</span>
        </div>
        <div className='info detail_info'>
          <span>25 años - Chapinero</span>  
        </div>
      </BoxInfo >
    </BoxCard>
  )
}

export default Card