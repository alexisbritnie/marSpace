import { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react';
import Replies from "./Replies";

const Discussion = () => {
    const [thread, setThread] = useState("")

    const handleSubmitThread =(event) => {
        event.preventDefault()
        console.log({thread})
        setThread("")
    }

    return (
        <div class = "classroom-full-screen-container">
            <div className="discussion-container">
                <p className="discussion title"> Discussion Board for *classname*</p>
                    <label>Title/Description: </label>
                        <div></div>
                    <Replies/>
                    <input type="string" name="thread" placeholder="Thread statement or question" 
                    value={thread} onChange = {(event) =>setThread(event.target.value)} />
                    <button className="thread-button">Thread</button>
        

            </div>
        </div>

    )
}

export default Discussion