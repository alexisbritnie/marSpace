import React, {useState} from "react";

const Replies = () => {
    const[reply, setReply] = useState("");

    const handleSubmitReply = (event) =>{
        event.preventDefault();
        console.log({reply}); /* display reply in console */
        setReply("");
    };

    return (
        <main className='replies'>
            <form className='modal__content' onSubmit={handleSubmitReply}>
                <label className='reply'>Reply to the thread</label>
                
                <textarea
                    rows={5}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />

                <button className='modalBtn'>SEND</button>
            </form>
        </main>
    );
};
export default Replies