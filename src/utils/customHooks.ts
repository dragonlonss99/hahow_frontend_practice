import { useEffect } from 'react'
import { useLocation, useHistory, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../hooks'
import { addHeroList, fetchList, fetchListThunkPromise } from '../redux/action/heroListAction'
import { RootState } from '../store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchProfile, modifyHeroProfile, patchHeroProfile, patchProfileThunk } from '../redux/action/heroProfileAction';

export const useHeroListData = () => {
    const dispatch:ThunkDispatch<{}, {}, AnyAction> = useAppDispatch();
    const heroList = useAppSelector((state:RootState)=> state.heroList);
    useEffect(()=>{
            // dispatch(addHeroList());
            dispatch(fetchList());
            dispatch(fetchListThunkPromise());
        },[])
    return heroList
}

export const useCardClick = (heroId:string) => {
    const history = useHistory();
    return () => history.push(`/heroes/${heroId}`)
}

export const useSelected = (heroId:string) => {
    const location = useLocation();
    const IdInPath = location.pathname.split('/')[2];
    return IdInPath === heroId;
}

export const useHeroProfile = () => {
    const params : { heroId : string } = useParams();
    const heroId:number= parseInt(params.heroId);
    const dispatch:ThunkDispatch<{}, {}, AnyAction> = useAppDispatch();
    const heroProfile = useAppSelector((state:RootState)=> state.heroProfile)

    useEffect(()=>{
        dispatch(fetchProfile(heroId));
    },[params])

    return heroProfile;
}

export const useSaveClick = (heroProfile: object) =>{
    const params : { heroId : string } = useParams();
    const heroId:number= parseInt(params.heroId);
    const dispatch:ThunkDispatch<{}, {}, AnyAction> = useAppDispatch();
    // dispatch(patchHeroProfile(heroId, heroProfile))
    return () => dispatch(patchProfileThunk(heroId, heroProfile))
}

export const useModifyPower = ( key:string, value:number) => {
    const dispatch:ThunkDispatch<{}, {}, AnyAction> = useAppDispatch();
    return () => {
        dispatch(modifyHeroProfile({ key, value }));
    }
}

export const useTotalLeft = () => {
    const totalLeft = useAppSelector((state:RootState)=> state.totalLeft)
    return totalLeft;
}