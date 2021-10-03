import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../hooks'
import { addHeroProfile, modifyHeroProfile } from '../redux/action/heroProfileAction'
import { RootState } from '../store';
import PowerBar from './PowerBar'
import { Profile } from '../styledComponent'

const HeroProfile = () => {
    const [totalLeft, setTotalLeft] = useState<number>(0);
    const params : { heroId : string } = useParams();
    const dispatch = useAppDispatch();
    const heroProfile = useAppSelector((state:RootState)=> state.heroProfile)

    useEffect(()=>{
        const heroId:number= parseInt(params.heroId);
        axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`).then((res)=>{
            dispatch(addHeroProfile(res.data))
        });
    },[params])

    const handleSaveClick = () =>{
        const heroId = parseInt(params.heroId);
        axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, heroProfile)
        .then(()=>{
            toast.success('儲存成功');
        })
        .catch(()=>{
            toast.error('儲存失敗！',);
        });
    }

    const modifyPower = ( key:string, value:number) => {
        dispatch(modifyHeroProfile({ key, value }));
        setTotalLeft(totalLeft - value);
    }

    const renderPowers = () => Object.keys(heroProfile).map((key)=>
    <PowerBar 
        key={key}
        powerName={key} 
        num={heroProfile[key]} 
        totalLeft={totalLeft}
        modifyPower={modifyPower}
    />)

    return (
        <Profile>
            <div>{renderPowers()}</div>
            <div className='left-container'>
                <span>剩餘點數：{totalLeft}</span>
                <button onClick={handleSaveClick} disabled={totalLeft !== 0}>儲存</button>
            </div>
            <Toaster />
        </Profile>
    )
}



export default HeroProfile
