import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { menu } from "../../data";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      return setVisible(true);
    }
    return setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar__container",
        {
          y: -250,
          width: "100%",
        },
        {
          y: 0,
          top: 0,
          zIndex: 100,
        }
      );
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".tab__item", { opacity: 0, stagger: 0.5 });
    },
    { scope: container }
  );

  return (
    <nav
      className={`navbar__container ${visible ? "visible" : ""}`}
      ref={container}
    >
      {showSidebar ? (
        <div className="overlay" onClick={() => setShowSideBar(!showSidebar)}>
          <FaTimes />
        </div>
      ) : (
        ""
      )}
      <div className="logo__container"></div>
      <div className={`tab__group ${showSidebar ? "show" : ""}`}>
        <div
          className="span.icon__container close__btn"
          onClick={() => setShowSideBar(!showSidebar)}
        >
          <FaTimes />
        </div>
        {menu.map((list, index) => (
          <Link
            activeClass="active"
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
      </div>
      <div className="nav__button__group">
        {" "}
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSideBar(!showSidebar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
