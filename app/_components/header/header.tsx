import React from "react";

import "./component-list-menu.css";
import "./component-search.css";
import "./component-menu-drawer.css";
import "./component-cart-notification.css";
import "./component-mega-menu.css";
import "./component-cart-items.css";
import "./component-price.css";
import "./header.scss";
import "./cart-notification";

function Header() {
  return <div id="shopify-section-sections--18136567677179__header" className="shopify-section shopify-section-group-header-group section-header">
<script src="//snow-ski-poc.myshopify.com/cdn/shop/t/7/assets/details-disclosure.js?v=13653116266235556501721532921" defer={true}></script>
  <script src="//snow-ski-poc.myshopify.com/cdn/shop/t/7/assets/details-modal.js?v=25581673532751508451721532921" defer={true}></script>
  <script src="//snow-ski-poc.myshopify.com/cdn/shop/t/7/assets/cart-notification.js?v=133508293167896966491721532921" defer={true}></script>
  <script src="//snow-ski-poc.myshopify.com/cdn/shop/t/7/assets/search-form.js?v=133129549252120666541721532921" defer={true}></script><svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    <symbol id="icon-search" viewBox="0 0 18 19" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"></path>
    </symbol>
  
    <symbol id="icon-reset" className="icon icon-close" fill="none" viewBox="0 0 18 18" stroke="currentColor">
      <circle r="8.5" cy="9" cx="9" stroke-opacity="0.2"></circle>
      <path d="M6.82972 6.82915L1.17193 1.17097" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"></path>
      <path d="M1.22896 6.88502L6.77288 1.11523" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"></path>
    </symbol>
  
    <symbol id="icon-close" className="icon icon-close" fill="none" viewBox="0 0 18 17">
      <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
    </path></symbol>
  </svg><sticky-header data-sticky-type="on-scroll-up" className="header-wrapper color-scheme-1 gradient header-wrapper--border-bottom"><header className="header header--middle-left header--mobile-center page-width header--has-menu header--has-account header--has-localizations">
  
  <header-drawer data-breakpoint="tablet">
    <details id="Details-menu-drawer-container" className="menu-drawer-container">
      <summary className="header__icon header__icon--menu header__icon--summary link focus-inset" aria-label="Menu" role="button" aria-expanded="false" aria-controls="menu-drawer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
    <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
  </path></svg>
  
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </path></svg>
  
        </span>
      </summary>
      <div id="menu-drawer" className="gradient menu-drawer motion-reduce color-scheme-1">
        <div className="menu-drawer__inner-container">
          <div className="menu-drawer__navigation-container">
            <nav className="menu-drawer__navigation">
              <ul className="menu-drawer__menu has-submenu list-menu" role="list"><li><a id="HeaderDrawer-home" href="/" className="menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active" aria-current="page">
                        Home
                      </a></li><li><a id="HeaderDrawer-catalog" href="/collections/all" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                        Catalog
                      </a></li><li><a id="HeaderDrawer-contact" href="/pages/contact" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                        Contact
                      </a></li><li><a id="HeaderDrawer-about-us" href="/pages/about-us" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                        About Us
                      </a></li></ul>
            </nav>
            <div className="menu-drawer__utility-links"><a href="/account/login" className="menu-drawer__account link focus-inset h5 medium-hide large-up-hide">
                  <account-icon><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-account" fill="none" viewBox="0 0 18 19">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
  </path></svg>
  
  </account-icon>Log in</a><div className="menu-drawer__localization header-localization"><localization-form><form method="post" action="/localization" id="HeaderCountryMobileForm" accept-charset="UTF-8" className="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="return_to" value="/"><div>
                          <h2 className="visually-hidden" id="HeaderCountryMobileLabel">
                            Country/region
                          </h2>
  
  <div className="disclosure">
    <button type="button" className="disclosure__button localization-form__select localization-selector link link--text caption-large" aria-expanded="false" aria-controls="HeaderCountryMobile-country-results" aria-describedby="HeaderCountryMobileLabel">
      <span>United States |
        USD
        $</span>
      <svg aria-hidden="true" focusable="false" className="icon icon-caret" viewBox="0 0 10 6">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
  </path></svg>
  
    </button>
    <div className="disclosure__list-wrapper country-selector" hidden="">
      <div className="country-filter country-filter--no-padding">
        
        <button className="country-selector__close-button button--small link" type="button" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </path></svg>
  
        </button>
      </div>
      <div id="sr-country-search-results" className="visually-hidden" aria-live="polite"></div>
      <div className="disclosure__list country-selector__list country-selector__list--with-multiple-currencies" id="HeaderCountryMobile-country-results">
        
        <ul role="list" className="list-unstyled countries"><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" data-value="IN" id="India">
                <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">India</span>
                <span className="localization-form__currency motion-reduce">
                  INR
                  ₹</span>
              </a>
            </li><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" data-value="KR" id="South Korea">
                <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">South Korea</span>
                <span className="localization-form__currency motion-reduce">
                  KRW
                  ₩</span>
              </a>
            </li><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" aria-current="true" data-value="US" id="United States">
                <span><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">United States</span>
                <span className="localization-form__currency motion-reduce">
                  USD
                  $</span>
              </a>
            </li></ul>
      </div>
    </div>
    <div className="country-selector__overlay"></div>
  </div>
  <input type="hidden" name="country_code" value="US">
  </div></form></localization-form>
                  
  <localization-form><form method="post" action="/localization" id="HeaderLanguageMobileForm" accept-charset="UTF-8" className="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="return_to" value="/"><div>
                          <h2 className="visually-hidden" id="HeaderLanguageMobileLabel">
                            Language
                          </h2><div className="disclosure">
    <button type="button" className="disclosure__button localization-form__select localization-selector link link--text caption-large" aria-expanded="false" aria-controls="HeaderLanguageMobileList" aria-describedby="HeaderLanguageMobileLabel">
      <span>English</span>
      <svg aria-hidden="true" focusable="false" className="icon icon-caret" viewBox="0 0 10 6">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
  </path></svg>
  
    </button>
    <div className="disclosure__list-wrapper" hidden="">
      <ul id="HeaderLanguageMobileList" role="list" className="disclosure__list list-unstyled"><li className="disclosure__item" tabindex="-1">
            <a className="link link--text disclosure__link caption-large focus-inset" href="#" hreflang="en" lang="en" aria-current="true" data-value="en">
              <span><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
              <span>
                English
              </span>
            </a>
          </li><li className="disclosure__item" tabindex="-1">
            <a className="link link--text disclosure__link caption-large focus-inset" href="#" hreflang="de" lang="de" data-value="de">
              <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
              <span>
                Deutsch
              </span>
            </a>
          </li></ul>
    </div>
  </div>
  <input type="hidden" name="locale_code" value="en">
  </div></form></localization-form></div><ul className="list list-social list-unstyled" role="list"></ul>
            </div>
          </div>
        </div>
      </div>
    </details>
  </header-drawer>
  <h1 className="header__heading"><a href="/" className="header__heading-link link link--text focus-inset"><span className="h2">Snow Ski</span></a></h1>
  
  <nav className="header__inline-menu">
    <ul className="list-menu list-menu--inline" role="list"><li><a id="HeaderMenu-home" href="/" className="header__menu-item list-menu__item link link--text focus-inset" aria-current="page">
              <span className="header__active-menu-item">Home</span>
            </a></li><li><a id="HeaderMenu-catalog" href="/collections/all" className="header__menu-item list-menu__item link link--text focus-inset">
              <span>Catalog</span>
            </a></li><li><a id="HeaderMenu-contact" href="/pages/contact" className="header__menu-item list-menu__item link link--text focus-inset">
              <span>Contact</span>
            </a></li><li><a id="HeaderMenu-about-us" href="/pages/about-us" className="header__menu-item list-menu__item link link--text focus-inset">
              <span>About Us</span>
            </a></li></ul>
  </nav>
  
  <div className="header__icons header__icons--localization header-localization">
        <div className="desktop-localization-wrapper"><localization-form className="small-hide medium-hide" data-prevent-hide=""><form method="post" action="/localization" id="HeaderCountryForm" accept-charset="UTF-8" className="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="return_to" value="/"><div>
                  <h2 className="visually-hidden" id="HeaderCountryLabel">Country/region</h2>
  
  <div className="disclosure">
    <button type="button" className="disclosure__button localization-form__select localization-selector link link--text caption-large" aria-expanded="false" aria-controls="HeaderCountry-country-results" aria-describedby="HeaderCountryLabel">
      <span>United States |
        USD
        $</span>
      <svg aria-hidden="true" focusable="false" className="icon icon-caret" viewBox="0 0 10 6">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
  </path></svg>
  
    </button>
    <div className="disclosure__list-wrapper country-selector" hidden="">
      <div className="country-filter country-filter--no-padding">
        
        <button className="country-selector__close-button button--small link" type="button" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </path></svg>
  
        </button>
      </div>
      <div id="sr-country-search-results" className="visually-hidden" aria-live="polite"></div>
      <div className="disclosure__list country-selector__list country-selector__list--with-multiple-currencies" id="HeaderCountry-country-results">
        
        <ul role="list" className="list-unstyled countries"><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" data-value="IN" id="India">
                <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">India</span>
                <span className="localization-form__currency motion-reduce">
                  INR
                  ₹</span>
              </a>
            </li><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" data-value="KR" id="South Korea">
                <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">South Korea</span>
                <span className="localization-form__currency motion-reduce">
                  KRW
                  ₩</span>
              </a>
            </li><li className="disclosure__item" tabindex="-1">
              <a className="link link--text disclosure__link caption-large focus-inset" href="#" aria-current="true" data-value="US" id="United States">
                <span><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
                <span className="country">United States</span>
                <span className="localization-form__currency motion-reduce">
                  USD
                  $</span>
              </a>
            </li></ul>
      </div>
    </div>
    <div className="country-selector__overlay"></div>
  </div>
  <input type="hidden" name="country_code" value="US">
  </div></form></localization-form>
          
  <localization-form className="small-hide medium-hide" data-prevent-hide=""><form method="post" action="/localization" id="HeaderLanguageForm" accept-charset="UTF-8" className="localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization"><input type="hidden" name="utf8" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="return_to" value="/"><div>
                  <h2 className="visually-hidden" id="HeaderLanguageLabel">Language</h2><div className="disclosure">
    <button type="button" className="disclosure__button localization-form__select localization-selector link link--text caption-large" aria-expanded="false" aria-controls="HeaderLanguageList" aria-describedby="HeaderLanguageLabel">
      <span>English</span>
      <svg aria-hidden="true" focusable="false" className="icon icon-caret" viewBox="0 0 10 6">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
  </path></svg>
  
    </button>
    <div className="disclosure__list-wrapper" hidden="">
      <ul id="HeaderLanguageList" role="list" className="disclosure__list list-unstyled"><li className="disclosure__item" tabindex="-1">
            <a className="link link--text disclosure__link caption-large focus-inset" href="#" hreflang="en" lang="en" aria-current="true" data-value="en">
              <span><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
              <span>
                English
              </span>
            </a>
          </li><li className="disclosure__item" tabindex="-1">
            <a className="link link--text disclosure__link caption-large focus-inset" href="#" hreflang="de" lang="de" data-value="de">
              <span className="visibility-hidden"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  </span>
              <span>
                Deutsch
              </span>
            </a>
          </li></ul>
    </div>
  </div>
  <input type="hidden" name="locale_code" value="en">
  </div></form></localization-form></div>
        
  
  <details-modal className="header__search">
    <details>
      <summary className="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle" aria-haspopup="dialog" aria-label="Search" role="button">
        <span>
          <svg className="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false">
            <use href="#icon-search">
          </use></svg>
          <svg className="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false">
            <use href="#icon-close">
          </use></svg>
        </span>
      </summary>
      <div className="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="Search">
        <div className="modal-overlay"></div>
        <div className="search-modal__content search-modal__content-bottom" tabindex="-1"><predictive-search className="search-modal__form" data-loading-text="Loading..."><form action="/search" method="get" role="search" className="search search-modal__form">
            <div className="field">
              <input className="search__input field__input" id="Search-In-Modal" type="search" name="q" value="" placeholder="Search" role="combobox" aria-expanded="false" aria-owns="predictive-search-results" aria-controls="predictive-search-results" aria-haspopup="listbox" aria-autocomplete="list" autocorrect="off" autocomplete="off" autocapitalize="off" spellcheck="false">
              <label className="field__label" for="Search-In-Modal">Search</label>
              <input type="hidden" name="options[prefix]" value="last">
              <button type="reset" className="reset__button field__button hidden" aria-label="Clear search term">
                <svg className="icon icon-close" aria-hidden="true" focusable="false">
                  <use xlink:href="#icon-reset">
                </use></svg>
              </button>
              <button className="search__button field__button" aria-label="Search">
                <svg className="icon icon-search" aria-hidden="true" focusable="false">
                  <use href="#icon-search">
                </use></svg>
              </button>
            </div><div className="predictive-search predictive-search--header" tabindex="-1" data-predictive-search="">
  
  <link href="//snow-ski-poc.myshopify.com/cdn/shop/t/7/assets/component-loading-spinner.css?v=116724955567955766481721532921" rel="stylesheet" type="text/css" media="all">
  
  <div className="predictive-search__loading-state">
    <svg aria-hidden="true" focusable="false" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
  </div>
  
              <span className="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span></form></predictive-search><button type="button" className="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="Close">
            <svg className="icon icon-close" aria-hidden="true" focusable="false">
              <use href="#icon-close">
            </use></svg>
          </button>
        </div>
      </div>
    </details>
  </details-modal>
  
  <a href="/account/login" className="header__icon header__icon--account link focus-inset small-hide">
            <account-icon><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-account" fill="none" viewBox="0 0 18 19">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
  </path></svg>
  
  </account-icon>
            <span className="visually-hidden">Log in</span>
          </a><a href="/cart" className="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble"><svg className="icon icon-cart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
    <path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
  </svg>
  <span className="visually-hidden">Cart</span><div className="cart-count-bubble"><span aria-hidden="true">4</span><span className="visually-hidden">4 items</span>
            </div></a>
      </div>
    </header>
  </sticky-header>
  
  <cart-notification>
    <div className="cart-notification-wrapper page-width">
      <div id="cart-notification" className="cart-notification focus-inset color-scheme-1 gradient" aria-modal="true" aria-label="Item added to your cart" role="dialog" tabindex="-1">
        <div className="cart-notification__header">
          <h2 className="cart-notification__heading caption-large text-body"><svg className="icon icon-checkmark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"></path>
  </svg>
  Item added to your cart
          </h2>
          <button type="button" className="cart-notification__close modal__close-button link link--text focus-inset" aria-label="Close">
            <svg className="icon icon-close" aria-hidden="true" focusable="false">
              <use href="#icon-close">
            </use></svg>
          </button>
        </div>
        <div id="cart-notification-product" className="cart-notification-product"></div>
        <div className="cart-notification__links">
          <a href="/cart" id="cart-notification-button" className="button button--secondary button--full-width">View cart</a>
          <form action="/cart" method="post" id="cart-notification-form">
            <button className="button button--primary button--full-width" name="checkout">
              Check out
            </button>
          </form>
          <button type="button" className="link button-label">Continue shopping</button>
        </div>
      </div>
    </div>
  </cart-notification>
  <style data-shopify="">
    .cart-notification {
      display: none;
    }
  </style>
  
  
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Snow Ski",
      
      "sameAs": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "url": "https:\/\/snow-ski-poc.myshopify.com"
    }
  </script>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Snow Ski",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https:\/\/snow-ski-poc.myshopify.com\/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "url": "https:\/\/snow-ski-poc.myshopify.com"
      }
    </script>
  </div>;
}

export default Header;
