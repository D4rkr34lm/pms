import { useState } from "react";

import "./Login.css";

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <div id="main-content">
            <form id="login">
                <h2>Login</h2>
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label>Password</label>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
}

export default Login;