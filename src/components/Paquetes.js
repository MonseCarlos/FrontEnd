import React from 'react'

function Paquetes(props){
    const items = props.tasks.map((task, index) => (
        <div key={index}>
          {task.todo_description}
          <button className='btn btn-primary '>Galeria</button>
          <button className='btn btn-primary miStyle'>>Entrega</button>
          </div>))
      return (
        <div>
          <br></br>
          <h2>{props.title}</h2>
          <div className="row">
            <div id="todo-list" className="col-sm">
              {items}
            </div>
          </div>
        </div>
      )
    }

export default Paquetes
}
<div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">{this.state.paquete[3]}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>