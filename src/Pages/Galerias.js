import React from 'react'
import Navbarsup from '../components/genericComponents/navbarsup'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'
import './styles/mygalery.css'

function MyGalery () {
    return(
        <div>
            
            <Navbarsup/>
            <Navbar/>         
            <div class="gallery" id="gallery">
                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/69167090_362089231132074_5546378710011084800_n.jpg?_nc_cat=110&_nc_oc=AQmEmriYLmRRqEe3IAQ4bgSEtwWcsTwl9j2Q1JhfrbEmoSXozMZUWod-qgKzohdn48k&_nc_ht=scontent.fgdl3-1.fna&oh=f27d5201a90afe59b2d115e25950a096&oe=5DE79BB0" alt="Card image cap"/>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/62159924_332205264120471_722322037858631680_n.jpg?_nc_cat=102&_nc_oc=AQn8tnpaBujnlT__4LgtpBxbAZ7qCFyN7UDO6HL0SqLwmSvsBakJieU7MzIVXJY2dkQ&_nc_ht=scontent.fgdl3-1.fna&oh=e6a1bf65b37468963423799ed1a5d0e9&oe=5E1273E8" alt="Card image cap"/>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/54257031_297225254285139_4831744633547522048_n.jpg?_nc_cat=110&_nc_oc=AQmGN-4TSnAOiRSZkEATQjUt0SA1lRw8piuS5RrvsMsIzwdG2iORM8xStYJlSY0THkY&_nc_ht=scontent.fgdl3-1.fna&oh=936767d664e782c134782bad2955ba35&oe=5E11F41D" alt="Card image cap"/>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/47443967_258111494863182_2772110435598467072_o.jpg?_nc_cat=102&_nc_oc=AQk4S45L-4r0Sd-a3apWfYLmxa4q9FCUp9MzV5DUJHWcZXYF_fF5FxPoOrfYVryO1uA&_nc_ht=scontent.fgdl3-1.fna&oh=202c36733c299ddd9bfccc6546fce08b&oe=5DCE50BE" alt="Card image cap"/>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/41658976_232611740746491_3082368195772809216_o.jpg?_nc_cat=107&_nc_oc=AQlZKgFGfE8Z2aSIp3DQdFbIEz8v6wMVBkLWI_tKmf3oL3HozQDDfVJXOoIBMaGbNRg&_nc_ht=scontent.fgdl3-1.fna&oh=4dc76a88d27a90a671b48a65a8a68ac0&oe=5DE74082" alt="Card image cap"/>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/39058013_217145225626476_8324032930481438720_n.jpg?_nc_cat=108&_nc_oc=AQn-WIdnh0KzTcTBk5zFExukFE6KULmTSfTHpd_gFg1dplAg6v6wy2fes2gF8WkXfzA&_nc_ht=scontent.fgdl3-1.fna&oh=bab0fa41fe0fb753815bd15b301ab7e2&oe=5DD33474" alt="Card image cap"/>
                </div>


            </div>
            <Footer />
        </div>
    )
}
export default MyGalery



