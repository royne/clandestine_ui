import React from 'react';
import {Carrousel, ConteCarrousel, ItemCarrousel, ItemCarrouselTarjeta, ItemCarrouselArrows, ConteCarrouselController, ImgProfile} from '../../ui/escort_book/SliderProfile'


const SliderProfile = ({escort}) => {
  return ( 
    <Carrousel>
        <ConteCarrousel>
            <ItemCarrousel id="itemCarrousel-1">
                <ItemCarrouselTarjeta>A</ItemCarrouselTarjeta>
                <ItemCarrouselArrows>
                    <a href="#itemCarrousel-3">
                        <i><ImgProfile src="/icons/left-arrow.png" alt="left"/></i>
                    </a>
                    <img src={escort.photos[0]} alt="test"/>
                    <a href="#itemCarrousel-2">
                      <i><ImgProfile src="/icons/right-arrow.png" alt="right" /></i>
                    </a>
                </ItemCarrouselArrows>
            </ItemCarrousel>
            <ItemCarrousel id="itemCarrousel-2">
                <ItemCarrouselTarjeta>B</ItemCarrouselTarjeta>
                <ItemCarrouselArrows>
                    <a href="#itemCarrousel-1">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <img src={escort.photos[1]} alt="test"/>
                    <a href="#itemCarrousel-3">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </ItemCarrouselArrows>
            </ItemCarrousel>
            <ItemCarrousel id="itemCarrousel-3">
                <ItemCarrouselTarjeta>C</ItemCarrouselTarjeta>
                <ItemCarrouselArrows>
                    <a href="#itemCarrousel-2">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <img src={escort.photos[2]} alt="test"/>
                    <a href="#itemCarrousel-1">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </ItemCarrouselArrows>
            </ItemCarrousel>
        </ConteCarrousel>
        <ConteCarrouselController>
            <a href="#itemCarrousel-1">•</a>
            <a href="#itemCarrousel-2">•</a>
            <a href="#itemCarrousel-3">•</a>
        </ConteCarrouselController>
    </Carrousel>
   );
}
 
export default SliderProfile;