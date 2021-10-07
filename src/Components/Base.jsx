import React, { useState, useEffect } from 'react';
import Load from './Loadinggif';
import Error from './Erorr';
import Content from './Content';
import Merch from './Merch';
const check = 'https://api.github.com/users/QuincyLarson';

const Base = () => {
    const [isLoading, setIsLoading]= useState(true)
    const [isError, setIsError]= useState(false)

    useEffect(()=>{
        fetch(check)
        .then((response)=>response.json())
        .then(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])
    .catch((error)=>console.log(error))
    })
    if(isError){
    return(
        <div>
            <h1><Error/></h1>
        </div>
    )
    }else if(isLoading){
      return(
        <div>
          <Load/>
        </div>
      )
    }

  return <div>
    <Merch/>
  </div>;
};

export default Base;