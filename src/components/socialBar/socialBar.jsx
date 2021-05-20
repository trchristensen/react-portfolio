import React from 'react';
import './socialBar.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const SocialBar = () => {
  const social = [
    {
      name: "nomadlist",
      url: "https://nomadlist.com/@christensentr",
      icon: faGlobe,
    },
    {
      name: "facebook",
      url: "https://facebook.com/trchristensen",
      icon: faFacebook,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/todd-christensen-3651b841/",
      icon: faLinkedin,
    },
    {
      name: "instagram",
      url: "https://instagram.com/tchristensen_",
      icon: faInstagram,
    },
    {
      name: "github",
      url: "http://github.com/trchristensen",
      icon: faGithub,
    },
  ];

  

  return (
    <>
        <div className="social w-full flex flex-wrap flex-row">
          <ul className="social__menu flex flex-wrap flex-row w-full">
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url} className="p-2 text-lg">
                  <FontAwesomeIcon icon={network.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
  
};

export default SocialBar;