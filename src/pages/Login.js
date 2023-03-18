import { useState} from "react";
import { Link} from "react-router-dom";
import React from 'react';


export default function Login(){

    return(
        <div class = "full-screen-container">
        <div class="login-container">
            <h1 class="login-title">Log in</h1>
            <form class="form" >
                <div class="input-group success">
                    {/* <label for="email"> Email</label> */}
                    <input type="email" name="username" id = "username" placeholder="Email">
                    </input>
                    <span class="msg">Valid Email</span>
                </div>

                <div class="input-group error">
                    {/*<label for="password"> Password</label>*/}
                    <input 
                    type="password" name="password" id = "password" placeholder="Password">
                    </input>
                    <span class="msg">Incorrect Password</span>
                </div>

                <button 
                type = "submit" 
                class="login-button">Log in
                </button>

                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/signup">Signup</Link> now!
                </div>
            </form>
        </div>
      </div>
    )
}