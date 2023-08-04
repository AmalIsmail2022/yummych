import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import lux from '../../Images/prod3.png'
import bars from '../../Images/bars.png'
import RightButton from './RightButton';
import LeftButton from './LeftButton';
const ProductGallery = () => {
    const images = [
  {
    original: `${lux}`,
    
  },
  {
    original: `${bars}`,
  
  },
  // {
  //   original:``,
  
  // },
];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-5">
           
            <ImageGallery items={images} 
            defaultImage={lux}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
        
            />
           
        </div>
    );
}

export default ProductGallery;
