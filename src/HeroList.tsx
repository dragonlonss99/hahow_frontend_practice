import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import HeroCard from './HeroCard';

const HeroList = () => {
    const [heroList, setHeroList] = useState<Object[] | Promise<AxiosResponse<Object[]>>>([])
    const [selectedCard, setSelectedCard] = useState<null | string>()
    const location = useLocation();
    const IdInPath = location.pathname.split('/')[2]
    useEffect(()=>{
        axios.get('https://hahow-recruit.herokuapp.com/heroes').then((res)=>{
            setHeroList(res.data);
        });
        setSelectedCard(IdInPath)
    },[])
    return (
        <List className='hero-list'>
            {heroList instanceof Array &&
            heroList.map((item: any)=>
            <HeroCard 
                name={item.name} 
                image={item.image} 
                id={item.id} 
                key={`hero_${item.id}`}
                setSelectedCard={setSelectedCard}
                selected={selectedCard === item.id}
            />)}
        </List>
    )
}

const List = styled.div`
    display: flex;
    border: black 5px solid;
    padding: 5px;
    width: 56rem;
    box-sizing: border-box;
    justify-content: space-between;
`

export default HeroList
