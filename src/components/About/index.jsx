import { React, useEffect, useRef } from "react";
import "./About.css";
import profile2 from "../../images/portfolio-2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".about__container",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      },
      {}
    );
  });
  return (
    <section id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Steblak Yaroslava</span>
          </h1>

          <p className="text__muted description">
            I actively enhance my skills by exploring personal projects and
            staying updated with the latest design trends and tools. I am
            passionate about creating visually captivating and meaningful
            designs that leave a lasting impression and am always ready to
            embrace new creative challenges and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
