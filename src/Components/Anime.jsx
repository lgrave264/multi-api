import React from 'react'

const Anime = (props) => {
    var temp = Object.entries(props.shows)
    return (temp.map((anime)=>{
		const {id,type}=anime
		return(
			<div key={id}>
                {id}
			</div>
		)
	}))
}
export default Anime