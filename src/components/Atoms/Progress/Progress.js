import React from "react";
import { Button, Popover } from "antd";
import flechaWhiteSvg from "assets/images/flecha-white.png";
import flechadarckSvg from "assets/images/flecha-darck.png";
import flechaGreenSvg from "assets/images/arrow-green.png";

const TabBarProgress = ({ tab }) => {
  return (
    <Popover
      content={
        <div className={`popover-content popover-content-${tab.state}`}>
          <p className="body-small body-small-w6">{tab.stateName}</p>
          <p className="body-small body-small-w4">{tab.text}</p>
          <div className="divider" />
          {tab?.arrayItems?.map((item) => (
            <div
              className={`felx-between ${
                item.state === "complete" && "green-all"
              }`}>
              <div className="flex">
                <img src={item.icon} alt="home" className="home" />
                <p className="body-small body-small-w4">{item.text}</p>
              </div>
              <Button className="button button-transparent body-small">
                {item.titleButton}
                {item.state === "complete" ? (
                  <img src={flechaGreenSvg} className="flecha" alt="flecha" />
                ) : (
                  <img src={flechaWhiteSvg} className="flecha" alt="flecha" />
                )}
                <img
                  src={flechadarckSvg}
                  className="flecha-darck"
                  alt="flecha"
                />
              </Button>
            </div>
          ))}
          <div className="warning">
            <svg>
              <g>
                <path d="M5.00016 9.1686C7.30135 9.1686 9.16683 7.30312 9.16683 5.00193C9.16683 2.70075 7.30135 0.835266 5.00016 0.835266C2.69898 0.835266 0.833496 2.70075 0.833496 5.00193C0.833496 7.30312 2.69898 9.1686 5.00016 9.1686Z" />
                <path d="M5 3.33527V5.00193" />
                <path
                  d="M5 6.66864H5.004"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span className="body-small body-small-w6">
              Highlight tasks that are blocking us
            </span>
          </div>
        </div>
      }
      placement="bottom">
      <div className="bar-status"></div>
    </Popover>
  );
};
const Progress = ({ dummyTabsOfProgress }) => {
  return (
    <section className="Progress">
      {dummyTabsOfProgress?.map((tab) => (
        <div className={`tab tab-${tab.state}`} key={tab.key}>
          <p className="body-small body-small-w4">{tab.name}</p>
          <TabBarProgress tab={tab} />
        </div>
      ))}
    </section>
  );
};
export default Progress;
