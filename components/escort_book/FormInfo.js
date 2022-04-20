import React from 'react'

const FormInfo = () => {

  const submitForm = () => {

  }
  const handleChange = () => {

  }

  return (
    <div>
      <h1 className='text-center'>soy el formulario</h1>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
          <div>
            <label>Sexo</label>
            <select name="sex">
              <option value="0">Mujer</option>
              <option value="1">Hombre</option>
              <option value="2">Indefinido</option>
            </select>
          </div>
          <div>
            <label>Edad</label>
            <input type="number" name="age" onChange={handleChange} />
          </div>
          <div>
            <span>Celular: 310 2887735</span>
          </div>

          <div>
            <label>Categorias</label>
            <select name="categories">
              <option value="0">Mujer</option>
              <option value="1">Hombre</option>
              <option value="2">Indefinido</option>
            </select>
          </div>

          <div>
            <label>locaciones</label>
            <select name="categories">
              <option value="0">Mujer</option>
              <option value="1">Hombre</option>
              <option value="2">Indefinido</option>
            </select>
          </div>

          <div>
            <label>Servicios</label>
            <select name="categories">
              <option value="0">Mujer</option>
              <option value="1">Hombre</option>
              <option value="2">Indefinido</option>
            </select>
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