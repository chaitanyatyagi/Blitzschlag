import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Profile from './components/Profile';
import Registration from './components/Registration';
import Contact from './components/Contact'
import Sponsars from './components/Sponsars';
import Preloader from './components/Preloader';
import Brandambastor from './components/Brandambastor';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <BrowserRouter>
      {loading ? <Preloader /> :
        <div className="App">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/brandambastor' element={<Brandambastor />} />
          </Routes>
          <Sponsars />
        </div>}

    </BrowserRouter>
  );
}

export default App;
