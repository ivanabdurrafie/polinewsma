import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Image from "react-bootstrap/Image";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {/* <h1>INI home</h1> */}

          {/* <Carousel /> */}
          <div class="world-news">
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex position-relative  float-left">
                  <h3 class="section-title">Polinema News</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/travel.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">Events</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  Refugees flood Turkey's border with Greece
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/news.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">Blog</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/art.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">Blog</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  These puppies are training to assist in avalanche rescue
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div class="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div class="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/business.jpg"
                    class="img-fluid"
                    alt="world-news"
                  />
                  <span class="thumb-title">Blog</span>
                </div>
                <h5 class="font-weight-bold mt-3">
                  'Love Is Blind' couple opens up about their first year
                </h5>
                <p class="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" class="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
            </div>
            <div class="popular-news">
              <div class="row">
                <div class="col-lg-3">
                  <div class="d-flex position-relative float-left">
                    <h3 class="section-title">Editor choice</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-sm-4  mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-9.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">LIFESTYLE</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        The island country that gave Mayor Pete his name
                      </h5>
                    </div>
                    <div class="col-sm-4 mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-10.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">SPORTS</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        Disney parks expand (good) vegan food options
                      </h5>
                    </div>
                    <div class="col-sm-4 mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-11.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">INTERNET</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        A hot springs where clothing is optional after dark
                      </h5>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-sm-4 mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-12.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">NEWS</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        Japanese chef carves food into incredible pieces of art
                      </h5>
                    </div>
                    <div class="col-sm-4 mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-13.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">NEWS</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        The Misanthrope Society: A Taipei bar for people who
                      </h5>
                    </div>
                    <div class="col-sm-4 mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-14.jpg"
                          class="img-fluid"
                          alt="world-news"
                        />
                        <span class="thumb-title">TOURISM</span>
                      </div>
                      <h5 class="font-weight-600 mt-3">
                        From Pakistan to the Caribbean: Curry's journey
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="position-relative mb-3">
                    <img
                      src="assets/images/dashboard/star-magazine-15.jpg"
                      class="img-fluid"
                      alt="world-news"
                    />
                    <div class="video-thumb text-muted">
                      <span>
                        <i class="mdi mdi-menu-right"></i>
                      </span>
                      LIVE
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="d-flex position-relative float-left">
                        <h3 class="section-title">Latest News</h3>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="border-bottom pb-3">
                        <h5 class="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p class="text-color m-0 d-flex align-items-center">
                          <span class="fs-10 mr-1">2 hours ago</span>
                          <i class="mdi mdi-bookmark-outline mr-3"></i>
                          <span class="fs-10 mr-1">126</span>
                          <i class="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="border-bottom pt-4 pb-3">
                        <h5 class="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p class="text-color m-0 d-flex align-items-center">
                          <span class="fs-10 mr-1">2 hours ago</span>
                          <i class="mdi mdi-bookmark-outline mr-3"></i>
                          <span class="fs-10 mr-1">126</span>
                          <i class="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="border-bottom pt-4 pb-3">
                        <h5 class="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p class="text-color m-0 d-flex align-items-center">
                          <span class="fs-10 mr-1">2 hours ago</span>
                          <i class="mdi mdi-bookmark-outline mr-3"></i>
                          <span class="fs-10 mr-1">126</span>
                          <i class="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <h5 class="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p class="text-color m-0 d-flex align-items-center">
                          <span class="fs-10 mr-1">2 hours ago</span>
                          <i class="mdi mdi-bookmark-outline mr-3"></i>
                          <span class="fs-10 mr-1">126</span>
                          <i class="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
