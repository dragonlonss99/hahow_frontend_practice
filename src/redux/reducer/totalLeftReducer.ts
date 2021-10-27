import { LEFT_MODIFY } from '../action/totalLeftAction';
import { AnyAction } from '@reduxjs/toolkit';

const initState:number = 0;

export default function totalLeft(state = initState, action:AnyAction) {
    switch (action.type) {
        case LEFT_MODIFY:
            return action.payload;    
        default:
            return state;
    }
};