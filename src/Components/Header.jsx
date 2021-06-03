import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-scroller">
          <div className="main-panel">
            <header id="header">
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="d-flex justify-content-between align-items-center navbar-top">
                    <ul className="navbar-left">
                      <li>Wed, March 4, 2020</li>
                      <li>30°C,London</li>
                    </ul>
                    <div>
                      <a className="navbar-brand" href="/#">
                        Polinewsma
                        {/* <img src="assets/images/logo.svg" alt="" /> */}
                      </a>
                    </div>
                    <div className="d-flex">
                      <ul className="social-media">
                        <li>
                          <a href="/#">
                            <i className="mdi mdi-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="mdi mdi-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar-bottom-menu">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="navbar-collapse justify-content-center collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                        <li>
                          <button className="navbar-close">
                            <i className="mdi mdi-close"></i>
                          </button>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link active" href="/">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/world.html">
                            Profile
                          </a>
                        </li>
                        
                        <li className="nav-item">
                          <a className="nav-link" href="news">
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/business.html">
                            Events
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="sport">
                            Sports
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/#">
                            <i className="mdi mdi-magnify"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
