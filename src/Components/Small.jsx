import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Small = ({toggle}) => {
        if(toggle){
            return(
                <div className='small'>
                    <div className='divlinks2'>
                        <ul className='links2'>
                            <li><a href='#'>Anime</a></li>
                            <li><a href='https://github.com/lgrave264'>My Hub</a></li>
                        </ul>
                    </div>
                    <p></p>
                    <div className='divicons2'>
                        <ul className='icons2'>
                            <li><a href='https://github.com/lgrave264/multi-api'><AiFillGithub size={20}/></a></li>
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
