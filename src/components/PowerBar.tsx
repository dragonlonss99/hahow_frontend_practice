import React from 'react'
import { Bar } from '../styledComponent'
import { PowerProp } from '../Interface'

const PowerBar = ({powerName, num, totalLeft, modifyPower}:PowerProp) =>{

    return (
        <Bar>
            <span>{powerName.toUpperCase()}</span>
            <div className='btn-container'>    
                <button onClick={()=>{modifyPower(powerName, 1)}} disabled={totalLeft === 0}>+</button>
                {num}
                <button onClick={()=>{modifyPower(powerName, -1)}} disabled={num === 0}>-</button>
            </div>
        </Bar>
    )
}

export default PowerBar;

