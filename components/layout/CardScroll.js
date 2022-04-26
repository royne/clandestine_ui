import Image from 'next/image'
import Link from 'next/link'
import { BoxCardScroll, HeaderCard, BoxImageCard, FooterCard } from '../ui/home/profile'

const CardScroll = ({ escort, photo, setChangeGrid, gridHome=false}) => {
  return (
    <BoxCardScroll>
      <HeaderCard>
        <div className='img_profile'>
          {gridHome ? <Link href={`/perfil/${escort.id}`}><img src={escort.avatar} /></Link> : <img src={escort.avatar} /> }
          <span>{escort.username}</span>
        </div>
        <img src="/icons/grid.svg" className='img_grid' onClick={() => setChangeGrid(false)}/>
      </HeaderCard>
      <BoxImageCard>
        {gridHome ? <Link href={`/perfil/${escort.id}`}><Image src={photo} layout={"fill"} /></Link> : <Image src={photo} layout={"fill"}/>}
      </BoxImageCard>
      <FooterCard>
        <span>Aca Va algo</span>
      </FooterCard>
    </BoxCardScroll>
  )
}

export default CardScroll