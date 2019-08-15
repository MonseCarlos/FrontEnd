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
        console.log(listsesion)
        this.setState({
          listsesion: listsesion
        })
        console.log(this.state.listsesion)
        // for loop 
        getPaquete(this.state.listsesion[0])
      .then(paquete =>{ console.log(paquete)
        this.setState({
          paquete: paquete
          //paquete: Object.values(paquete.message)
        })
        console.log(this.state.paquete);
      })
      })
      
       
     
  }
  componentDidMount () {
    this.loadsesion()
  }
 

    render(){
    return(
        <div>
            <Navbar />

            <Paquetes title='Sesiones' paquete={this.state.paquetes}/>
            <Footer />
        </div>
    )}
}
export default MySesion

