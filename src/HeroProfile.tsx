import React, { useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'


interface PowerProp {
    powerName: string;
    num: number;
    clickPlus:Function;
    clickMinus:Function
}

const PowerBar = ({powerName, num,clickPlus, clickMinus}:PowerProp) =>{
    const [power, setPower] = useState<number>(num)
    useEffect(()=>{
        setPower(num)
    },[num])
 
    return (
        <Bar>
            <span>{powerName.toUpperCase()}</span>
            <div className='btn-container'>    
                <button onClick={()=>{clickPlus(powerName)}}>+</button>
                {power}
                <button onClick={()=>{clickMinus(powerName)}}>-</button>
            </div>
        </Bar>
    )
}

const Bar = styled.div`
    display: flex;
    font-size: 1.2rem;
    margin: 2rem 0;
    justify-content: space-between;
    width: 18rem;

    span{
        width: 3rem;
    }
    .btn-container{
        display: flex;
        justify-content: space-between;
        width: 10rem;
        button{
            width: 2rem;
            height: 2rem;
        }
    }

`
const String = styled.span`
    margin-right: 20px;
`


interface heroProfileProp {
    [key: string]: number;
}

interface Params {
    heroId: string;
}

const HeroProfile = () => {
    const [heroProfile, setHeroProfile] = useState<heroProfileProp>({})
    const [totalLeft, setTotalLeft] = useState<number>(0);
    const params:Params = useParams();
    console.log(params)
    const total = useRef(0);

    useEffect(()=>{
        const heroId:number= parseInt(params.heroId);
        axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`).then((res)=>{
            setHeroProfile(res.data);
            total.current = Number(Object.values(res.data).reduce((a:any,b:any)=>a+b));
        });
    },[params])

    const handleSaveClick = () =>{
        if (totalLeft !== 0) return;
        const heroId = parseInt(params.heroId);
        const data = heroProfile;
        axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, data);
    }

    const clickPlus = (key:string) =>{
        if (totalLeft === 0) return;
        const power = heroProfile[key]+1;
        const profile ={...heroProfile};
        profile[key] = power;
        setHeroProfile(profile);
        setTotalLeft(totalLeft-1);
    };
    const clickMinus = (key:string) =>{
        if (heroProfile[key] === 0) return;
        const power = heroProfile[key]-1;
        const profile ={...heroProfile};
        profile[key] = power;
        setHeroProfile(profile);
        setTotalLeft(totalLeft+1);
    }

    const renderPowers = () => Object.keys(heroProfile).map((key)=>
    <PowerBar 
        key={key}
        powerName={key} 
        num={heroProfile[key]} 
        clickPlus={clickPlus}
        clickMinus={clickMinus}
    />)
    return (
        <Profile>
            <div>{renderPowers()}</div>
            <div className='left-container'>
                <span>剩餘點數：{totalLeft}</span>
                <button onClick={handleSaveClick}>儲存</button>
            </div>
        </Profile>
    )
}

const Profile = styled.div`
    width: 56rem;
    margin-top: 20px;
    border: black 5px solid;
    padding: 5px 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left-container{
        font-size: 1.5rem;
        width: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-bottom: 2rem;
        button{
            width: 10rem;
            height: 3rem;
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`

export default HeroProfile
