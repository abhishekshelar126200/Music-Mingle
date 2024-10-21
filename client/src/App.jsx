import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import axios from 'axios';
import { zip } from 'lodash';
import './App.css'
import Songs from './components/songs' 
import Page from './components/page'
import Home from './components/home' 
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import close from './assets/close.svg';
import dot from './assets/dot.svg';
import hamburger from './assets/hamburger.svg';
import home from './assets/home.svg';
import logo from './assets/logo.svg';
import music from './assets/music.svg';
import mute from './assets/mute.svg';
import next from './assets/next.svg';
import pause from './assets/pause.svg';
import play from './assets/play.svg';
import playlist from './assets/playlist.svg';
import prev from './assets/prev.svg';
import search from './assets/search.svg';
import volume from './assets/volume.svg';
import c_arrow from './assets/c_arrow.svg';
import shuffle from './assets/shuffle.svg';

import { useNavigate } from 'react-router-dom';

function App() {
   
    const [filteredSongs, setFilteredSongs] = useState([]);

    

    const [data, setData] = useState([[],[]]);
    
    
    useEffect(() => {
        const fetchData = async () => {
            localStorage.setItem('inputValue',localStorage.getItem('inputValue') || "Bones")
            try {
              console.log("I am in submit");
              const sendData2 = { input:localStorage.getItem('inputValue') || 'Bones'};

              const response = await axios.post('https://music-app-1.onrender.com/submit', sendData2, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });

              setData(response.data);
            } catch (error) {
              console.error('There was an error fetching the data!', error);
            } 
          };
      
          fetchData();
      }, []);


    const [names, posters] = data;

    
   

    return (
        <BrowserRouter>
            <div className="w-screen h-screen flex bg-black p-2">
                <div className='left hidden md:block w-1/4'>
                    <Sidebar data={data}/>
                </div>

                <div className='right w-full md:w-3/4 home rounded-md m-1 overflow-y-scroll'>
                    <div className="header rounded h-12 flex items-center justify-between text-white sticky top-0 z-10 p-1">
                        <Navbar filteredSongs={filteredSongs} data={data}/>
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/page/:musicName" element={<Page />} />
                        <Route path="/songs" element={<Songs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App
