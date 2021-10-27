import { ADD_HERO_LIST } from '../action/heroListAction';
import { AnyAction } from '@reduxjs/toolkit';

const initState:Object[]= [];

export default function heroList(state = initState, action:AnyAction) {
    switch (action.type) {
        case ADD_HERO_LIST:
            return action.payload.data;    
        default:
            return state;
    }
};