import './App.css'
import ChatMenu from './Components/ChatMenu';
import MsgView from './Components/MsgView/MsgView';
import SideBar from './SideBar';
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import People from './Components/People/People';

function App() {
    const [friendsDetails, setFriendsDetails]  = useState(null);
    const [dp, setDp] = useState("@");
    const [status, setStatus] = useState("Active now");
    const [userName, setUserName] = useState('Welcome back');

    
    
  return (
    
      <div className="App">
      <SideBar />
      <div className="content">
        
        <Routes>
          <Route path='/' element={<ChatMenu friendsDetails={friendsDetails} setFriendsDetails={setFriendsDetails} changeDp={setDp} changeStatus={setStatus} changeUserName={setUserName}/>}/>
          
          <Route path="/people" element={ <People friendsDetails={friendsDetails} setFriendsDetails={setFriendsDetails} changeDp={setDp} changeStatus={setStatus} changeUserName={setUserName}/> } />
        </Routes>
        <MsgView dp={dp} status={status} userName={userName}/>
      </div>
    </div>

  );
}

export default App;
