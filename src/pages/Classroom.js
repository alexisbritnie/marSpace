import { useState} from "react";
import { Link} from "react-router-dom";
import React from 'react';
import { FaArrowCircleUp, FaFileUpload } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";



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
                <FaArrowCircleUp class='arrowUp'/>
                <FaArrowCircleDown class='arrowDown'/>
                <p class="comment-button">Comment</p>
            </div>
            <div class="discussion-box-container">
                <div class="discussion-box">
                    <div class="comment-box">
                        <div class="comment-author">
                            <h3 class="comment-author-font">Ajoy Kumar 1</h3>
                        </div>
                        <p class="comments-font"> Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment.</p>
                    </div>
                    <div class="comment-box">
                        <div class="comment-author">
                            <h3 class="comment-author-font">Ajoy Kumar 2</h3>
                        </div>
                        <p class="comments-font"> Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment.</p>
                    </div>
                    <div class="comment-box">
                        <div class="comment-author">
                            <h3 class="comment-author-font">Ajoy Kumar 3</h3>
                        </div>
                        <p class="comments-font"> Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment.</p>
                    </div>
                    <div class="comment-box">
                        <div class="comment-author">
                            <h3 class="comment-author-font">Ajoy Kumar 4</h3>
                        </div>
                        <p class="comments-font"> Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment.</p>
                    </div>
                    <div class="comment-box">
                        <div class="comment-author">
                            <h3 class="comment-author-font">Ajoy Kumar 5</h3>
                        </div>
                        <p class="comments-font"> Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment. Hello, I'm a comment.</p>
                    </div> 
                </div>
                <div class="division-line"></div>
                <div class="typing-comment-box">
                    <input class="comment-input" type="text"></input>
                    <button 
                    class="send-button" 
                    type="submit">SEND

                    </button>
                </div>
            </div>
        </div>
    )
}