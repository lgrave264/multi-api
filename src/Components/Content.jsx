import {React, useEffect, useState} from 'react'
import Anime from './Anime';

const Content = () => {
	const [shows,setShows] =useState([]);
  // var globalStorage = [category,shows];
  var count = 0;
	const axios = require('axios').default;
  const [category, setCategory] = useState('action')
  console.log(category)
    useEffect(()=>{
      axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${category}`)
      .then(function (response) {
        // handle success
        console.log(shows)
        setShows(response.data.data)
        console.log(response.data.data);
        count++;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // alwayses executed
        if(count >= 3){
          // globalStorage = [category];
        }
        console.log(shows)
      });
    },[category])
  //   useEffect(()=>{
  //     console.log(globalStorage)
  //     setShows(globalStorage);
  //   //axios.get('https://kitsu.io/api/edge/anime/1/categories')
  // },[])
	
	return (
		<div>
      <ul id='catlist'>
        <li><button className='genre' onClick={()=>{setCategory('action');}}>Action</button></li>
        <li><button className='genre' onClick={()=>{setCategory('adventure')}}>Adventure</button></li>
        <li><button className='genre' onClick={()=>{setCategory('drama')}}>drama</button></li>
        <li><button className='genre' onClick={()=>{setCategory('fantasy')}}>fantasy</button></li>
        <li><button className='genre' onClick={()=>{setCategory('science')}}>sci-fi</button></li>
        <li><button className='genre' onClick={()=>{setCategory('future')}}>Future</button></li>
        <li><button className='genre' onClick={()=>{setCategory('space')}}>Space Travel</button></li>
        <li><button className='genre' onClick={()=>{setCategory('apocalypse')}}>Post Apocalypse</button></li>
        <li><button className='genre' onClick={()=>{setCategory('planet')}}>Other Planet</button></li>
      </ul>
      <div>

        {setTimeout(<Anime shows={shows}/>,3000)}
      </div>
		</div>
	)
}

export default Content
