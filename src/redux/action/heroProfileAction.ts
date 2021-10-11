import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

export const ADD_HERO_PROFILE = 'ADD_HERO_PROFILE';
export const MODIFY_HERO_PROFILE = 'MODIFY_HERO_PROFILE';
export const PATCH_HERO_PROFILE = 'PATCH_HERO_PROFILE';

export function addHeroProfile (heroId:number){
    const res = axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
    return { type: ADD_HERO_PROFILE, payload: res}
}

export function modifyHeroProfile (data:Object){
    return { type: MODIFY_HERO_PROFILE, payload: data}
}

export function patchHeroProfile (heroId:number, heroProfile:object){
    const res = axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, heroProfile)
    return { type: PATCH_HERO_PROFILE, payload: res}
}

export function addProfile(res:any){
    return { type: ADD_HERO_PROFILE, payload: res}
}

export const fetchProfile = (heroId:number):ThunkAction<Promise<void>, {}, {}, AnyAction> => 
    (dispatch:ThunkDispatch<{}, {}, AnyAction> ) => axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
    .then((res)=>{
        dispatch(addProfile(res));
    })