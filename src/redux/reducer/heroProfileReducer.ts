import { ADD_HERO_PROFILE, MODIFY_HERO_PROFILE } from '../action/heroProfileAction';
import { AnyAction } from '@reduxjs/toolkit';

const initState:any = {};

export default function heroProfile(state = initState, action:AnyAction) {
    switch (action.type) {
        case ADD_HERO_PROFILE:
            return action.payload; 
        case MODIFY_HERO_PROFILE:
            const { key, value } = action.payload
            const power = state[key] + value;
            const profile ={...state};
            profile[key] = power;
            return profile;   
        default:
            return state;
    }
};