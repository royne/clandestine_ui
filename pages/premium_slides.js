import React from 'react'
import GaleryScroll from '../components/GaleryScroll'
import Layout from '../components/layout/Layout'

const premium_slides = () => {
  return (
    <Layout showBanner={false}>
      <GaleryScroll />
    </Layout>
  )
}

export default premium_slides