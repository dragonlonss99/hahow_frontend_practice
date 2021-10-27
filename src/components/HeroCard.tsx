import React from 'react'
import { HeroListItem } from '../Interface'
import { Card } from '../styledComponent';
import { useCardClick,useSelected } from '../utils/customHooks';

const HeroCard = ({ name, image, id }: HeroListItem) => {
    const handleClick = useCardClick(id);
    const selected = useSelected(id);

    return (
        <Card className='hero-card' onClick={handleClick} selected={selected}>
            <img src= {image}/>
            {name}
        </Card>
    )
}

export default HeroCard;
