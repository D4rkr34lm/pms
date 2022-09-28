import { useState } from "react";
import Cookies from "universal-cookie";

import "./Login.css";

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [wrongInput, setWrongInput] = useState("hidden");

    const cookies = new Cookies();
    
    function loginHandler(event){
        event.preventDefault();
        const data = JSON.stringify({
            username : username,
            password : password
        });
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        };

        let status;
        fetch("/account/login", options)
            .then(response => {
                status = response.status;
                return response.text();
            })
            .then(data => {
                if(status === 200){
                    props.setLoggedIn(true);
                    cookies.set("token", data)
                }
                else{
                    setWrongInput("visible");
                }
            });

    }

    return(
        <div id="main-content-login">
            <form id="login" onSubmit={loginHandler}>
                <h2>Login</h2>
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <p  id="login-error-message" style={{visibility: wrongInput}}>This combination of username and password does not exist</p>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
}

export default Login;