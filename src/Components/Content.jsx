/* eslint-disable */
import {React, useEffect, useState} from 'react'
import Anime from './Anime';
import Facts from './Facts';

const Content = () => {
	const [shows,setShows] =useState([]);
  const [factsPage,setFactsPage]= useState([]);
  const [merch,setMerch] = useState(false);
  var count = 0;
	const axios = require('axios').default;
  const [category, setCategory] = useState('action');
  const [name, setName] = useState('bleach')
   function getFacts(){
    axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`)
    .then(function (response2) {
      // handle success
      setFactsPage(response2)
      console.log(response2);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // alwayses executed
      }
    );
  }
  console.log(category)
  function getAnime(){
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
  }
    useEffect(()=>{
      getAnime();
      getFacts();
    },[category,name])
	if(merch === true){
    return (
      <div>
        <ul id='catlist'>
          <li><button className='genre' onClick={()=>{setName('bleach');}}>Bleach</button></li>
          <li><button className='genre' onClick={()=>{setName('attack_on_titan')}}>Attack on Titan</button></li>
          <li><button className='genre' onClick={()=>{setName('black_clover')}}>Black Clover</button></li>
          <li><button className='genre' onClick={()=>{setName('jujutsu_kaisen')}}>Jujutsu Kaisen</button></li>
          <li><button className='genre' onClick={()=>{setName('fma_brotherhood')}}>Full metal Alchemist</button></li>
          <li><button className='genre' onClick={()=>{setName('naruto')}}>Naruto</button></li>
          <li><button className='genre' onClick={()=>{setName('boku_no_hero_academia')}}>My Hero Academia</button></li>
          <li><button className='genre' onClick={()=>{setName('one_piece')}}>One Piece</button></li>
          <li><button className='genre' onClick={()=>{setName('demon_slayer')}}>Demon Slayer</button></li>
        </ul>
        <div id='pagebox'>
          <button className='pagebutton' onClick={()=>{setMerch(!merch)}}>Top 10 shows</button>
          <Facts facts={factsPage}/>
        </div>
      </div>
    )
  }else{
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
        <div id='pagebox'>
          <button className='pagebutton' onClick={()=>{setMerch(!merch)}}>Random Anime Facts</button>
          <Anime shows={shows}/>
        </div>
      </div>
    )
  }
}

export default Content
