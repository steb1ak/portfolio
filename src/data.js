import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";

import { project1 } from "./images";
import { project2 } from "./images";
import { project3 } from "./images";
import { project4 } from "./images";
import { project5 } from "./images";
import { project6 } from "./images";

export const menu = [
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Minglenest",
    image: project1,
    category: "Web",
  },
  {
    id: 2,
    title: "TakeOff",
    image: project2,
    category: "App",
  },
  {
    id: 3,
    title: "VEIL",
    image: project3,
    category: "App",
  },

  {
    id: 4,
    title: "Travel",
    image: project4,
    category: "Web",
  },

  {
    id: 5,
    title: "PetShop",
    image: project5,
    category: "Web",
  },
  {
    id: 6,
    title: "Translater",
    image: project6,
    category: "App",
  },
];

export const experience = [
  {
    data: [
      {
        skill: "UI/UX",
        level: "Experienced",
      },
      {
        skill: "FIGMA",
        level: "Experienced",
      },

      {
        skill: "Adobe Illustrator",
        level: "Experienced",
      },
      {
        skill: "Adobe Photoshop",
        level: "Experienced",
      },
      {
        skill: "Capcut",
        level: "Experienced",
      },
      {
        skill: "Canva",
        level: "Experienced",
      },
      {
        skill: "Adobe AfterEffects",
        level: "Experienced",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/s_steblak",
  },
  {
    name: "Behance",
    icon: <IoLogoBehance />,
    link: "https://www.behance.net/9c985e23",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/s.steblak/",
  },
];
