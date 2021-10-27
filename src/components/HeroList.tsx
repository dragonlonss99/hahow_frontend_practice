import React from 'react'
import HeroCard from './HeroCard';
import { HeroListItem } from '../Interface'
import { List } from '../styledComponent'
import { useHeroListData } from '../utils/customHooks';

const HeroList = () => {
    const heroList = useHeroListData();

    return (
        <List className='hero-list'>
            {heroList instanceof Array &&
                heroList.map((item: HeroListItem)=>
                <HeroCard 
                    name={item.name} 
                    image={item.image} 
                    id={item.id} 
                    key={`hero_${item.id}`}
                />)}
        </List>
    )
}



export default HeroList
