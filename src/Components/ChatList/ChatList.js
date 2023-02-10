import { useState } from 'react';
import './ChatList.css'
const ChatList = ({title, friendsDetails, changeStatus, changeDp, changeUserName}) => {

    const changeChatHandler = (changeStatus, changeUserName, changeDp, person) =>{
        console.log("event handler fired!")
        changeDp(person.name.charAt(0));
        changeStatus(person.status);
        changeUserName(person.name);
    }
    return ( 
        <div className="ChatList">
            <p className='title'>{title}</p>
            {friendsDetails
                .sort((a, b) => (a.time > b.time ? 1 : -1))
                .map(person => (
                <div className="chatPreview" key={person.id} onClick={() => changeChatHandler(changeStatus, changeUserName, changeDp, person)} >
                    <div className="dp">{person.name.charAt(0)}</div>
                    <div className="preview">
                        <div className="nameNdTime">
                            <div id="name">{person.name}</div>
                            <div id="time">{`${person.time} mins ago`}</div>
                        </div>
                        <div id="lastMsg">{person.lastMsg}</div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ChatList;