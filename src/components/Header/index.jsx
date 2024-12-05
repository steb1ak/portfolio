import React, { useEffect, useRef } from "react";
import "./Header.css";
import Facts from "./Facts";
import gsap from "gsap";

const Header = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          duration: 1,
          opacity: 0.5,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
        }
      );

      gsap.from(".intro__text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });

      const timeline = gsap.timeline();
      timeline
        .from(".header__info__top", {
          opacity: 0,
        })
        .from(".header__title", {
          opacity: 0,
          y: 30,
        })
        .from(".header__description", {
          opacity: 0,
        })
        .from(".btn", {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <header id="header" className="blur-effect" ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blue-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm{" "}
              <span className="color__primary">Steblak Yaroslava</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                I'M A GRAPHIC DESIGNER
              </h1>
              <p className="text__muted header__description">
                I specialize in crafting visually engaging and impactful designs
                that communicate ideas effectively and resonate with audiences.
                My main goal is to create compelling visual identities and user
                experiences that solve real problems and enhance how people
                connect with brands and information.
              </p>
            </div>
            <Facts />
          </div>
        </div>
        {/* <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img
              src={profile1}
              className="profile__photo"
              id="first"
              alt=""
              srcSet=""
            />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
