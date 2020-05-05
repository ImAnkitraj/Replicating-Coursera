import React ,{useState}from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [sidebarStatus,setSidebarStatus]=useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
        {
        sidebarStatus ? 
          <div className=' sidebar-div animated fadeIn'>
            <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/> 
          </div>: ''
        }
        <div className='sections'>
          <Route path='/' exact component={Home}></Route>
          <Route path='/signup' exact component={Signup}></Route>
          <Route path='/login' exact component={Login}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
