import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import MyInfo from './Pages/MyInfo'
import Mysesion from './Pages/MySesion'
import MyGalery from './Pages/Galerias'
import Servicios from './Pages/Servicios'
import galeriaSmash from './Pages/galeriaSmash'
import galeriaMaternidad from './Pages/maternidad'
import Contact from './Pages/Contact'
import './App.css'
import Login from './Pages/Login';
import {ProtectedRoute} from './components/ProtectedRoute'
import Logout from './components/genericComponents/Logout';

class App extends React.Component {
 
  render () {

    return(
      <HashRouter basename="/">
      <div className="backgrounds">
      
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path ="/Nosotros" component={Nosotros} />
      <Route exact path ="/Galeria" component={MyGalery}/>
      <Route exact path = "/Contacto" component = {Contact}/>
      <Route exact path = "/Servicios" component = {Servicios}/>
      <Route exact path = "/Galeria/galeriaSmash" component = {galeriaSmash}/>
      <Route exact path = "/Galeria/galeriamaternidad" component = {galeriaMaternidad}/>
      <Route exact path="/mytasks/add" component={() => <h1>Add a task</h1>} />
      <Route exact path="/mytasks/view/:id" component={() => <h1>A View task page</h1>} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout-page" render={() => Logout} />
      <ProtectedRoute exact path="/my-info" component={MyInfo} />
      <ProtectedRoute exact path="/my-sesion" component={Mysesion}/>
      <Route exact path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      
      </div>
      </HashRouter>
    )
  }
}

export default App
