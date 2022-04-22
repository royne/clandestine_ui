import {useRouter} from 'next/router'
import Layout from '../../components/layout/Layout'
import { BodyProfile } from '../../components/profile/BodyProfile'
import HeaderProfile from '../../components/profile/HeaderProfile'
import useGetEscort from '../../hooks/useGetEscort'

const Profile = () => {
  const router = useRouter()
  const { query: { id } } = router
  const escort = useGetEscort(id)

  if (Object.keys(escort).length === 0) return null
  return (
    <Layout>
      <HeaderProfile escort={escort}/>
      <BodyProfile photos={escort.photos}/>
    </Layout>
  )
}

export default Profile