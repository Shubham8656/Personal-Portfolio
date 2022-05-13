import React from 'react';
import  './Work.css';
import weather from '../image/weather.jpg';
// import ecommerce from '../image/ecommerce.jpg';
import ecomerce from '../image/ecommerce.jpg';
import covid from '../image/covid.png';
import mucormycosis from '../image/mucormycosis.png';
import zomato from '../image/zomato.jpg';
import payment from '../image/payment.jpg';
import event from '../image/event.jpg';
import contactManager from '../image/contactManager.PNG';

export default function Work(){
    return(
        <div className='work-container' id='work'>
            <h2 id='project'>CHECK OUT SOME OF MY PROJECTS</h2>
            <div className='project-container'>
                <a href='http://priceless-turing-84fb4f.netlify.app/'>
                    <img src={ecommerce} alt=''/>
                    <h3>Online Grossary Store</h3>
                </a>

                <a href='https://contact-manager-shubham.netlify.app/'>
                    <img src={contactManager} alt=''/>
                    <h3>Contact Manager</h3>
                </a>
                
                <a href='http://covid-self-assessment.netlify.app/'>
                    <img src={covid} alt=''/>
                    <h3>Covid Self Assessment</h3>
                </a>

                <a href='https://mucormycosis-analysis.netlify.app/'>
                    <img src={mucormycosis} alt=''/>
                    <h3>Mucormycosis Analysis</h3>
                </a>

                <a href='https://weather-forecastination.netlify.app/'>
                    <img src={weather} alt=''/>
                    <h3>Weather Application </h3>
                </a>

                <a href='http://shubham8656.github.io/zomato-replica/'>
                    <img src={zomato} alt=''/>
                    <h3>Zomato Replica </h3>
                </a>

                <a href='https://payment-portal-app.netlify.app/'>
                    <img src={payment} alt=''/>
                    <h3>Payment Portal</h3>
                </a>

                <a href='http://quizzical-hamilton-65384f.netlify.app/'>
                    <img src={event} alt=''/>
                    <h3>Create Event</h3>
                </a>

            </div>
        </div>
    );
}
