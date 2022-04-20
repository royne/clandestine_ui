import {useState} from 'react'
import FormInfo from '../../components/escort_book/FormInfo'
import Nav from '../../components/escort_book/Nav'
import PhotosEdit from '../../components/escort_book/PhotosEdit'
import Layout from '../../components/layout/Layout'

const EscortBook = () => {
  const [tab, setTab] = useState(2)
  return (
    <Layout>
      <Nav setTab={setTab} tab={tab}/>
      {tab == 0 && <p>soy perfil</p>}
      {tab == 1 && <PhotosEdit />}
      {tab == 2 && <FormInfo />}
    </Layout>
  )
}

export default EscortBook