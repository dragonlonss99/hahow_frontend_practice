import { ADD_HERO_PROFILE, MODIFY_HERO_PROFILE, PATCH_HERO_PROFILE } from '../action/heroProfileAction';
import { AnyAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initState:any = {};

export default function heroProfile(state = initState, action:AnyAction) {
    switch (action.type) {
        case ADD_HERO_PROFILE:
            return action.payload.data; 
        case MODIFY_HERO_PROFILE:
            const { key, value } = action.payload
            const power = state[key] + value;
            const profile ={...state};
            profile[key] = power;
            return profile;   
        case PATCH_HERO_PROFILE:
            if (action.payload.status === 200){
                toast.success('儲存成功');
            } else{
                toast.error('儲存失敗！',);
            }
            return state;
        default:
            return state;
    }
};