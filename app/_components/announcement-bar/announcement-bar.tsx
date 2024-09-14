"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import "./component-slideshow.css";
import "./component-slider.css";
import "./component-list-social.css";

function AnnouncementBar() {
  const shopifyThemeSettings = useSelector(
    (state: RootState) => state.shopifyTheme.settings
  );
  console.log(shopifyThemeSettings);
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
