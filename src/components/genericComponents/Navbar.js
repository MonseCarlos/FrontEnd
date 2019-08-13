import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import Auth from '../Auth';
import Logout from './Logout'
import { withRouter } from 'react-router-dom';
class Navbar extends Component {


  verifyIfItsAuth() {
    if (Auth.isAuthenticated()) {
      return <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mytasks">Tasks Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/my-info">My Info</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    } else {
      return <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span></Link>
        </li>
        <li>
          <Link className="nav-link" to="/Gerias">Nosotros</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Nosotros">Galerias</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Nosotros">Servicios</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Nosotros">Lista para tu sesion</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Nosotros">Contacto</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
      </ul>
    }
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right"
          type="button" data-toggle="collapse"
          data-target="#navbarCollapse" aria-controls="navbarCollapse"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" to="/"></Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {this.verifyIfItsAuth()}
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar