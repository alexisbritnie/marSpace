import { useState} from "react";
import { Link} from "react-router-dom";
import React from 'react';


export default function Dashboard(){
    return (
        <div class = "full-screen-container">
        <div class="dashboard-container">
            <h1 class="dashboard-title">Dashboard</h1>
            <form class="side-bar-form" >
               

                

                <button 
                type = "submit" 
                class="login-button">Login
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