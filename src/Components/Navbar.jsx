import React, {useEffect, useState} from 'react'
import Small from './Small'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';


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
                    <li id='title'>CODING</li>
                    <li className='links'><a href="#">Home</a></li>
                    <li className='links'><a href="#">News</a></li>
                    <li className='links'><a href="#">Contact</a></li>
                    <li className='links'><a href="#">About</a></li>
                    <li id='icons'><a href="#"><AiFillFacebook/></a></li>
                    <li id='icons'><a href="#"><AiFillLinkedin/></a></li>
                    <li id='icons'><a href="#"><AiFillBehanceCircle/></a></li>
                    <li id='icons'><a href="#"><FaTwitter/></a></li>
                </ul>
            </header>
        )
    }
}

export default Navbar
