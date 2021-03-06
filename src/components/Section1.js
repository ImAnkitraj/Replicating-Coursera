import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Section1() {
    return (
        <>
        <div className='sec1-container'>
            <div className='sec1'>
            </div>
            <div className='sec1-overlay'>
                <div class='sec1-overlay-content' style={{zIndex:'3'}}>
                    <h1>Your Course to success</h1>
                    <h5>
                        Build skills with courses, certificates, and degrees online from world-class universities and companies
                    </h5>
                    <button class='btn btn-primary'><h5><NavLink to='/signup'>Join For Free</NavLink></h5></button>
                </div>
            </div>
        </div>
        </>
    )
}
