import { Link } from "react-router-dom";
const SideBar = () => {
    return ( 
        <div className="Sidebar">
            <ul>
                <li className="active"><i></i><Link to="/">Chats</Link></li>
                <li><i></i><Link to="/people"> People</Link></li>
                <li><i></i> Stories</li>
                <li><i></i> Settings</li>
                <li><i></i> Logout</li>
            </ul>
        </div>
     );
}
 
export default SideBar;