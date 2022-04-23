import React from 'react'
import HeaderProfile from './grid/HeaderProfile'
import BodyProfileScroll from './scroll/BodyProfileScroll'

const ProfileScrollView = ({ escort }) => {
  return (
    <>
      <HeaderProfile escort={escort}/>
      <BodyProfileScroll escort={escort} />
    </>
  )
}

export default ProfileScrollView