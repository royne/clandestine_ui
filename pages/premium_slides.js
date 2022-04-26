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
  const response = await fetch(`${BASE_URL}/escorts/randon_premium`)
  const escorts = await response.json()
  return {
    props: {
      escorts
    },
    revalidate: 3600, // In seconds
  }
}