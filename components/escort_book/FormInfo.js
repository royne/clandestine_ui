import {useState, useEffect} from 'react'
import Select from 'react-select';
import { getSelecteds, sendFormData } from '../../settings/escorts'
import { BoxForm, BoxGroupInputs, BoxTextarea, BoxIputs, InpurButtom, BoxIn } from '../ui/escort_book/FormEscort'
import { FormInput } from "../ui/home/FormModal"

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
    <BoxForm>
      <h1 className='text-center' style={{textAlign: "center"}}>Soy el formulario</h1>
      <div>
        <form onSubmit={submitForm}>
          <BoxIputs>
            <div>
              <label>Username</label>
            </div>
            <FormInput type="text" name="username" value={data.username} onChange={handleChange} />
          </BoxIputs>
          <BoxGroupInputs>
            <BoxIn>
              <div>
                <label>Sexo</label>
              </div>
              <select name="sex" onChange={handleChange} value={data.sex}>
                <option value="">Elige</option>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="indefinido">Indefinido</option>
              </select>
            </BoxIn>
            <BoxIn>
              <div>
                <label>Edad</label>
              </div>
              <FormInput type="number" name="age" value={data.age} onChange={handleChange} />
            </BoxIn>
            <div>
              <div>
                <label>Precio</label>
              </div> 
              <FormInput type="number" name="price" value={data.price} onChange={handleChange} />
            </div>
          </BoxGroupInputs>
          
          <BoxIputs>
            <div>
              <label>Descripcion</label>
            </div>
            <BoxTextarea name="description" onChange={handleChange} value={data.description}/>
          </BoxIputs>
          
          <BoxIputs>
            <label>Categorias</label>
            <Select
              value={data.category_ids}
              onChange={handleChangeCategories}
              isMulti={true}
              options={options.categories}
            />
          </BoxIputs>

          <BoxIputs>
            <label>locaciones</label>
            <Select
              value={data.location_ids}
              onChange={handleChangeLocation}
              isMulti={true}
              options={options.locations}
            />
          </BoxIputs>

          <BoxIputs>
            <label>Servicios</label>
            <Select
              value={data.activity_ids}
              onChange={handleChangeActivities}
              isMulti={true}
              options={options.activities}
            />
          </BoxIputs>
          
          <InpurButtom>
            <input type="submit" value="Crea Tu Perfil" />
          </InpurButtom>
        </form>
      </div>
    </BoxForm>
  )
}

export default FormInfo