import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import HeroCard from './HeroCard';
import { useAppDispatch, useAppSelector } from '../hooks'
import { addHeroList } from '../redux/action/heroListAction'
import { RootState } from '../store';
import { HeroListItem } from '../Interface'
import { List } from '../styledComponent'

const HeroList = () => {
    const location = useLocation();
    const history = useHistory();
    const IdInPath = location.pathname.split('/')[2];
    const dispatch = useAppDispatch();
    const heroList = useAppSelector((state:RootState)=> state.heroList);

    useEffect(()=>{
        dispatch(addHeroList());
    },[])

    const handleClickHeroCard = (heroId:string) =>{
        history.push(`/heroes/${heroId}`)
    }
    return (
        <List className='hero-list'>
            {heroList instanceof Array &&
                heroList.map((item: HeroListItem)=>
                <HeroCard 
                    name={item.name} 
                    image={item.image} 
                    id={item.id} 
                    key={`hero_${item.id}`}
                    selected={IdInPath === item.id}
                    handleClickHeroCard={handleClickHeroCard}
                />)}
        </List>
    )
}



export default HeroList
