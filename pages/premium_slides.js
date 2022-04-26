import {useState, useEffect} from 'react'
import {BASE_URL} from '../settings/base'
import GaleryScroll from '../components/GaleryScroll'
import Layout from '../components/layout/Layout'

const premium_slides = ({ data }) => {
  const [escorts, setEscorts] = useState([])
  
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  useEffect(() => {
    if (data) setEscorts(shuffle(data))
  }, [])

  return (
    <Layout showBanner={false}>
      <GaleryScroll escorts={escorts} />
    </Layout>
  )
}

export default premium_slides

export async function getStaticProps({ params }) {
  const response = await fetch(`${BASE_URL}/escorts/randon_premium`)
  const data = await response.json()
  return {
    props: {
      data
    },
    revalidate: 3600, // In seconds
  }
}