import React, {Component} from 'react'
import './styles/carousel.css'

class Carousel extends Component {
render(){
    return(
      
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"> 
      <div class="carousel-inner">
      
        <div class="carousel-item active">
          <img class="d-block w-60" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/68715787_361631521177845_7112451196337520640_o.jpg?_nc_cat=104&_nc_oc=AQmYXxJbl67rOUp7pal694DYjDOPlhJh_x0jhoAjm38ciHbyTS4ao1ZegkcXK4egDZk&_nc_ht=scontent.fgdl3-1.fna&oh=9ec6f18e30022fc7e9914ecfa0feefce&oe=5DE0833F" alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/66385884_346749252666072_2326705623875452928_o.jpg?_nc_cat=111&_nc_oc=AQlX42rHNjtBN75QMDUOF03oQgY8wNI0bhzfTPSSXj4UG1PS2pcCDfMJqqjsu7d14f0&_nc_ht=scontent.fgdl3-1.fna&oh=825ba6e6ad328b1d5faf460fb4a4208a&oe=5DEAF4E4" alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/45407882_247571135917218_5990573066806099968_o.jpg?_nc_cat=104&_nc_oc=AQmc6vLWVGIn8gkt8AH6Lc5mY8ZCtMjlEyoHRHggGQBFu3lOBjZpaKQykrCGe-8b3e0&_nc_ht=scontent.fgdl3-1.fna&oh=29668880ad4d75fac896421ced74d448&oe=5DC7642F" alt="Third slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/57484607_308507249823606_2307028132424581120_o.jpg?_nc_cat=100&_nc_oc=AQkealWPFdyqjP29sbqiqJHqynPqx20X81yLxGA2vPGCzNVy9I3s0VeJDL2qLOiJQ-Y&_nc_ht=scontent.fgdl3-1.fna&oh=36e0010a032c98e2c094d3848da0cca0&oe=5DD74CE6" alt="Third slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/41658976_232611740746491_3082368195772809216_o.jpg?_nc_cat=107&_nc_oc=AQlZKgFGfE8Z2aSIp3DQdFbIEz8v6wMVBkLWI_tKmf3oL3HozQDDfVJXOoIBMaGbNRg&_nc_ht=scontent.fgdl3-1.fna&oh=4dc76a88d27a90a671b48a65a8a68ac0&oe=5DE74082" alt="Third slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/32086685_162945091046490_2797981012192133120_o.jpg?_nc_cat=107&_nc_oc=AQnhS9f0whJwxvD1InLmgw8ULlIJ8ycLb-vomGVSPLF-RRZ3PyN55XXXHSZ-TBoDSyA&_nc_ht=scontent.fgdl3-1.fna&oh=6e2c9f4d34d0e2b255ecf6ca32c65b23&oe=5DD28526" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
    );
}
}
export default Carousel