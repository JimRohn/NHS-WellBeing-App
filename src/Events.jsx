import React from 'react'
import "./Events.css";
import image1 from "./assets/events.png";

function Events() {
  return (
    <div className='events-container'>
        <div className='events-title'>Events</div>
        <img src={image1} className='events-img'/>
        <div className='events-whitebox'>
            <div className='events-text'>text</div>
        </div>
    </div>
  )
}

export default Events