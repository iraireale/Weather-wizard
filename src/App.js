import './App.css';
import React, {useState} from 'react';
import { Route} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';
import Form from './components/Form.jsx'

export default function App() { 
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  const [cities, setCities] = useState([]); //Asignando un array vacío y a los estados cities y setCities.}
  function onSearch(ciudad) {
    //fetch es un metodo que sirve para hacer peticiones a un servidor
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    //.then indica qué hacer con la respuesta del servidor (r es la respuesta y parseo la respuesta a json)
    //.then es una promesa
      .then(r => r.json())
      //los .then son como paradas, primero ejecuta una, luego la otra, y se hacen dsp de las peticiones al server
      .then((recurso) => { //recurso ya es la respuesta parseada a json
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      })};
  function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id)); //????
      }

  function onFilter(ciudadId){
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0){
        return ciudad[0];
      }else{
        return null;
      }
    }
  return ( 
    <div className="App"> 
            <Route path='/' render={()=> <Nav onSearch={onSearch} />}/>   
            <Route path='/about' component={About}/> 
            <Route path='/forms' component={Form}/> 
            <Route exact path='/'  render={() => <Cards cities={cities} onClose={onClose}/>}/>            
            <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
    </div>
  );  
}
