import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import ProfileGridView from '../../components/profile/ProfileGridView'
import ProfileScrollView from '../../components/profile/ProfileScrollView'
import useGetEscort from '../../hooks/useGetEscort'
import { setCounter } from '../../settings/escorts'

const Profile = () => {
  const [changeGrid, setChangeGrid] = useState(false)
  const [viewCount, setViewCount] = useState(true)
  const router = useRouter()
  const { query: { id } } = router
  const escort = useGetEscort(id)

  useEffect(() => {
    if (viewCount){
      setCounter(id)
      setViewCount(false)
    }
  },[])

  if (Object.keys(escort).length === 0) return null
  return (
    <Layout>
      {!changeGrid ? <ProfileGridView escort={escort} setChangeGrid={setChangeGrid} /> : <ProfileScrollView escort={escort} setChangeGrid={setChangeGrid} />}
    </Layout>
  )
}

export default Profile