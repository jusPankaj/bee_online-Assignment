import HeroBg from "../assets/Hero_bgg.png";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import "../assets/css/Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* <nav className="container navbar">
        <div><a className="navbar navbar-brand">Brandname</a></div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-join bg-transparent">JOIN US <span className="rightArrow"><FaArrowRight /></span></button>
        </div>
      </nav> */}

      <nav className="container navbar">
        <div className="brand-and-toggler">
          <div>
            <a className="navbar-brand">Brandname</a>
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-join bg-transparent">
            JOIN US
            <span className="rightArrow">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </nav>

      <main className="container-hero">
        <div className="hero hero_left">
          <h4 className="">Welcome</h4>
          <h1 className="">Best Learning Opportunities</h1>
          <p className="">
            Our goal is to make online education work for everyone
          </p>
          <div className="hero-buttons">
            <button className="join_us">Join Us</button>
            <button className="learn_more">Learn More</button>
          </div>
        </div>
        <div className="hero_right">
          <img src={HeroBg} alt="" className="hero_img" />
        </div>
      </main>
    </div>
  );
};

export default Header;
