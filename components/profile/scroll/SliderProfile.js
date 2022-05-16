import React from 'react';
import {Carrousel, ConteCarrousel, ItemCarrousel, ItemCarrouselTarjeta, ItemCarrouselArrows, ConteCarrouselController, ImgProfile, ContenLogo, Section_item} from '../../ui/escort_book/SliderProfile'
import Link from 'next/link';
import Image from 'next/image';

const SliderProfile = ({escort, imageSelect}) => {

	const imgSelected = [escort.photos[parseInt(imageSelect)]]

	const orderIn = imgSelected.concat(escort.photos.filter(photo => photo !== imgSelected[0]))

	
	return ( 
    <Carrousel>
      <ConteCarrousel>
				{
					orderIn.map((photo, index) => {
						return (
							<ItemCarrousel id={`itemCarrousel-${index}`} key={index}>
          			<ItemCarrouselTarjeta>
									<Image src={photo} alt="test" layout={"fill"} objectFit={'contain'}/>
								</ItemCarrouselTarjeta>
          			<ItemCarrouselArrows>
          			  <Link href={`#itemCarrousel-${index === 0 ? escort.photos.length - 1 : index-1}`}>
          			    <i><ImgProfile src="/icons/left-arrow.png" alt="left"/></i>
          			  </Link>
          			  <Link href={`#itemCarrousel-${escort.photos.length - 1 == index ? 0 : index+1}`}>
          			    <i><ImgProfile src="/icons/right-arrow.png" alt="right" /></i>
          			  </Link>
          			</ItemCarrouselArrows>
								<ContenLogo>
									<Image src="/logo.png" id="icono-menu" width={200} height={80}/>
								</ContenLogo>
        			</ItemCarrousel>
						)
					})
				}
      </ConteCarrousel>
      <ConteCarrouselController positionImages={escort.photos.length}>
				{
					orderIn.map((photo, index) => {
						return(
						<Section_item key={`imageWithIndex_${index}`}>
							<Link href={`#itemCarrousel-${index}`} id={`controlImage${index}`} key={index}>
								<div style={{position: "relative", width:70, height:90}} >
									<Image src={photo} layout={"fill"} objectFit={'contain'}  />	
								</div>
							</Link>
						</Section_item>
						)
					})
				}
      </ConteCarrouselController>
    </Carrousel>
   );
}
 
export default SliderProfile;