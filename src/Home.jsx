import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import image1 from "./assets/events.png";
import image2 from "./assets/wellbeing.png";
import Navbar from "./Navbar";


function Home() {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="pic-of-the-day">
        <p className="home-text">Picture of th day!</p>
        <div className="upload-button">
          <label htmlFor="fileInput" className="custom-label">
            Upload
          </label>
          <input
            id="fileInput"
            className="file-input"
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
        </div>

        <div className="slider-container">
          <Slider />
        </div>
      </div>
      <a className="wellbeing-button" href="/error">
        <p className="home-text">Well Being</p>
        <img src={image2} className="img" />
      </a>
      <a className="events-button" href="/events">
        <p className="home-text">Events</p>
        <img src={image1} className="img" />
      </a>
      {/* Navbar */}
    </div>
  );
}

export default Home;
