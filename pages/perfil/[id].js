import {useRouter} from 'next/router'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import ProfileGridView from '../../components/profile/ProfileGridView'
import ProfileScrollView from '../../components/profile/ProfileScrollView'
import useGetEscort from '../../hooks/useGetEscort'

const Profile = () => {
  const [changeGrid, setChangeGrid] = useState(false)
  const router = useRouter()
  const { query: { id } } = router
  const escort = useGetEscort(id)

  if (Object.keys(escort).length === 0) return null
  return (
    <Layout>
      {!changeGrid ? <ProfileGridView escort={escort} setChangeGrid={setChangeGrid} /> : <ProfileScrollView escort={escort} setChangeGrid={setChangeGrid} />}
    </Layout>
  )
}

export default Profile