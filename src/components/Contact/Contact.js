import React, { useState } from 'react';
import  './Contact.css';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function Contact(){

        const[name,setname] = useState();
        const[email,setmail] = useState();

    function submitHandler(){
        alert('submitted')

        let subject=document.getElementById('subject').value;
        let message=document.getElementById('message').value;
        console.log(name,email,subject,message)
    }
    return(
        <div className='contact' id='contact'>
            <h2 id='project'>CONTACT US</h2>
            <form className='contact-container'>
                <input id='namee' type='text' placeholder='Name' onChange={(e)=>setname(e.target.value)}></input>
                <input id='mail' type='email' placeholder='Email' onChange={(e)=>setmail(e.target.value)}></input>
                <input id='subject' type='text' placeholder='Subject'></input>
                <textarea id='message' type='text' placeholder='Message'></textarea>
                <input id='submit' type='button' value='Submit' onClick={submitHandler} ></input>
            </form>
            <div className='social-link'>
                <a href='https://www.instagram.com/shubhamvibhute84/'> <FaInstagram id='insta'/></a>
                <a href='https://www.instagram.com/shubhamvibhute84/'><FaTwitter id='twitter'/></a>
                <a href='https://m.facebook.com/profile.php?id=100011823842899'><FaFacebook id='faceb'/></a>
                <a href='https://www.linkedin.com/in/shubham-vibhute-8a5417179/'><FaLinkedin id='linked'/></a>
                <a href='https://github.com/Shubham8656'><FaGithub id='gith'/></a>
            </div>
        </div>
    );
}