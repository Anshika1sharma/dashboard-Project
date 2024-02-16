import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Home from './home';
import ManageUsers from './manageusers';


const App =() => {
  return(
    <Router>
      <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route exact path="/home" element = {<Home />} />
          <Route exact path='/manage' element ={<ManageUsers />} />
        </Routes>
    </Router>
  );
};
export default App;