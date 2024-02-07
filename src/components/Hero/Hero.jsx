import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexcenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
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
                <div className="search-bar">
                    search bar
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
