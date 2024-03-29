import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { themeState } from '../../atoms/themeState';
import { useRecoilValue } from 'recoil';

const Card = (props) => {

  const theme = useRecoilValue(themeState);

  return (
    <div className={`card shadow max-w-full rounded-lg overflow-hidden my-4 border ${ theme === 'dark' ? `border-gray-700` : `` }`}>
      <img
        className="w-full h-72 object-cover object-top"
        src={props.data.image.src}
        alt="avatar"
      />
      <div className="flex flex-wrap items-center px-6 py-1">
        {props.data.tags.map((tag) => (
          <span className={
            `py-1 px-2 mr-2 my-1 no-underline bg-primary btn-shadow shadow text-secondary rounded-md border-gray-700 border-opacity-75 font-primary text-xs`
            }>
            {tag}
          </span>
        ))}
      </div>
      <div className="py-4 px-6 flex flex-col flex-wrap">
        <div>
          <h3 className="text-2xl text-secondary">{props.data.title}</h3>
          <p className={`text-secondary py-2 text-md`}>
            {props.data.description}
          </p>
        </div>
        <div className="w-full flex flex-row flex-wrap">
          {props.data.links.map((link, index) => {
            return (
              <div
                key={index}
                className="flex items-center mt-2 text-secondary w-1/2 min-w-1/2"
              >
                <FontAwesomeIcon icon={link.fa_icon} />
                <span className="px-2 text-sm">
                  <a rel="noopener noreferrer" target="_blank" href={link.url}>
                    {link.text}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
