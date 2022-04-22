import React from 'react'
import { BoxCard, BoxImg, BoxInfo, ImgType } from '../ui/home/Card'

const Card = ({ element }) => {
  console.log(element.avatar);
  return (
    <BoxCard>
      <BoxImg>
        <img src={element.avatar}/>
      </BoxImg>
      <BoxInfo>
        <div className='info'>
          <span>{element.username}</span>
        </div>
        <div className='info detail_info'>
          <span>{element.age} años</span>  
        </div>
        <ImgType src={`/icons/premium.svg`} />
      </BoxInfo >
    </BoxCard>
  )
}

export default Card