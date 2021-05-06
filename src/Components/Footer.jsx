import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="border-top"></div>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title">
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
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title">
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
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title">
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
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title">
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
            <div class="row">
              <div class="col-sm-12">
                <div class="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom">
                  <ul class="footer-horizontal-menu">
                    
                  </ul>
                  <p class="font-weight-medium">
                    © 2020{" "}
                    <a
                      href="https://www.bootstrapdash.com/"
                      target="_blank"
                      class="text-dark"
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
