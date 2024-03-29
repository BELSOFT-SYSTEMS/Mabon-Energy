import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo"  width={130} />

            <div className="flexCenter h-menu">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact Us</a>
                <button className="button">
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header
