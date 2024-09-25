import React from "react";

import "./component-list-menu.css";
import "./component-search.css";
import "./component-menu-drawer.css";
import "./component-cart-notification.css";
import "./component-mega-menu.css";
import "./component-cart-items.css";
import "./component-price.css";
import "./header.scss";

function Header() {
  return (
    <div className="header-wrapper color-scheme-1 gradient header-wrapper--border-bottom">
      <header className="header header--middle-left header--mobile-center page-width header--has-menu header--has-account header--has-localizations">
        <h1 className="header__heading">
          <a
            href="/"
            className="header__heading-link link link--text focus-inset"
          >
            <span className="h2">Snow Ski</span>
          </a>
        </h1>
      </header>
    </div>
  );
}

export default Header;
