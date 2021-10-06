import axios from 'axios';
export const ADD_HERO_LIST = 'ADD_HERO_LIST';

export function addHeroList (){
    const res = axios.get('https://hahow-recruit.herokuapp.com/heroes')
    return { type: ADD_HERO_LIST, payload: res}
}