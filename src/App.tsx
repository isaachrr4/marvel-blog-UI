import React from 'react';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { User } from './models/user';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
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

    </Routes>
    </div>
  );
}

export default App;
