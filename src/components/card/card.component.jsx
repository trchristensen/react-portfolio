import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = () => {
    return (
      <div class="max-w-sm bg-primary shadow-lg rounded-lg overflow-hidden my-4">
        <img
          class="w-full h-56 object-cover object-center"
          src="https://i.imgur.com/6ixJb45.png"
          alt="avatar"
        />
        <div class="flex flex-wrap items-center px-6 bg-primary py-1">
          <span class="py-1 px-2 shadow-md no-underline rounded-full bg-quartary text-white font-primary text-xs btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-1">
            VueJS
          </span>
          <span class="py-1 px-2 shadow-md no-underline rounded-full bg-quartary text-white font-primary text-xs btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-1">
            NodeJS
          </span>
          <span class="py-1 px-2 shadow-md no-underline rounded-full bg-quartary text-white font-primary text-xs btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-1">
            ExpressJS
          </span>
          <span class="py-1 px-2 shadow-md no-underline rounded-full bg-quartary text-white font-primary text-xs btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-1">
            Redis
          </span>
          <span class="py-1 px-2 shadow-md no-underline rounded-full bg-quartary text-white font-primary text-xs btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-1">
            TailwindCSS
          </span>
        </div>
        <div class="py-4 px-6">
          <h3 class="text-2xl font-semibold text-gray-800">
            Binance Taker Trades
          </h3>
          <p class="py-2 text-md text-gray-700">
            A cryptocurrency market order volume monitor. Using Binance
            exchange's API, it manipulates data and displays it live on the
            front-end in a sortable and easy to consume table.
          </p>
          <div class="flex items-center mt-2 text-gray-700">
            <FontAwesomeIcon icon={faInfoCircle} />
            <h1 class="px-2 text-sm">Get More Info</h1>
          </div>
          <div class="flex items-center mt-2 text-gray-700">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <h1 class="px-2 text-sm">Visit Site</h1>
          </div>
          <div class="flex items-center mt-2 text-gray-700">
            <FontAwesomeIcon icon={faGithub} />
            <h1 class="px-2 text-sm">View Server Code</h1>
          </div>
          <div class="flex items-center mt-2 text-gray-700">
            <FontAwesomeIcon icon={faGithub} />
            <h1 class="px-2 text-sm">View Client Code</h1>
          </div>
        </div>
      </div>
    );
}

export default Card;