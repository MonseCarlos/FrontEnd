import React from 'react'
import {withRouter} from 'react-router-dom'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'
import Auth from '../components/Auth'

const BASE_URL = 'http://localhost:4000'

function getToken(data){
    return fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}
class Login extends React.Component  {

    constructor(props){
        super(props)
            this.state ={
                emial: '',
                password: ''
            }
            this.onChange = this.onChange.bind(this)
    }
    
    authUser = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        getToken({
            email: email,
            password: password,
        }).then(data => { 
            if(data.sucess == false){
                this.setState({
                    error: true,
                    errorMessage: data.message
                })
            }else{
                this.setState({
                    error:false,
                    errorMessage:''
                })
                Auth.login(data, ()=>{
                    this.props.history.push("/my-info")
                })
            }
        })
        /*
        Auth.login(() =>{
            this.props.history.push("/")
        })*/
    }

    onChange(e){
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    render(){
    return(
        <div>
            <Navbar />
            <div className="container">
                <h2>
                    Please Login User
                </h2>
                <input type ="text" 
                    name ="email" 
                    value={this.state.email} p
                    laceholder ="email" 
                    onChange={this.onChange}/>
                <input type = "password" 
                    name = "password" 
                    value = {this.state.password} 
                    placeholder="password" 
                    onChange={this.onChange}/>
               <button 
               onClick={this.authUser}
               >Login</button>
               <h1>{this.state.errorMessage}</h1>
            </div>
            <Footer />
        </div>
    )
}}
export default withRouter(Login)
