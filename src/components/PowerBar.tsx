import React from 'react'
import { Bar } from '../styledComponent'
import { PowerProp } from '../Interface'
import { useModifyPower, useTotalLeft } from '../utils/customHooks'

const PowerBar = ({powerName, num}:PowerProp) =>{
    const plusPower = useModifyPower(powerName, 1);
    const minusPower = useModifyPower(powerName, -1);
    const totalLeft = useTotalLeft();
    return (
        <Bar>
            <span>{powerName.toUpperCase()}</span>
            <div className='btn-container'>    
                <button onClick={plusPower} disabled={totalLeft === 0}>+</button>
                {num}
                <button onClick={minusPower} disabled={num === 0}>-</button>
            </div>
        </Bar>
    )
}

export default PowerBar;

