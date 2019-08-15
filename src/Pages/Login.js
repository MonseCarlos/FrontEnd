import React from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../components/genericComponents/Navbar'
import Navbarsup from '../components/genericComponents/navbarsup'
import Footer from '../components/genericComponents/Footer'
import Auth from '../Helper/Auth'
import { getToken } from '../services/user'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emial: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    authUser = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        getToken({
            email: email,
            password: password,
        }).then(data => {
            if (data.sucess == false) {
                this.setState({
                    error: true,
                    errorMessage: data.message
                })
            } else {
                this.setState({
                    error: false,
                    errorMessage: ''
                })
                Auth.login(data, () => {
                    this.props.history.push("/my-sesion")
                })
            }
        })
        /*
        Auth.login(() =>{
            this.props.history.push("/")
        })*/
    }

    onChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Navbarsup />
                <Navbar />

                <div id="login">
                    <h3 class="text-center text-white pt-5"></h3>
                    <div class="container">
                        <div id="login-row" class="row justify-content-center align-items-center">
                            <div id="login-column" class="col-md-6">
                                <div id="login-box" class="col-md-12">
                                    <form id="login-form" class="form" action="" method="post">
                                        <h3 class="text-center text-info">Login</h3>
                                        <div class="form-group">
                                            <label for="username" class="text-info">Usario:</label><br/>
                                            <input name ="email" 
                                                type="text"  
                                                id="email"
                                                class="form-control"
                                                value={this.state.email} p
                                                laceholder ="email" 
                                                 onChange={this.onChange}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="text-info">Contraseña:</label><br/>
                                            <input type="text"  id="password" class="form-control"
                                                name = "password" 
                                                value = {this.state.password} 
                                                placeholder="password" 
                                                onChange={this.onChange}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="remember-me" class="text-info">
                                                <a  href="">Olvidaste tu contraseña</a>
                                            </label>
                                            <br/>
                                            <button class="btn btn-info btn-md"
                                                onClick={this.authUser}>Login
                                            </button>
                                        </div>
                                        <div id="register-link" class="text-right">
                                            <a href="#" class="text-info">Registrarme</a>
                                        </div>
                                    </form>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }}
    export default withRouter(Login)



           