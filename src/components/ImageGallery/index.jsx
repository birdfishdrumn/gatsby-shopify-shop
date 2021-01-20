import React,{useState,useEffect} from "react";
import Image from "gatsby-image"
import { ImageGalleryWrapper } from "./style";
import ImageThumbnail from './ImageThumbnail'

export function ImageGallery({ images,selectedVariantImageId }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(images.find(({ id }) => id === selectedVariantImageId) || images[0])

  useEffect(() => {
    setActiveImageThumbnail(images.find(({ id }) => id === selectedVariantImageId) || images[0])
  }, [selectedVariantImageId,images,setActiveImageThumbnail]);

  const handleClick = (image) => {
    setActiveImageThumbnail(image)
  }
  return (
    <ImageGalleryWrapper>
      {/* トップの画像 */}
         <div>
      <Image fluid = {activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map((image) => {
          return (
            <ImageThumbnail key={image.id}
              isActive = {activeImageThumbnail.id === image.id}
              onClick={handleClick} image={image}

            />
         )
       })}
      </div>
    </ImageGalleryWrapper>

  )
}
