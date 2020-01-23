import React, { Component } from 'react';

class Login extends Component{

render(){
    return(
        <form>
            <p>
            <label>Username: </label>
            <input type="text" placeholder="Username"></input>
            </p>
            <p>
            <label>Password: </label>
            <input type="text" placeholder="Password"></input>
            </p>

            <button>Sign In</button>
            <p><a href="/signup">Sign up</a></p>
        </form>

    )
        

    
}


}

export default Login;