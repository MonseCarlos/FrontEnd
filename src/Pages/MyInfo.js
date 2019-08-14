import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'

function MyInfo () {
    const  userFullName = () =>{
        const name = localStorage.getItem("user-data")
        return JSON.parse(name);
    }
    return(
        <div>
            <Navbar />
            <div className="container">
                <h2>
                    Welcome {userFullName().name};
                </h2>
                <p>
                    This is Just a demo text. {userFullName().email}
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default MyInfo