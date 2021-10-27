import React from 'react'
import { Toaster } from 'react-hot-toast';
import PowerBar from './PowerBar'
import { Profile } from '../styledComponent'
import { useHeroProfile, useSaveClick, useTotalLeft } from '../utils/customHooks'

const HeroProfile = () => {
    const heroProfile = useHeroProfile();
    const totalLeft = useTotalLeft();

    const handleSaveClick = useSaveClick(heroProfile);

    const renderPowers = () => 
        Object.keys(heroProfile).map((key)=>
            <PowerBar 
                key={key}
                powerName={key} 
                num={heroProfile[key]} 
            />
    )

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
