import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
// import Carousel from "./Carousel";
// import Image from "react-bootstrap/Image";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost:8000/api/news";
    axios
      .get(url, {
        params: {
          limit: 2,
        },
      })
      .then((news) => {
        console.log(news.data);
        this.setState({
          news: news.data,
        });
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {/* <h1>INI home</h1> */}

          {/* <Carousel /> */}
          <div className="world-news">
            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">Polinema News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.news.map((berita) => {
                return (
                  <div
                    className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2"
                    key={berita.id}
                  >
                    <div className="position-relative image-hover">
                      <img
                        src={berita.image}
                        className="img-fluid"
                        alt="world-news"
                      />
                      <span className="thumb-title">{berita.topic}</span>
                    </div>
                    <h5 className="font-weight-bold mt-3">{berita.title}</h5>
                    <p className="fs-15 font-weight-normal">{berita.date}</p>
                    <Link to={`news/${berita.id}`} className="font-weight-bold text-dark pt-2" > Read Article</Link>
                    {/* <a href="news/'${berita.id}'" className="font-weight-bold text-dark pt-2">
                     
                    </a> */}
                  </div>
                );
              })}
              {/* <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/travel.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">Events</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  Refugees flood Turkey's border with Greece
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/news.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">Blog</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  South Korea’s Moon Jae-in sworn in vowing address
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/art.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">Blog</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  These puppies are training to assist in avalanche rescue
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div>
              <div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src="assets/images/dashboard/business.jpg"
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">Blog</span>
                </div>
                <h5 className="font-weight-bold mt-3">
                  'Love Is Blind' couple opens up about their first year
                </h5>
                <p className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
                <a href="#" className="font-weight-bold text-dark pt-2">
                  Read Article
                </a>
              </div> */}
            </div>
            {/* <div className="popular-news">
              <div className="row">
                <div className="col-lg-3">
                  <div className="d-flex position-relative float-left">
                    <h3 className="section-title">Editor choice</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-sm-4  mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-9.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">LIFESTYLE</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        The island country that gave Mayor Pete his name
                      </h5>
                    </div>
                    <div className="col-sm-4 mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-10.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">SPORTS</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        Disney parks expand (good) vegan food options
                      </h5>
                    </div>
                    <div className="col-sm-4 mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-11.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">INTERNET</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        A hot springs where clothing is optional after dark
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4 mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-12.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">NEWS</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        Japanese chef carves food into incredible pieces of art
                      </h5>
                    </div>
                    <div className="col-sm-4 mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-13.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">NEWS</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        The Misanthrope Society: A Taipei bar for people who
                      </h5>
                    </div>
                    <div className="col-sm-4 mb-5 mb-sm-2">
                      <div className="position-relative image-hover">
                        <img
                          src="assets/images/dashboard/star-magazine-14.jpg"
                          className="img-fluid"
                          alt="world-news"
                        />
                        <span className="thumb-title">TOURISM</span>
                      </div>
                      <h5 className="font-weight-600 mt-3">
                        From Pakistan to the Caribbean: Curry's journey
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="position-relative mb-3">
                    <img
                      src="assets/images/dashboard/star-magazine-15.jpg"
                      className="img-fluid"
                      alt="world-news"
                    />
                    <div className="video-thumb text-muted">
                      <span>
                        <i className="mdi mdi-menu-right"></i>
                      </span>
                      LIVE
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="d-flex position-relative float-left">
                        <h3 className="section-title">Latest News</h3>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="border-bottom pb-3">
                        <h5 className="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p className="text-color m-0 d-flex align-items-center">
                          <span className="fs-10 mr-1">2 hours ago</span>
                          <i className="mdi mdi-bookmark-outline mr-3"></i>
                          <span className="fs-10 mr-1">126</span>
                          <i className="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="border-bottom pt-4 pb-3">
                        <h5 className="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p className="text-color m-0 d-flex align-items-center">
                          <span className="fs-10 mr-1">2 hours ago</span>
                          <i className="mdi mdi-bookmark-outline mr-3"></i>
                          <span className="fs-10 mr-1">126</span>
                          <i className="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="border-bottom pt-4 pb-3">
                        <h5 className="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p className="text-color m-0 d-flex align-items-center">
                          <span className="fs-10 mr-1">2 hours ago</span>
                          <i className="mdi mdi-bookmark-outline mr-3"></i>
                          <span className="fs-10 mr-1">126</span>
                          <i className="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="pt-4">
                        <h5 className="font-weight-600 mt-0 mb-0">
                          South Korea’s Moon Jae-in sworn in vowing address
                        </h5>
                        <p className="text-color m-0 d-flex align-items-center">
                          <span className="fs-10 mr-1">2 hours ago</span>
                          <i className="mdi mdi-bookmark-outline mr-3"></i>
                          <span className="fs-10 mr-1">126</span>
                          <i className="mdi mdi-comment-outline"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
