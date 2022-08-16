import React from 'react';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { User } from './models/user';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Register from './components/Register';
import ComicSearch from './components/Comic';
import { UserData } from './models/userdata';
import { FavoriteComics } from './models/favoritecomics';
import './App.css';


function App() {

  const [authUser, setAuthUser] = useState<User>();
  const [userData, setUserData] = useState<UserData[]>([]);

useEffect(() => {
 
})

  return (
    <div className="App">
     
<Navigation currentUser={authUser} setCurrentUser={setAuthUser}/>

    <Routes>
    <Route path="/" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/search" element={<ComicSearch/>}/>
    <Route path="/favorites" element={<>FavoriteComics</>}/>
    </Routes>
    </div>
  );
}

export default App;
