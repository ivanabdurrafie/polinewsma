import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="border-top"></div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title">
                    <a href="pages/news-post.html">News</a>
                  </li>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="pages/world.html">World</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title">
                    <a href="pages/world.html">World</a>
                  </li>
                  <li>
                    <a href="pages/sports.html">Sports</a>
                  </li>
                  <li>
                    <a href="pages/art.html">Art</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title">
                    <a href="/#">Features</a>
                  </li>
                  <li>
                    <a href="/#">Photography</a>
                  </li>
                  <li>
                    <a href="/#">Video</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title">
                    <a href="/#">More</a>
                  </li>
                  <li>
                    <a href="/#">RSS</a>
                  </li>
                  <li>
                    <a href="/#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom">
                  <ul className="footer-horizontal-menu">
                    
                  </ul>
                  <p className="font-weight-medium">
                    © 2020{" "}
                    <a
                      href="https://www.bootstrapdash.com/"
                      target="_blank"
                      className="text-dark"
                    >
                      @ BootstrapDash
                    </a>
                    , Inc.All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
