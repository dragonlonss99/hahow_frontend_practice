import React from 'react'
import { HeroCardProp } from '../Interface'
import { Card } from '../styledComponent';

const HeroCard = ({ name, image, id, selected, handleClickHeroCard }: HeroCardProp) => {
    
    return (
        <Card className='hero-card' onClick={()=>{handleClickHeroCard(id)}} selected={selected}>
            <img src= {image}/>
            {name}
        </Card>
    )
}

export default HeroCard;
