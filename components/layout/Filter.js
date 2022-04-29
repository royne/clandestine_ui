import React from 'react';


const FilterSearch = () => {
  return ( 
    <div style={{margin: '10%'}}>
      <form>
        <div>
          <label>Locacion</label>
        </div>
        <select name="location" id="location" style={{width: "100%", height: "35px", marginBottom: "20px"}}>
          <option value="Bogota">Bogota</option>
          <option value="Medellin">Medellin</option>
          <option value="Cali">Cali</option>
        </select>

        <div>
          <label>Edad</label>
        </div>
        <select name="age" id="age" style={{width: "100%", height: "35px", marginBottom: "20px"}}>
          <option value="1">22-25</option>
          <option value="2">25-30</option>
          <option value="3">30-50</option>
        </select>

        <div>
          <label>Servicios</label>
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

        <div>
          <label>Lugar de atencion</label>
        </div>
        <select name="age" id="age" style={{width: "100%", height: "35px", marginBottom: "50px"}}>
          <option value="1">22-25</option>
          <option value="2">25-30</option>
          <option value="3">30-50</option>
        </select>

        <div>
          <button style={{width: "100%", height: "35px", marginBottom: "20px", color: "var(--white)", background: "var(--black)"}}>Filtrar Perfiles</button>
        </div>
      </form>
    </div>
    
   );
}
 
export default FilterSearch;