import React from "react";

import "./component-slideshow.css";
import "./component-slider.css";
import "./component-list-social.css";

function AnnouncementBar() {
  return (
    <div className="utility-bar color-scheme-1 gradient utility-bar--bottom-border">
      <div className="page-width utility-bar__grid">
        <div
          className="announcement-bar"
          role="region"
          aria-label="Announcement"
        >
          <p className="announcement-bar__message h5">
            <span>Welcome to our store</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
