import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'



function MySesion () {
    const  userFullName = () =>{
        const name = localStorage.getItem("user-data")
        return JSON.parse(name);
    }
    return(
        <div>
            <Navbar />
            <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default MySesion

function TaskList(props) {

    const items = props.tasks.map((task, index) => (
      <div key={index}>
        {task.todo_description}
        <button className='btn btn-danger ' onClick={props.onDeleteTask.bind(null, task._id)}>Delete</button>
        <button className='btn btn-primary miStyle'><Link to={`/mytasks/view/${task._id}`}>View</Link></button>
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