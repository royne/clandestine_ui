import React from 'react'
import { BtnProfilePhoto } from "../ui/escort_book/PhotosEdit"

const BtnProfilePhotos = ({ setGetDataPhotos }) => {

  const handlePhotos = async (e) => setGetDataPhotos(e.target.files[0])

  return (
    <BtnProfilePhoto>
      <input
        type="file"
        accept="image/*"
        name="avatar"
        id="photos_containt_profile_btn"
        onChange={handlePhotos} />
      <label htmlFor="photos_containt_profile_btn"><img src="/icons/add_photo.png" className="ico_photo" /></label>
    </BtnProfilePhoto>
  )
}

export default BtnProfilePhotos