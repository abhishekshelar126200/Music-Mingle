import {React,useRef,useState,UseEffect} from 'react';
import {Link} from 'react-router-dom';
import hamburger from '../assets/hamburger.svg';

import search from '../assets/search.svg';

function Navbar({filteredSongs,data}){
    const [songs,setSongs]=useState(filteredSongs);
    const hidden = useRef(null);
    const searchB = useRef(null);
    const focusSearch = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const liRef = useRef(null);

    const handleSearch=(event)=>{
        setInputValue(event.target.value)
        localStorage.setItem('inputValue',event.target.value)
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
        const filtered = data[0].filter(nam =>
            nam.toLowerCase().includes(query.toLowerCase())
        );
        setSongs(filtered);
        } else {
        setSongs([]);
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();   
          buttonRef.current.click();
        }
    };

    const displaySearch=()=>{
        searchB.current.style.display='flex'
        focusSearch.current.focus()
    }

    return(
        <>
        <div className="nav flex invert gap-3">
            <img className="hamburger w-5" src={hamburger} alt="hamburger" />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
        <div className="flex flex-col absolute left-1/4 top-2">
            <div className="border border-gray-500 flex p-2 px-2 gap-2 rounded-full">
                <Link to="/page">
                    <img src={search} className="invert w-4 cursor-pointer" alt="" />
                </Link>
                <input
                    onKeyDown={handleKeyDown}
                    ref={focusSearch}
                    value={inputValue}
                    onChange={handleSearch}
                    className='text-xs w-60 bg-transparent border-none outline-none'
                    type="search"
                    placeholder='What do you want to play?'
                />
            </div>

            {songs.length > 0 && (
                <ul ref={hidden} className="suggestions min-h-5 max-h-60 rounded-lg p-1 example">
                    {songs.map((song, index) => (
                        <Link key={index} to={`/page/${song}`}>
                            <li className="text-center cursor-pointer w-full border-b-2">
                                {song}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
        <div className="buttons1 flex gap-10 text-sm">
            <button className="signupbtn p-2 px-4 text-gray-600 font-bold rounded-full">Sign Up</button>
            <button className="loginbtn border bg-white text-black font-bold p-2 px-4 rounded-full">Log in</button>
        </div>
        </>
    )
}

export default Navbar;