import './MsgView.css'
import { useState, useEffect } from 'react';

const MsgView = ({dp, userName, status}) => {
    const [Msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const [msgSent, setMsgSent] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/friendsDetails')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data.map(data => (data.name)));
            const messages = data.map(data => (data.messages));
            console.log()
            setMsgSent(data);
          })
    }, []);
     
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
                .map((msg, index) => <div className="msgSent" key={index}>
                    <div className="dp">{dp}</div>

                    <div className="msg-single">
                    {msg.sent.map((msg, index) =>
                    <div className="msg" key={index}>{msg}</div> 
                    )}
                    </div>
                </div>)}
                <div className="msgRecieved">{Msg}</div>
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