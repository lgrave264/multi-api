import React from 'react'

const Anime = ({shows}) =>{
	return(
		<div className='firstBox'>
			{shows.map((anime) => {
				const {id} = anime;
				return(
					<article key={id}>
						<div className='animeBox'>
							<img alt={anime.attributes.canonicalTitle} src={anime.attributes.posterImage.small}/>
							<div>{anime.attributes.canonicalTitle}</div>
						</div>
						{/* name,image,description, episode length,status, age rating,user rating, */}
					</article>
				)
			})}
		</div>
	)
}
export default Anime