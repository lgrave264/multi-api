import {React, useEffect, useState} from 'react'

const Content = () => {
	const [shows,setShows] =useState();
	const axios = require('axios').default;
  const [category, setCategory] = useState('action')
  console.log(category)
	
 

    useEffect(()=>{
    /* axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${category}`) */
    axios.get('https://kitsu.io/api/edge/anime/1/categories')
    .then(function (response) {
        // handle success
      setShows(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[category])
  // shows.array.forEach(element => {
	  
  // });
	
	return (
		<div>
      <ul id='catlist'>
      <li><button className='genre' onClick={()=>{setCategory('action');}}>Action</button></li>
      <li><button className='genre' onClick={()=>{setCategory('adventure')}}>Adventure</button></li>
      <li><button className='genre' onClick={()=>{setCategory('drama')}}>drama</button></li>
      <li><button className='genre' onClick={()=>{setCategory('fantasy')}}>fantasy</button></li>
      <li><button className='genre' onClick={()=>{setCategory('sci-fi')}}>sci-fi</button></li>
    </ul>
			
		</div>
	)
}

export default Content
