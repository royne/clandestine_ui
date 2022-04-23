import React from 'react'
import BodyProfile  from './grid/BodyProfile'
import HeaderProfile from './grid/HeaderProfile'

const ProfileGridView = ({escort}) => {
  return (
    <>
      <HeaderProfile escort={escort} />
      <BodyProfile photos={escort.photos} />
    </>
  )
}

export default ProfileGridView