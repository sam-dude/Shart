import ChatList from "./ChatList/ChatList";
import './ChatMenu.css'
import '../App.css'
import { useState, useEffect } from "react";

const ChatMenu = ({friendsDetails, setFriendsDetails, changeDp, changeStatus,  changeUserName}) => {
    useEffect(() => {
        fetch('http://localhost:5000/friendsDetails')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data)
            setFriendsDetails(data);
          })
      }, []);
    const [title, setTitle] = useState("Personal Messages");

    const [query, setQuery] = useState("");

    friendsDetails = friendsDetails && friendsDetails.filter(person => person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    
    return ( 
        <div className="ChatMenu">
            <div className="head">
                <div className="lhs">
                {/* <img src="." alt="" /> */}
                <div className="dp">S</div>
                <h2 className="viewName">Chats</h2>
                </div>
                <div className="rhs">
                    icons
                </div>
            </div>
            <div className="searchBox">
                <input type="search" name="search chats" id="searchChat" placeholder="search groups, people and chat" onChange={event => setQuery(event.target.value)}/>
            </div>
            {friendsDetails && <ChatList title={title} friendsDetails={friendsDetails} changeStatus={changeStatus} changeUserName={changeUserName} changeDp={changeDp}/>}
        </div>
    );
}
 
export default ChatMenu;