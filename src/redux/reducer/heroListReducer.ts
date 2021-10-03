import { ADD_HERO_LIST } from '../action/heroListAction';
import  { AxiosResponse } from 'axios';
import { AnyAction } from '@reduxjs/toolkit';


const initState:Object[]= [];

export default function heroList(state = initState, action:AnyAction) {
    switch (action.type) {
        case ADD_HERO_LIST:
            return action.payload;    
        default:
            return state;
    }
};