import React from 'react';
import {Link} from "react-router-dom"
import close from '../assets/close.svg';

import home from '../assets/home.svg';
import logo from '../assets/logo.svg';

import playlist from '../assets/playlist.svg';
import search from '../assets/search.svg';
function Sidebar({data}){
    return(
        <>
            <div className="home rounded-md h-1/5 m-1 flex flex-col gap-5 p-3">
                <img className="close invert w-4 md:hidden absolute right-2" src={close} alt="" />
                <div className="logo">
                    <img className="invert" src={logo} alt="spotify" />
                </div>
                <ul className="text-white text-xs font-bold flex flex-col gap-3">
                    <li className='flex gap-2'><img className="invert w-4" src={home} alt="home" />Home</li>
                    <li className='flex gap-2 cursor-pointer'><img className="invert w-4" src={search} alt="Search" />Search</li>
                </ul>
            </div>

            <div className='home rounded-md h-4/5 m-1 p-3'>
                <div className="sticky top-0 z-10 heading flex gap-2">
                    <img className="invert w-4" src={playlist} alt="playlist" />
                    <h2 className="text-white font-bold">Your Playlist</h2>
                </div>
                <div className="songlist h-5/6 overflow-y-scroll text-white m-1">
                    {
                        data[0].length>0 ?
                        <ol className="list">
                        {data[0].map((nam, index) => (
                            <Link key={index} to={`/page/${nam}`}>
                                <li className='cursor-pointer header m-1 p-1 px-5 rounded-full'>{nam}</li>
                            </Link>
                        ))}
                        </ol>
                        :
                        <div class="relative left-1/2 w-10 h-10">
                              <div class="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
                              <div class="absolute inset-0 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin-slow"></div>
                          </div>
                    }
                    
                </div>
            </div>
        </>
        
    )
}

export default Sidebar