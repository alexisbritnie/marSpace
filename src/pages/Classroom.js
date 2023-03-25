import { useState} from "react";
import { Link} from "react-router-dom";
import React from 'react';
import { FaFileUpload } from "react-icons/fa";



export default function Classroom(){
    return (
        <div class = "classroom-full-screen-container">
            <div class = "class-title-bar">
                <h1 class="class-title">CSIS 2101</h1>
            </div>
            <div class = "upload-notes-container">
                <p class="note-name">Enter your note's title</p>
                <p class="note-description">Enter a short description</p>
                <div class = "upload-doc-container">
                    <FaFileUpload class='uploadFileIcon'/>
                </div>
            </div>
            <div class = "classroom-container">
                <p class="note-name">Kumar's Chapter 7 Notes</p>
                <p class="note-description">I think is it important for everyone to know the 
                difference between array and list from Python. I hope you guys like my notes.</p>
                <div class = "class-notes-container">
                </div>
            </div>
        </div>
    )
}