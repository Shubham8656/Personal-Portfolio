import React from 'react';
import  './Education.css';

export default function Education(){
    return(
        <div className='education' id='educ'>
            <h2 id='project'>EDUCATION</h2>
            <div className='edu-container'>
                <div className='card'>
                    <div id='organisation'>
                        <p id='school'>GreyAtom, Mumbai</p>                        
                        <p id='time'>March 2020 - Present</p>
                    </div>
                    <div id='course'>Front End Developement</div>
                </div>
                <div className='card'>
                    <div id='organisation'>
                        <p id='school'>N.K. Orchid College of Engg & Technology, Solapur</p>                        
                        <p id='time'> 2017 - 2020</p>
                    </div>
                    <div id='course'>Bachelor of Engg ( Mechanical )</div>
                </div>
                <div className='card'>
                    <div id='organisation'>
                        <p id='school'>Government Polytechnic, Solapur</p>                        
                        <p id='time'> 2014 - 2017</p>
                    </div>
                    <div id='course'>Diploma ( Mechanical )</div>
                </div>
            </div>
        
        </div>
    );
}