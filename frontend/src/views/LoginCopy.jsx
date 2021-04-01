import React, { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        console.clear();
        console.log("HandleSubmit")
        // event.preventDefault();
        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                })
            })
        
        // console.log('MY TOKEN :', tokenFetch);
        // const tokenObject = await tokenFetch.json();
        // localStorage.setItem('token', tokenObject.token)
        // console.log('FINAL TOKEN :',tokenObject);
        // if (tokenObject) {
        //     return history.push("/");
        // }
    };



        return (
            <form >
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <label>E-mail</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}    >
                    </input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}    >
                    </input>
                </div>

                <div>
                    <button className="btn btn-primary btn-block" onClick={handleSubmit}>Login</button>
                </div>
            </form>
        )
    
}

export default Login