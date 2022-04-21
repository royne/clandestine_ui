import {useState, useEffect} from 'react'
import Select from 'react-select';
import { getSelecteds, sendFormData } from '../../settings/escorts'

const FormInfo = ({user}) => {
  const [data, setData] = useState({})
  const escort = user
  const [options, setOptions] = useState({
    categories: [],
    activities: [],
    locations: [],
  })
  useEffect(() =>{
    if (escort) {
      setData({
        id: escort.escort.id,
        username: escort.escort.username,
        price: escort.escort.price,
        age: escort.escort.age,
        sex: escort.escort.sex,
        description: escort.escort.description,
        category_ids: escort.categories,
        location_ids: escort.locations,
        activity_ids: escort.activities
      })
    }
  }, [escort])

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
  }, [user])
  
  if(!escort) return null

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeLocation = (e) => setData({ ...data, location_ids: e })
  const handleChangeCategories = (e) => setData({ ...data, category_ids: e })
  const handleChangeActivities = (e) => setData({ ...data, activity_ids: e })

  const submitForm = async e => {
    e.preventDefault()
    const response = await sendFormData(data)
    if (response.ok) alert("actulizacion exitosa")
  }

  return (
    <div>
      <h1 className='text-center'>soy el formulario</h1>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={data.username} onChange={handleChange} />
          </div>
          <div>
            <label>Sexo</label>
            <select name="sex" onChange={handleChange} value={data.sex}>
              <option value="">Elige</option>
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
              <option value="indefinido">Indefinido</option>
            </select>
          </div>
          <div>
            <label>Edad</label>
            <input type="number" name="age" value={data.age} onChange={handleChange} />
          </div>
          <div>
            <label>Precio</label>
            <input type="number" name="price" value={data.price} onChange={handleChange} />
          </div>
          <div>
            <label>Descripcion</label>
            <textarea name="description" onChange={handleChange} />
          </div>
          
          <div>
            <label>Categorias</label>
            <Select
              value={data.category_ids}
              onChange={handleChangeCategories}
              isMulti={true}
              options={options.categories}
            />
          </div>

          <div>
            <label>locaciones</label>
            <Select
              value={data.location_ids}
              onChange={handleChangeLocation}
              isMulti={true}
              options={options.locations}
            />
          </div>

          <div>
            <label>Servicios</label>
            <Select
              value={data.activity_ids}
              onChange={handleChangeActivities}
              isMulti={true}
              options={options.activities}
            />
          </div>
          
          <div>
            <input type="submit" value="Crea Tu Perfil" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormInfo