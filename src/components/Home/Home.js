import React from 'react';
import  './Home.css';
import dp from '../image/dp.png';

export default function Home(){
    return(
        <div className='home' id='home'>
            <div className='header'>
                <img id='profile' src={dp} alt=''/>
                <div id='name'>I'm Shubham Vibhute</div>
                <div className='social'>
                    <a href='https://github.com/Shubham8656'><div className="fa fa-github" id='github'  style={{fontSize:"40px",color:"rgb(1500, 200, 255)"}}></div></a>
                    <p id='role'> Front End Developer</p>
                    <a  href='https://www.linkedin.com/in/shubham-vibhute-8a5417179/'><div className="fa fa-linkedin" id='linkedin' style={{fontSize:"40px",color:"rgb(1500, 200, 255)"}}></div></a>
                </div>
                
                <p id='desc'> I describe myself as a developer who like to code things from scratch, 
                I think I have gotten better over time. 
                I do think I can work well with people.
                I like ambitious goals. I like thinking through how we can anticipate the future.
                My career objective is to Secure a responsible career opportunity to utilize my skills,
                while making a significant contribution to the success of the company.</p>
                <div className='gmail'>
                    <div className="fa fa-envelope" aria-hidden="true"></div>
                    <div id='email'>shubhamvibhute84@gmail.com</div>
                </div>
            </div>
        </div>
    );
}
