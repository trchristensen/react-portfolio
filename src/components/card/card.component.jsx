import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../atoms/themeState';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = () => {
    const theme = useRecoilValue(themeState);

    return (
      <div className="card max-w-full bg-primary rounded-lg overflow-hidden my-4">
        <img
          className="w-full h-56 object-cover object-center"
          src="https://i.imgur.com/6ixJb45.png"
          alt="avatar"
        />
        <div className="flex flex-wrap items-center px-6 bg-primary py-1">
          <span className="py-1 px-2 no-underline rounded-full bg-primary btn-shadow text-lightgray font-primary text-xs btn-primary focus:outline-none active:shadow-none mr-2 my-1">
            VueJS
          </span>
          <span className="py-1 px-2 no-underline rounded-full bg-primary btn-shadow text-lightgray font-primary text-xs btn-primary focus:outline-none active:shadow-none mr-2 my-1">
            NodeJS
          </span>
          <span className="py-1 px-2 no-underline rounded-full bg-primary btn-shadow text-lightgray font-primary text-xs btn-primary focus:outline-none active:shadow-none mr-2 my-1">
            ExpressJS
          </span>
          <span className="py-1 px-2 no-underline rounded-full bg-primary btn-shadow text-lightgray font-primary text-xs btn-primary focus:outline-none active:shadow-none mr-2 my-1">
            Redis
          </span>
          <span className="py-1 px-2 no-underline rounded-full bg-primary btn-shadow text-lightgray font-primary text-xs btn-primary focus:outline-none active:shadow-none mr-2 my-1">
            TailwindCSS
          </span>
        </div>
        <div className="py-4 px-6">
          <h3 className="text-2xl font-semibold text-secondary">
            Binance Taker Trades
          </h3>
          <p className={`${theme === 'dark' ? `text-gray-400` : `text-gray-700`} py-2 text-md`}>
            A cryptocurrency market order volume monitor. Using Binance
            exchange's API, it manipulates data and displays it live on the
            front-end in a sortable and easy to consume table.
          </p>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="px-2 text-sm">
              <button href="#">Get More Info</button>
            </span>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span className="px-2 text-sm">
              <button href="#">Visit Site</button>
            </span>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faGithub} />
            <span className="px-2 text-sm">
              <button href="#">View Server Code</button>
            </span>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faGithub} />
            <span className="px-2 text-sm"><button href="#">View Client Code</button></span>
          </div>
        </div>
      </div>
    );
}

export default Card;