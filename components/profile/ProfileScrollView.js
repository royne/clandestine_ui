import React from 'react'
import HeaderProfile from './grid/HeaderProfile'
import BodyProfileScroll from './scroll/BodyProfileScroll'

const ProfileScrollView = ({ escort, setChangeGrid }) => {
  return (
    <>
      <HeaderProfile escort={escort}/>
      <BodyProfileScroll escort={escort} setChangeGrid={setChangeGrid} />
    </>
  )
}

export default ProfileScrollView