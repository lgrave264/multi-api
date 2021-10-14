import React from 'react'

const Facts = ({facts}) => {
    const facts2 = Object.values(facts.data.data);
    console.log(facts.data.img)
    const image = (facts.data.img);
    return (
        <div className='first2Box'>
            <img id='imgFact' alt='error' src={image}/>
            <br/>
            <br/>
            {facts2.map((factmap) => {
                const {fact_id} = factmap;
                const {fact} = factmap
                return(
                    <div className='factBox'>
                        <article key={fact_id}>
                            Fact {fact_id}:
                            <p>
                                {fact}
                            </p>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default Facts
