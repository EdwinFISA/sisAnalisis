import Table from "../components/Table"
import React, {  useState, useEffect } from 'react';

function Second(){

  const [personaje, setPersonaje ] = useState([]);
  const initialurl= "https://rickandmortyapi.com/api/character";
  
  const fetchPersonajes =(url) =>{
    fetch(url )
    .then(response=>response.json())
    .then (data => setPersonaje(data.results))
    .catch(error => console.log(error));

  };
  useEffect(()=>{
   fetchPersonajes(initialurl);
  },[])

  return (
    // //Contiene el menu y la tabla
<div className="Second">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard- API consumido desde Fetch</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
              This week
            </button>
          </div>
        </div>
        <Table personaje={personaje} />
</div>
  );  
}

export default Second;