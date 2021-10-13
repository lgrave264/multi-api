import {React , useState} from 'react'

const Anime = ({shows}) =>{
	const [moreText,setMoreText] = useState(false);
	const wordLimit = (str, limit)=>{
		if(str === null){
			return ('N/A')
		}else{
			return str.split(" ").splice(0,limit).join(" ")
		}
	}
	return(
		<div className='firstBox'>
			{shows.map((anime) => {
				const {id} = anime;
				return(
					<article key={id}>
						<div className='animeBox'>
							<img className='image' alt={anime.attributes.canonicalTitle} src={anime.attributes.posterImage.small}/>
							<div className='info'>
								<h4 id='name'>{anime.attributes.canonicalTitle}</h4>
								<hr/>
								<p className='age'>Age Rating:{anime.attributes.ageRating}</p>
								<p className='status'>Status:{anime.attributes.status}</p>
								<p className='epicount'>Episodes:{anime.attributes.episodeCount}</p>
								<p className='epilength'>Episode length:{anime.attributes.episodeLength}</p>
								<button id='expand' onClick={()=>{setMoreText(!moreText)}}>Expand</button>
							</div>
							<div id='desc'>
								{(moreText) ? anime.attributes.description : wordLimit(anime.attributes.description,20)}
							</div>
						</div>
					</article>
				)
			})}
		</div>
	)
}
export default Anime