import React, {Component} from 'react'
import './styles/carousel.css'

class Carousel extends Component {
render(){
    return(
      
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel"> 
      <div class="carousel-inner">
      
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/68715787_361631521177845_7112451196337520640_o.jpg?_nc_cat=104&_nc_oc=AQmYXxJbl67rOUp7pal694DYjDOPlhJh_x0jhoAjm38ciHbyTS4ao1ZegkcXK4egDZk&_nc_ht=scontent.fgdl3-1.fna&oh=9ec6f18e30022fc7e9914ecfa0feefce&oe=5DE0833F" alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/66385884_346749252666072_2326705623875452928_o.jpg?_nc_cat=111&_nc_oc=AQlX42rHNjtBN75QMDUOF03oQgY8wNI0bhzfTPSSXj4UG1PS2pcCDfMJqqjsu7d14f0&_nc_ht=scontent.fgdl3-1.fna&oh=825ba6e6ad328b1d5faf460fb4a4208a&oe=5DEAF4E4" alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/45407882_247571135917218_5990573066806099968_o.jpg?_nc_cat=104&_nc_oc=AQmc6vLWVGIn8gkt8AH6Lc5mY8ZCtMjlEyoHRHggGQBFu3lOBjZpaKQykrCGe-8b3e0&_nc_ht=scontent.fgdl3-1.fna&oh=29668880ad4d75fac896421ced74d448&oe=5DC7642F" alt="Third slide"/>
        </div>
      </div>
    </div>
    );
}
}
export default Carousel