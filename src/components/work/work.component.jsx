import React from "react";
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faLinkedin, faInstagram, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
const Work = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);
  let num = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <section
        id="work"
        className="min-h-screen flex items-center justify-center w-full bg-primary"
      >
        <Waypoint onEnter={() => setActiveSection("work")} />
        <div className="container flex flex-col px-10 lg:px-16 flex-wrap items-center justify-center ">
          <div className="w-full grid grid-flow-row grid-cols-3 grid-rows gap-4">
            {num.map((tile) => {
              return (
                <div className="tile border rounded-md bg-tertiary">
                  <div className="tile__inner p-6">
                    <a>
                      <div className="tile__inner-content">
                        <h3 className="text-secondary text-xl">
                          Binance Taker Trades
                        </h3>
                        <p className="text-secondary primary-font">
                          A cryptocurrency market order volume monitor. Using
                          Binance exchange's API, it manipulates data and
                          displays it live on the front-end in a sortable and
                          easy to consume table.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
