import React from 'react'
import {withRouter} from 'react-router-dom'
import Navbar from '../components/genericComponents/Navbar'
import Navbarsup from '../components/genericComponents/navbarsup'
import Footer from '../components/genericComponents/Footer'
import Auth from '../Helper/Auth'
import {getToken} from '../services/user'


function Nosotros () {
    return(
        <div>
            <Navbarsup/>
            <Navbar />
            <div className="container">
               
            </div>
            <Footer />
        </div>
    )
}
export default Nosotros