import React from 'react'
import Navbarsup from '../components/genericComponents/navbarsup'
import Navbar from '../components/genericComponents/Navbar'
import Carousel from '../components/genericComponents/Carousel'
import Footer from '../components/genericComponents/Footer'

function Home () {
    return(
        <div>
            
            <Navbarsup/>
            <Navbar/>
          
           
            <Carousel/>
            <div className="container">
                <h2>
                    Welcome
                </h2>
                <p>
                    This is Just a demo text.
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default Home