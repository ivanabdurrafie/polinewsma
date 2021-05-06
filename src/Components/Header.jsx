import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-scroller">
          <div className="main-panel">
            <header id="header">
              <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="d-flex justify-content-between align-items-center navbar-top">
                    <ul class="navbar-left">
                      <li>Wed, March 4, 2020</li>
                      <li>30°C,London</li>
                    </ul>
                    <div>
                      <a class="navbar-brand" href="/#">
                        Polinewsma
                        {/* <img src="assets/images/logo.svg" alt="" /> */}
                      </a>
                    </div>
                    <div class="d-flex">
                      <ul class="social-media">
                        <li>
                          <a href="/#">
                            <i class="mdi mdi-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i class="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i class="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i class="mdi mdi-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i class="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="navbar-bottom-menu">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="navbar-collapse justify-content-center collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav d-lg-flex justify-content-between align-items-center">
                        <li>
                          <button class="navbar-close">
                            <i class="mdi mdi-close"></i>
                          </button>
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link active" href="index.html">
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="pages/world.html">
                            Profile
                          </a>
                        </li>
                        
                        <li class="nav-item">
                          <a class="nav-link" href="pages/news-post.html">
                            Blog
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="pages/business.html">
                            Events
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="pages/sports.html">
                            Sports
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/#">
                            <i class="mdi mdi-magnify"></i>
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
