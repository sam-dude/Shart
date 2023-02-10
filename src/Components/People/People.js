import './People.css';
import { useEffect } from 'react';
const People = ({friendsDetails, setFriendsDetails, changeDp, changeStatus,  changeUserName}) => {
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

      const changeChatHandler = (changeStatus, changeUserName, changeDp, person) =>{
        changeDp(person.name.charAt(0));
        changeStatus(person.status);
        changeUserName(person.name);
    }
    return ( 
        <div className="people">
            <div className="head">
                <div className="lhs">
                {/* <img src="." alt="" /> */}
                <div className="dp">S</div>
                <h2 className="viewName">People</h2>
                </div>
                <div className="rhs">
                    icons
                </div>
            </div>

            <div className="PeopleList">
                {friendsDetails && friendsDetails.map((person, index) => (
                    <div className="person" key={index} onClick={() => changeChatHandler(changeStatus, changeUserName, changeDp, person)}>
                        <div className="dp">{person.name.charAt(0)}</div>
                        <div className="name">{person.name}</div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default People;