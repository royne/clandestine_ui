import Link from 'next/link';
import React from 'react'
import { BoxCard, BoxImg, BoxInfo, ImgType } from '../ui/home/Card'

const Card = ({ element }) => {
  return (
    <BoxCard>
      <BoxImg>
        <Link href={`/perfil/${element.id}`}>
          <img src={element.avatar}/>
        </Link>
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