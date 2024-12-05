import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";
import { projects } from "../../data";
import { sumArray } from "../../helper";
import Card from "./Card";

const tabs = [{ name: "All" }, { name: "Web" }, { name: "App" }];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffSet] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffSet(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex, setIndicatorWidth]);

  const setProjects = (category) => {
    if (!category) return;

    if (category === "All") {
      setDisplayableProjects(projects);
      return;
    }
    const filteredProjects = projects.filter(
      (item) =>
        item.category && item.category.toLowerCase() === category.toLowerCase()
    );
    setDisplayableProjects(filteredProjects);
  };

  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}

          <span
            className="active__indicator"
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}
          ></span>
        </nav>

        <div className="card__container">
          {displayableProjects.map((project, index) => (
            <Card title={project.title} image={project.image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
