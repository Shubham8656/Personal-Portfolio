import React from 'react';
import './Skills.css';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
// import {} from 'react-icons/fi';


export default function Skills() {
    return (
        <div className='skills' id='skill'>
            <h2 id='project'>SKILLS</h2>
            <div className='skil-container'>
                <div>
                    <FaReact style={{ fontSize: '100px', color: 'rgb(0, 174, 255)' }} />
                    <p>React JS</p>
                </div>
                <div>
                    <span className="iconify" data-icon="logos-redux" data-inline="false" style={{ fontSize: '99px' }}></span>
                    <p>React-Redux</p>
                </div>
                <div>
                    <i className="fa fa-html5" id='symbol' aria-hidden="true" style={{ color: 'red' }}></i>
                    <p>HTML5</p>
                </div>
                <div>
                    <FaCss3Alt style={{ fontSize: '100px', color: 'blue' }} />
                    <p>CSS3</p>
                </div>
                <div>
                    <FaJs style={{ fontSize: '100px', color: 'rgb(230, 220, 10)', backgroundColor: 'black' }} />
                    <p>JavaScript</p>
                </div>

            </div>
        </div>
    );
}