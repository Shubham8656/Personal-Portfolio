import React from 'react';
import  './Work.css';
import weather from '../image/weather.jpg';
import ecommerce from '../image/ecommerce.jpg';
import financial from '../image/financial.jpg';
import zomato from '../image/zomato.jpg';
import payment from '../image/payment.jpg';
import event from '../image/event.jpg';

export default function Work(){
    return(
        <div className='work-container' id='work'>
            <h2 id='project'>CHECK OUT SOME OF MY PROJECTS</h2>
            <div className='project-container'>
                <a href='https://online-grossary-store.netlify.app/'>
                    <img src={ecommerce} alt=''/>
                    <h3>Online Grossary Store</h3>
                </a>
                
                <a href='https://thirsty-mccarthy-1b7990.netlify.app/'>
                    <img src={financial} alt=''/>
                    <h3>Financial Portfolio Page </h3>
                </a>

                <a href='https://modest-euler-3abbb5.netlify.app/'>
                    <img src={weather} alt=''/>
                    <h3>Weather Application </h3>
                </a>

                <a href='https://shubham8656.github.io/zomato-replica/'>
                    <img src={zomato} alt=''/>
                    <h3>Zomato Replica </h3>
                </a>

                <a href='https://practical-gates-13307b.netlify.app/'>
                    <img src={payment} alt=''/>
                    <h3>Payment Portal</h3>
                </a>

                <a href='https://quizzical-hamilton-65384f.netlify.app/'>
                    <img src={event} alt=''/>
                    <h3>Create Event</h3>
                </a>

            </div>
        </div>
    );
}
