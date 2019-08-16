import React from 'react'
import {Link} from 'react-router-dom'


function Paquetes(props){

  console.log(props)

  const items = props.paquete.map((message) => (
          <div class ="card-body">
          <h5 class="card-title">{message.name}</h5>
          <p class="card-text">Duracion de la sesion: {message.time}</p>
          <p class="card-text">Cantidad de fotos impresas: {message.qphotos}</p>
          <p class="card-text">{message.description}</p>
          
          <button type= "button" className='btn btn-primary'><Link to={`/mysesion/view/${message.qphotos}`}>Galeria</Link></button>
          <button type="button" className='btn btn-primary'><Link to={`/mysesion/view/${message.qphotos}`}>Entrega</Link></button>
        </div>
      ))

      return (
        <div class="card">
          
               {items}
              
         
        </div>
      )
    }

export default Paquetes

