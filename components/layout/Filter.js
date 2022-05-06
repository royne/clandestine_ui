import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Select from 'react-select';
import { getSelecteds } from '../../settings/escorts'
import { BoxIputs } from '../ui/escort_book/FormEscort'
import {buildQuery} from '../../helpers/common'


const FilterSearch = () => {
  const [data, setData] = useState({})
  const [options, setOptions] = useState({
    categories: [],
    activities: [],
    locations: [],
  })
  const router = useRouter() 

  const handleChangeLocation = (e) => setData({ ...data, location_ids: e })
  const handleChangeCategories = (e) => setData({ ...data, category_ids: e })
  const handleChangeActivities = (e) => setData({ ...data, activity_ids: e })

  useEffect(() => {
    const requestSelecteds = async () => {
      const reponseSelect = await getSelecteds()
      setOptions({
        ...options,
        categories: reponseSelect.categories,
        activities: reponseSelect.activities,
        locations: reponseSelect.locations,
      })
    }
    requestSelecteds()
  }, [])

  const getDataFilters = e => {
    e.preventDefault()
    const query = buildQuery(data)
    return router.push(`/search${query}`) 
  }

  return ( 
    <div style={{margin: '10%'}}>
      <form onSubmit={getDataFilters}>
        <div>
          <label>Edad</label>
        </div>
        <select name="age" id="age" style={{width: "100%", height: "35px", marginBottom: "20px"}}>
          <option value="1">22-25</option>
          <option value="2">25-30</option>
          <option value="3">30-50</option>
        </select>

        <div>
          <label>Precio</label>
        </div>
        <select name="age" id="age" style={{width: "100%", height: "35px", marginBottom: "20px"}}>
          <option value="1">22-25</option>
          <option value="2">25-30</option>
          <option value="3">30-50</option>
        </select>

        <BoxIputs>
          <label>Categorias</label>
          <Select
            onChange={handleChangeCategories}
            isMulti={true}
            options={options.categories}
          />
        </BoxIputs>

        <BoxIputs>
          <label>Lugar de atencion</label>
          <Select
            onChange={handleChangeLocation}
            isMulti={true}
            options={options.locations}
          />
        </BoxIputs>

        <BoxIputs>
          <label>Servicios</label>
          <Select
            onChange={handleChangeActivities}
            isMulti={true}
            options={options.activities}
          />
        </BoxIputs>

        <div>
          <input type='submit' style={{ width: "100%", height: "35px", marginBottom: "20px", color: "var(--white)", background: "var(--black)" }} value="Filtrar Perfiles" />
        </div>
      </form>
    </div>
    
   );
}
 
export default FilterSearch;