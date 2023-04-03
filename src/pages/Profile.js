import { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';
import images from './images/classroom.png';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Profile(){

    return (
        <div class = "profile-full-screen-container">
            <div className="user-card">
                <div className="profile-pic-square"></div>
                <h1 className="user-name">User Name</h1>
                <h1 className="user-type">user type</h1>
                <h1 className="rating">rating</h1>
            </div>
            <div className="profile-folder">
                <h1 className="about-title">About</h1>
                <label>
                    Name: <input name="myInput" /><FaEye class='eyeIcon'/><FaEyeSlash class='eyeSlashIcon'/>
                </label>
                <label>
                    Major: <input name="myInput" /><FaEye class='eyeIcon'/><FaEyeSlash class='eyeSlashIcon'/>
                </label>
                <label>
                    Minor(s): <input name="myInput" /><FaEye class='eyeIcon'/><FaEyeSlash class='eyeSlashIcon'/>
                </label>
                <label>
                    Name: <input name="myInput" /><FaEye class='eyeIcon'/><FaEyeSlash class='eyeSlashIcon'/>
                </label>

                <div>
                
                    Student Status:
                    <label>
                        <input type="radio" name="myRadio" value="option1" />
                         Freshman
                    </label>
                     <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Sophmore
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option3" />
                        Junior
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option3" />
                        Senior
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option3" />
                        Graduate
                    </label>
                </div>

            </div>
        </div>
    
    )
}