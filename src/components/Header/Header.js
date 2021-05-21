import React from 'react';
import  './Header.css';


export default function Header(){
    return(
        <div className='head'>
            <div className='subclass'>
            <a href='#home'><div id='tab'>Home</div></a>
            <a href='#work'><div id='tab'>Work</div></a>
            <a href='#skill'><div id='tab'>Skill</div></a>
            </div>
            <div className='subclass'>
            <a href='#educ'><div id='tab'>Education</div></a>
            <a href='#exp'><div id='tab'>Work Experience</div></a>
            <a href='#contact'><div id='tab'>Contact Us</div></a>
            </div>
        </div>
    );
}