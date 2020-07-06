import React from 'react';
import './socialBar.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faLinkedin, faInstagram, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';


const SocialBar = () => {
  const social = [
    {
      name: "facebook",
      url: "https://facebook.com/trchristensen",
      icon: faFacebook,
    },
    {
      name: "twitter",
      url: "http://twitter.com/shillainmanila",
      icon: faTwitter,
    },
    {
      name: "google-plus",
      url: "http://googleplus.com/trchristensen",
      icon: faGoogle,
    },
    {
      name: "linkedin",
      url: "#",
      icon: faLinkedin
    },
    {
      name: "instagram",
      url: "#",
      icon: faInstagram
    },
    {
      name: "github",
      url: "http://github.com/trchristensen",
      icon: faGithub
    },
    {
      name: "skype",
      url: "#",
      icon: faSkype
    },
  ];


  return (
    <div className="sidebar__social items-start lg:items-center pt-4 lg:pt-0">
      <ul className="social">
        {social.map((network) => (
          <li key={network.name}>
            <a href={network.url}>
              <FontAwesomeIcon icon={network.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default SocialBar;