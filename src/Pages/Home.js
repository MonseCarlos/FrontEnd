import React from 'react'
import Navbarsup from '../components/genericComponents/navbarsup'
import Navbar from '../components/genericComponents/Navbar'
import Carousel from '../components/genericComponents/Carousel'
import Footer from '../components/genericComponents/Footer'
import Navbarsub from '../components/genericComponents/navbarsub'

function Home () {
    return(
        <div>
            
            <Navbarsup class="principal"/>
            <Navbar/>         
            <Carousel/>
            <Navbarsub/>
           
            <Footer />
        </div>
    )
}
export default Home