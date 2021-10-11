import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
export const ADD_HERO_LIST = 'ADD_HERO_LIST';

export function addHeroList (){
    const res = axios.get('https://hahow-recruit.herokuapp.com/heroes')
    return { type: ADD_HERO_LIST, payload: res}
}

export function addHero (res:any){
    return { type: ADD_HERO_LIST, payload: res}
}

export const fetchList = ():ThunkAction<Promise<void>, {}, {}, AnyAction> => 
    {debugger
    return(dispatch:ThunkDispatch<{}, {}, AnyAction> ) => axios.get('https://hahow-recruit.herokuapp.com/heroes')
    .then((res)=>{
        dispatch(addHero(res));
    })}
