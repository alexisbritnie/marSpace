import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import images from './images/classroom.png';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Profile() {


    

    return (
        <div class="profile-full-screen-container">
            <div className="user-card">
                <div className="profile-pic-square"></div>
                <p className="user-name">Ajoy Kumar</p>
                <p className="user-type">Teacher</p>
            </div>
            <div className="profile-folder">
                <form>
                    <h1 className="about-title">About</h1>
                    <div className="personal-info-box">

                        <label>Name: <input name="myInput" /></label>
                        <label>Major: <input name="myInput" /> </label>
                    </div>

                    <div>
                        User Type:
                        <label>
                            <input type="radio" name="myRadio" value="option1" />
                            Teacher
                        </label>
                        <label>
                            <input type="radio" name="myRadio" value="option2" />
                            Student
                        </label>
                    </div>

                </form>
            </div>
        </div>

    )
}