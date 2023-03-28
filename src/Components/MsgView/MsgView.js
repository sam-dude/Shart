import './MsgView.css'
import { useState, useEffect } from 'react';

const MsgView = ({dp, userName, status}) => {
    const [Msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        const type = "received";
        e.preventDefault();
        const date = new Date();
        const time = date.getMinutes();
        const message = {Msg, time, type};
        fetch('http://localhost:5000/friendsDetails', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(message)
        }).then(res => {
            console.log(res.body)
            console.log("New message added!");
        })
    };
    const [msgSent, setMsgSent] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/friendsDetails')
          .then(res => {
            return res.json();
          })
          .then(data => {
            const messages = data.map(data => (data.messages));
            setMsgSent(data);
          })
    }, [Msg]);
     
    return ( 
        <div className="MsgView">
            <div className="head">
                <div className="lhs">
                    <div className="dp">{dp}</div>
                    <div className="details">
                        <div className="name">{userName}</div>
                        <div className="status">{status}</div>
                    </div>
                </div>
                <div className="rhs">rhs</div>
            </div>
            <div className="MsgSpace"> 
                {msgSent && msgSent
                .filter(person => person.name === userName)
                .map(person => ( person.messages
                ))
                .map(messages => messages)
                .sort((a, b) => a.time > b.time ? 1 : -1 )
                .map((msg, index) => (
                <div className="message" key={index}>
                    <div className="msgSent">
                        <div className="dp">{dp}</div>

                    <div className="msg-single">
                    {msg
                    .filter(msg => msg.type === 'sent')
                    .map((msg, index) =>
                    <div className="msg" key={index}>{msg.msg}</div> 
                    )}
                    </div> 
                    </div>

                    
                    <div className="msgReceived" key=   {index}>
                        <div className="msgR">
                            { msg
                            .filter( msg => msg.type === 'received')
                            .map((msg, index) =>
                                <div className="msg" key={index}>{msg.msg}</div>
                            ) }
                        </div>
                    </div>
                
                </div>
                
                )
                
                )}
                
            </div>
            <div className="msgInput">
                <form action="" onSubmit={handleSubmit}>
                <textarea onChange={(e) => setMsg(e.target.value)}></textarea>
                <button type="submit">Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default MsgView;