import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>News</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>About</a></li>
                        </ul>
                    </div>
                    <p></p>
                    <div className='divicons2'>
                        <ul className='icons2'>
                            <li><a href='#'><AiFillFacebook size={20}/></a></li>
                            <li><a href='#'><AiFillLinkedin size={20}/></a></li>
                            <li><a href='#'><AiFillBehanceCircle size={20}/></a></li>
                            <li><a href='#'><FaTwitter size={20}/></a></li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
}

export default Small
