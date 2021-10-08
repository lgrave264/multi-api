import React, {useEffect, useState} from 'react'
import Small from './Small'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../Util/logo.png';
import {temp} from './Temp';

const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
    setSize(window.innerWidth);
};

useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
}, []);

const [toggle, setToggle] = useState(false);

    if(size < 558.40){
        return(
            <header>
                <ul className='navbar'>
                    <li id='title2'>CODING</li>
                    <li><button onClick={() => setToggle(!toggle)}id='menu'><AiOutlineMenu size={20} color={'lightblue'}/></button></li>
                </ul>
                <Small toggle={toggle}/>
            </header>
        )
    }else{
        return (
            <header>
                <ul  className='navbar'>
                    <li id='title'><img id='logo' alt='AniMerch' src={logo}/></li>
                    <li className='links'><a href="#">Anime</a></li>
                    <li className='links'><a href="#" onClick={()=>{setMerch(!merch)}}>Merch</a></li>
                    <li className='links'><a href="https://github.com/lgrave264">My Hub</a></li>
                    <li id='icons'><a href="https://github.com/lgrave264/multi-api"><AiFillGithub/></a></li>
                </ul>
            </header>
        )
    }
}

export default Navbar