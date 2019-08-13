class Auth {
    constructor() {
        this.authenticated = false
    }
    login(data,callback) {
        // fetch user, set JWT, user-id;
        localStorage.setItem('user-data', JSON.stringify(data.username))
        localStorage.setItem('token', data.token)
        this.authenticated = true;
        callback() // callback it's a function
    }
    logout(callback) {
        // clean storage, erase JWT, erase user data.
        localStorage.removeItem('user-data')
        localStorage.removeItem('token')
        this.authenticated = false;
        callback()
    }
    isAuthenticated(){
        if(localStorage.getItem('token')){
            this.authenticated = true;
        }
        // validate if the local storage data is available.
        return this.authenticated;
    }
}
export default new Auth()