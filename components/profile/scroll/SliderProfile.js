import React from 'react';
import {Carrousel, ConteCarrousel, ItemCarrousel, ItemCarrouselTarjeta, ItemCarrouselArrows, ConteCarrouselController, ImgProfile, ContenLogo} from '../../ui/escort_book/SliderProfile'
import Link from 'next/link';

const SliderProfile = ({escort, imageSelect}) => {

	
	return ( 
    <Carrousel>
      <ConteCarrousel>
				{
					escort.photos.map((photo, index) => {
						return (
							<ItemCarrousel id={`itemCarrousel-${index}`}>
          			<ItemCarrouselTarjeta>
									<img src={photo} alt="test" />
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
								<img src="/logo.png" id="icono-menu" width="200"/>
								</ContenLogo>
        			</ItemCarrousel>
						)
					})
				}
      </ConteCarrousel>
      <ConteCarrouselController>
				{
					escort.photos.map((photo, index) => {
						return (
							<Link href={`#itemCarrousel-${index}`} id={`controlImage${index}`}>
								<img width="50" src={photo} />	
							</Link>
						)
					})
				}
      </ConteCarrouselController>
    </Carrousel>
   );
}
 
export default SliderProfile;