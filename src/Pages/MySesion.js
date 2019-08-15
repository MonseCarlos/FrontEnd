import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'
import Paquetes from '../components/Paquetes'
import {getSesion} from  '../services/sesionservice'
import {getPaquete} from '../services/paquetesservice'

function Name (){
  const  userFullName = () =>{
    const name = localStorage.getItem("user-data")
    return JSON.parse(name);
    }
}

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
        return getPaquete(this.state.listsesion)
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
    console.log(this.state.listsesion)
  }
 
  userFullName(){
    this.Name()
  }

    render(){
    return(

        <div>
            <Navbar />
            <h2>
                   Bienvenido {this.userFullName.name};
            </h2>
            <Paquetes title='Sesiones' paquete={this.state.paquete}/>
            <Footer />
        </div>
    )}
}
export default MySesion

