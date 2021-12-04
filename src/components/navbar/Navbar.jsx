import React, { useState } from "react";
import { HiViewGrid, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>{" "}
      </p>
      <p>
        <a href="#possibility">Open Ai</a>{" "}
      </p>
      <p>
        <a href="#features">Case Studies </a>{" "}
      </p>
      <p>
        <a href="#blog">Library</a>{" "}
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button>Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <HiOutlineX
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiViewGrid
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                    <Menu />
                    </div>
             
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
