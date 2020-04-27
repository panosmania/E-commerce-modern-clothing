import React, { Profiler } from "react";

import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

export const Homepage = (props) => (
  <div className="homepage">
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Directory />
    </Profiler>
  </div>
);

export default Homepage;

/* 
<div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
*/
