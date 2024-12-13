import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { menu, socialHandles } from "../../data";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className="nav__link__container">
          {menu.map((list, index) => (
            <Link
              className="tab__item name"
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <div className="social__handles__container">
          {socialHandles.map((list, index) => (
            <a
              href={list.link}
              className="icon__container social__handles"
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {list.icon}
            </a>
          ))}
        </div>
        <div className="copyright__container">
          <h3>Copyright &copy; All rights reserved - | 2024</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
