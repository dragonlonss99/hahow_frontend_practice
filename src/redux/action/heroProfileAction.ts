export const ADD_HERO_PROFILE = 'ADD_HERO_PROFILE';
export const MODIFY_HERO_PROFILE = 'MODIFY_HERO_PROFILE';

export function addHeroProfile (data:Object){
    return { type: ADD_HERO_PROFILE, payload: data}
}

export function modifyHeroProfile (data:Object){
    return { type: MODIFY_HERO_PROFILE, payload: data}
}