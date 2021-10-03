export const ADD_HERO_LIST = 'ADD_HERO_LIST';

export function addHeroList (data:Object[]){
    return { type: ADD_HERO_LIST, payload: data}
}