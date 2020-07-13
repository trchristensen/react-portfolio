import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import Card from "../card/card.component";
import {
  faInfoCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  return (
    <>
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows gap-4">
        {workData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Work;

const workData = [
  {
    title: "Barangay",
    description:
      "A neighbor social media platform for the Philippines. Connects neighbors with each other.",
    image: {
      src: "https://via.placeholder.com/300",
    },
    tags: [
      "React",
      "Apollo",
      "AWS Amplify",
      "React Router",
      "Recoil",
      "React Hook Form",
      "TailwindCSS",
    ],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "#",
        fa_icon: faExternalLinkAlt,
      },
      {
        text: "View Code",
        url: "#",
        fa_icon: faGithub,
      },
    ],
  },
  {
    title: "Binance Taker Trades",
    description:
      "A cryptocurrency market order volume monitor. Using Binance exchange's API, it manipulates data and displays it live on the front-end in a sortable and easy to consume table.",
    image: {
      src: "https://i.imgur.com/6ixJb45.png",
    },
    tags: ["VueJs", "Node.js", "Express", "Redis", "TailwindCSS"],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "#",
        fa_icon: faExternalLinkAlt,
      },
      {
        text: "Server Code",
        url: "#",
        fa_icon: faGithub,
      },
      {
        text: "Client Code",
        url: "#",
        fa_icon: faGithub,
      },
    ],
  },
  {
    title: "Portfolio Site",
    description:
      "ToddChristensen.net.. This site. The one you're on right now.",
    image: {
      src: "https://via.placeholder.com/300",
    },
    tags: [
      "React",
      "Firebase",
      "React Router",
      "Recoil",
      "React Hook Form",
      "TailwindCSS",
    ],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "#",
        fa_icon: faExternalLinkAlt,
      },
      {
        text: "View Code",
        url: "#",
        fa_icon: faGithub,
      },
    ],
  },
];
