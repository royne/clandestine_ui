import React from 'react'
import { BtnGridPhoto } from "../ui/escort_book/PhotosEdit"

const BtnGridPhotos = ({setGetPhotos}) => {

  const handlePhotos = async (e) => {
    const arrayPhotos = Array.from(e.target.files)
    setGetPhotos(arrayPhotos)
  }

  return (
    <BtnGridPhoto encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        multiple={true}
        name="photos"
        id="photos_containt_profile"
        onChange={handlePhotos} />
      <label htmlFor="photos_containt_profile"><img src="/icons/add_photo.png" className="ico_photo" /></label>
    </BtnGridPhoto>
  )
}

export default BtnGridPhotos