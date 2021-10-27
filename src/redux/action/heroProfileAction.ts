import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk'
import { modifyLeft } from './totalLeftAction';

export const ADD_HERO_PROFILE = 'ADD_HERO_PROFILE';
export const MODIFY_HERO_PROFILE = 'MODIFY_HERO_PROFILE';
export const PATCH_HERO_PROFILE = 'PATCH_HERO_PROFILE';

export function addHeroProfile (heroId:number){
    const res = axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
    return { type: ADD_HERO_PROFILE, payload: res}
}

export const modifyHeroProfile = (data:{value:number, key: string}):ThunkAction<Promise<void>, {}, {}, AnyAction> => 
    async(dispatch, getState:any) => {
        const { totalLeft } = getState();
        const totalLeftAfter = totalLeft - data.value;
        dispatch({ type: MODIFY_HERO_PROFILE, payload: data})
        dispatch(modifyLeft(totalLeftAfter))
    }

export function patchHeroProfile (heroId:number, heroProfile:object){
    const res = axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, heroProfile)
    return { type: PATCH_HERO_PROFILE, payload: res}
}

export function addProfile(res:any){
    return { type: ADD_HERO_PROFILE, payload: res}
}

export const fetchProfile = (heroId:number):ThunkAction<Promise<void>, {}, {}, AnyAction> => 
    async (dispatch) => {
        const res = await axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
        dispatch(addProfile(res));
    }

export const patchProfileThunk = (heroId:number, heroProfile:object):ThunkAction<Promise<void>, {}, {}, AnyAction> => 
    async (dispatch) =>{
        const res = await axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, heroProfile)
        dispatch({ type: PATCH_HERO_PROFILE, payload: res})
    }
