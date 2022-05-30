import React from 'react';
import  './Experience.css';

export default function Education(){
    return(
        <div className='education' id='exp'>
            <h2 id='project'>WORK EXPERIENCE</h2>
            <div className='edu-container'>
                <div className='card'>
                    <div id='organisation'>
                        <p id='school'>Tata Consultancy Services, Pune</p>                        
                        <p id='time'>March 2021 - Present</p>
                    </div>
                    <div id='course'>Assistant System Engineer</div>
                </div>
                <div className='card'>
                    <div id='organisation'>
                        <p id='school'>Deccanloginc OPC Pvt Ltd, Pune</p>                        
                        <p id='time'> Dec 2020 - Feb 2021</p>
                    </div>
                    <div id='course'>Associate Software Developer (Front-End)</div>
                </div>
                {/* <div className='card'>
                    <div id='organisation'>
                        <p id='school'>Government Polytechnic, Solapur</p>                        
                        <p id='time'> 2014 - 2017</p>
                    </div>
                    <div id='course'>Diploma ( Mechanical )</div>
                </div> */}
            </div>
        
        </div>
    );
}