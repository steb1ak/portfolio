import { React, useEffect, useState } from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";

const Facts = () => {
  const [exprerience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(1);
      setProjects(10);
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="fact__container">
      {/* <div className="fact__item">
        <div className="count__container">
          <Odometer value={exprerience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>
      {/* <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={exprerience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div> */}
    </div>
  );
};

export default Facts;
