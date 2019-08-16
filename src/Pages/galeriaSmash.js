import React from 'react'
import Navbarsup from '../components/genericComponents/navbarsup'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'

import './styles/mygalery.css'

function galeriaSmash () {
    return(
      <div>
        <div class="tab" >

        </div>
        <Navbarsup/>
        <Navbar/> 

        <div class="row">
          <div class="col-md-4">
            <div class="thumbnail">
                <a href="/w3images/lights.jpg">
                  <img src="/w3images/lights.jpg" alt="Lights" style="width:100%"/>
                  <div class="caption">
                    <p>Lorem ipsum...</p>
                  </div>
                </a>
            </div>
        </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src="/w3images/nature.jpg" alt="Nature" style="width:100%"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/fjords.jpg">
        <img src="/w3images/fjords.jpg" alt="Fjords" style="width:100%"/>
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
</div>
<Footer/>
</div>
)}

export default galeriaSmash