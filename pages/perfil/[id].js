import {useRouter} from 'next/router'
import Layout from '../../components/layout/Layout'
import ProfileGridView from '../../components/profile/ProfileGridView'
import ProfileScrollView from '../../components/profile/ProfileScrollView'
import useGetEscort from '../../hooks/useGetEscort'

const Profile = () => {
  const router = useRouter()
  const { query: { id } } = router
  const escort = useGetEscort(id)

  if (Object.keys(escort).length === 0) return null
  return (
    <Layout>
      {/* <ProfileGridView escort={escort} /> */}
      <ProfileScrollView escort={escort} />
    </Layout>
  )
}

export default Profile