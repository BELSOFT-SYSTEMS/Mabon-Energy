import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexcenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <h1>Discover<br /> 
                    Mabon Limited <br />Power Generation
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span>
                    Mabon Energy Limited has been awarded a concession to complete 
                    </span>
                    <span>
                    and operate the Dadin Kowa Hydropower Plant in Gombe State, Nigeria.
                    </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
            </div>
{/* right side */}
            <div className="flexEnd hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
