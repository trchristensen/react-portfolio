import React from "react";
import Card from "../card/card";
import {
  faInfoCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  return (
    <>
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows gap-4">
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
    title: "Christy Vault Company",
    description:
      "A static website built from scratch with NextJS and Contentful API for a manufacturing company in the funeral industry.",
    image: {
      src: "/assets/christy-c.jpeg",
    },
    status: "Complete",
    tags: ["React", "Next", "Contentful", "static", "Chakra-UI", "graphql", "Apollo"],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "https://christy.vercel.app",
        fa_icon: faExternalLinkAlt,
      },
    ],
  },
  {
    title: "dstack",
    description:
      "A question/answer platform (quora, stackexchange) built on the Hive social media blockchain. All content is immutable and authentication and data storage is on the Hive network.",
    image: {
      src: "/assets/dstack-c.jpeg",
    },
    status: "In-Progress",
    tags: ["React", "Next", "Hive", "blockchain", "Chakra-UI", "web3", "decentralized", "React-Query", "graphql"],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "https://dstack-zeta.vercel.app/",
        fa_icon: faExternalLinkAlt,
      },
    ],
  },
  {
    title: "Barangay",
    description:
      "A neighbor social media platform for the Philippines. Connects neighbors and local sari-sari stores.",
    image: {
      src: "/assets/under-construction-c.jpeg",
    },
    status: "In Progress",
    tags: ["React", "Apollo", "Strapi", "Express", "Next", "TailwindCSS"],
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
      src: "/assets/binance-taker-trades-c.jpeg",
    },
    progress: "Completed",
    tags: ["VueJs", "Node.js", "Express", "Redis", "TailwindCSS"],
    links: [
      {
        text: "Get More Info",
        url: "#",
        fa_icon: faInfoCircle,
      },
      {
        text: "Visit Site",
        url: "https://binance-taker-trades.herokuapp.com/",
        fa_icon: faExternalLinkAlt,
      },
      {
        text: "Server Code",
        url: "https://github.com/trchristensen/binance-taker-trades-api",
        fa_icon: faGithub,
      },
      {
        text: "Client Code",
        url: "https://github.com/trchristensen/binance-taker-trades-client",
        fa_icon: faGithub,
      },
    ],
  },
  {
    title: "Portfolio Site",
    description:
      "ToddChristensen.net.. This site. The one you're on right now.",
    image: {
      src: "/assets/toddchristensen.net-c.jpeg",
    },
    progress: "In Progress",
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
        url: "/",
        fa_icon: faExternalLinkAlt,
      },
      {
        text: "View Code",
        url: "https://github.com/trchristensen/react-portfolio",
        fa_icon: faGithub,
      },
    ],
  },
];
