import React from 'react'
import "./Events.css";
import image1 from "./assets/events.png";
import Navbar from './Navbar';

function Events() {
  return (
    <div className='background'>
        <div className='events-title'>Events</div>
        <img src={image1} className='events-img'/>
        <div className='events-whitebox'>
            <div className='events-text'>text</div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Events