import React from 'react'

const Facts = ({facts}) => {
    const facts2 = Object.values(facts.data.data);
    return (
        <div>
            {facts2.map((fact) => {
                const {anime_id} = fact;
                return(
                    <article key={anime_id}>
                        
                    </article>
                )
            })}
        </div>
    )
}

export default Facts
