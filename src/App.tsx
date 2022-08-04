import React from 'react';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { User } from './models/user';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Register from './components/Register';
import './App.css';

const [authUser, setAuthUser] = useState<User>();

useEffect(() => {

})

function App() {
  return (
    <div className="App">

<Navigation currentUser={authUser} setCurrentUser={setAuthUser}/>

    <Routes>
    <Route path="/" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
