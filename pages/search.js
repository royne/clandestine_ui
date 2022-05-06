import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Layout from '../components/layout/Layout'
import { BASE_URL } from '../settings/base'
import Card from '../components/layout/Card'
import { ContainerGalery } from '../components/ui/home/Galery'
import {buildQuery} from '../helpers/common'

const search = () => {
  const [escorts, setEscorts] = useState([])
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    const getData = async () => {
      const str = buildQuery(query, true)

      const url = `${BASE_URL}/search${str}`
      console.log(url);
      const response = await fetch(url)
      const data = await response.json()
      setEscorts(data)
    } 
    getData()
  }, [query])

  return (
    <Layout navbar={false}>
      <ContainerGalery>
        {escorts && escorts.map(elm => <Card element={elm} key={elm.id} />)}
      </ContainerGalery>
    </Layout>
  )
}

export default search