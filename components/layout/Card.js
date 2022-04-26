import React from 'react'
import Link from 'next/link';
import { BoxCard, BoxImg, BoxInfo, ImgType, ImgCard } from '../ui/home/Card'
import Image from 'next/image';

const Card = ({ element }) => {
  return (
    <BoxCard>
      <BoxImg>
        <Link href={`/perfil/${element.id}`}>
          <Image src={element.avatar} layout={"fill"}/>
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