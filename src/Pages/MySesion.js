import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'
import Paquetes from '../components/Paquetes'
import {getSesion} from  '../services/sesionservice'
import {getPaquete} from '../services/paquetesservice'


class MySesion extends React.Component  {
   constructor(props){
     super(props)
     this.state ={
       listsesion:[],
       paquete:[]
     }
   }
  
  loadsesion () {
    getSesion()
      .then(listsesion => {
        this.getPaquete2(listsesion)
      })
  }
 
  getPaquete2(sesion){
   getPaquete(sesion)
      .then(paquete =>{ 
     console.log(paquete) 
        this.setState(state => {
          const conpaquete=  state.paquete.concat(paquete.message);
          return {
            paquete: conpaquete,
            listsesion: sesion
          }
          //paquete: Object.values(paquete.message)
        })
        console.log(this.state.paquete);
      })
   }
  
  componentDidMount () {
    this.loadsesion()
    console.log(this.state.listsesion)
  }
 

    render(){
    return(

        <div>
            <Navbar />
            
            <Paquetes title='Sesiones' paquete={this.state.paquete} sesion={this.state.listsesion}/>
            <Footer />
        </div>
    )}
}
export default MySesion

