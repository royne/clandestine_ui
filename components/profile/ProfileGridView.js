import React from 'react'
import BodyProfile  from './grid/BodyProfile'
import HeaderProfile from './grid/HeaderProfile'

const ProfileGridView = ({ escort, setChangeGrid}) => {
  return (
    <>
      <HeaderProfile escort={escort} />
      <BodyProfile photos={escort.photos} setChangeGrid={setChangeGrid}/>
    </>
  )
}

export default ProfileGridView