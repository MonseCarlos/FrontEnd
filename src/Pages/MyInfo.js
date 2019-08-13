import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'

function MyInfo () {
    const  userFullName = () =>{
        const name = localStorage.getItem("user-data")
        return JSON.parse(name);
    }
    return(
        <div>
            <Navbar />
            <Jumbotron title="User's Info" subtiltle="Personal Information" />
            <div className="container">
                <h2>
                    Welcome {userFullName().user_name};
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