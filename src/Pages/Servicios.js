import React from 'react'
import Navbarsup from '../components/genericComponents/navbarsup'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'
import './styles/servicios.css'

function Servicios () {
    return(
        <div>
            <div class="tab" >

            </div>
            <Navbarsup/>
            <Navbar/>  
            <div class="tab">
                <div class ="fonttitle">
                    Paquetes sesion embarazo
                </div>
            </div>       
            <div class="gallery" id="gallery">
                <div class="mb-3 pics animation all 2">        
                        <img class="img-fluid"  src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/66347197_346748145999516_4321035200571113472_o.jpg?_nc_cat=108&_nc_oc=AQkevcsUybuHL5furOkVhJFx8x1pr86SnNCSbzastX9KnSILwZUUixe9hb7ZeKAO45M&_nc_ht=scontent.fgdl3-1.fna&oh=3d2aec5155936b38819d30c0aa55615e&oe=5DE530EF" />             
                </div>

                <div class="mb-3 pics animation all 2">
                    
                        <img class="img-fluid"  src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/66322598_346449096029421_2138991522698231808_o.jpg?_nc_cat=107&_nc_oc=AQn8HkcHdjA480wffBCW1UmCBFZeG2UrRYdl2FtFS0UtjfiF8J74z8G-OFJQrf_kXhU&_nc_ht=scontent.fgdl3-1.fna&oh=298b6a610250db15484fb1f5e6ac035f&oe=5DDB3481" />
                        
                </div>

                <div class="mb-3 pics animation all 2">
                   
                        <img class="img-fluid"  src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/66502768_346346629373001_1966135349780414464_o.jpg?_nc_cat=106&_nc_oc=AQlKVdv6Xlzpo21Qce7XUITwjsxW3hKvdkOYqAADJcB2zj7ZEs59iEkkmGyJxUKeHVU&_nc_ht=scontent.fgdl3-1.fna&oh=d5f907acb9d318c098278b7f297d0bb8&oe=5DE7BB87" />
                     
                </div>

            </div>
            <div class="tab">
                <div class ="fonttitle">
                    Paquetes SmashCake
                </div>
            </div> 
            <div class="tab">
                <div class ="fonttitle">
                    Paquetes Milk-Bath
                </div>
            </div> 
            <Footer />
        </div>
    )
}
export default Servicios
