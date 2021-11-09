import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); //Creo el estado city y su método setCity para mi componente SearchBar
  const handleInputChange = (e)=>{
    e.preventDefault(); //para que no se recargue la página
    setCity(e.target.value); // !==setCities, son diferentes métodos!
    //en e, dentro de target, recibo la propiedad value
    //necestio los metodos de los estados, porque esta es la unica forma en la que puedo manipularlos
    //setCity es un metodo de city, y por eso lo utilizo para ir sumandole los valores del evento
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('') //para limpiar el input una vez hecha la búsqueda
    }}>
      {/* Luego, agrego, el listener onChange para ejecutar el evento handleInputChange cuando agregue una nueva ciudad */}
      <input class="form-control mr-sm-2" id='inputSearch' value={city} onChange={(e)=>handleInputChange(e)} type="text" placeholder="Agregar ciudad..."/>
      <input class="btn btn-outline-success my-2 my-sm-0" id='buttonSearch' type="submit" value="Buscar" />
    </form>
  );
}

