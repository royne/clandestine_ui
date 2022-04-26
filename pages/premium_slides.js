import {BASE_URL} from '../settings/base'
import GaleryScroll from '../components/GaleryScroll'
import Layout from '../components/layout/Layout'

const premium_slides = ({ escorts }) => {
  return (
    <Layout showBanner={false}>
      <GaleryScroll escorts={escorts} />
    </Layout>
  )
}

export default premium_slides

export async function getStaticProps({ params }) {
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  const response = await fetch(`${BASE_URL}/escorts/randon_premium`)
  const data = await response.json()
  const escorts = shuffle(data)
  return {
    props: {
      escorts
    },
    revalidate: 3600, // In seconds
  }
}