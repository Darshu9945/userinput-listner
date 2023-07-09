import React, { useState } from 'react'
import './forinvalid.css'
const Forinvalid = (props) => {
    const [className, setClassName] = useState('foroverlay');
    
    const backward=()=>{
        props.removeerror()
    }


   
    return (
        <div id='kb' className="foroverlay" onClick={backward} >
            <div className='forinvalid'>
                <div className='insidediv'>
                    <p>{props.data}</p>
                    <button type='submit' onClick={backward}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Forinvalid
