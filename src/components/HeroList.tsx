import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import HeroCard from './HeroCard';
import { useAppDispatch, useAppSelector } from '../hooks'
import { addHeroList, fetchList } from '../redux/action/heroListAction'
import { RootState } from '../store';
import { HeroListItem } from '../Interface'
import { List } from '../styledComponent'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


const HeroList = () => {
    const location = useLocation();
    const history = useHistory();
    const IdInPath = location.pathname.split('/')[2];
    const dispatch:ThunkDispatch<{}, {}, AnyAction> = useAppDispatch();
    const heroList = useAppSelector((state:RootState)=> state.heroList);

    useEffect(()=>{
        // dispatch(addHeroList());
        dispatch(fetchList());
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
