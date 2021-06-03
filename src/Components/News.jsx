import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    const url = "https://apion.herokuapp.com/news/topic/news";
    axios
      .get(url, {
        params: {
          limit: 4,
        },
      })
      .then((news) => {
        console.log(news.data.data);
        this.setState({
          news: news.data.data,
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
                  <h3 className="section-title">News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.news.map((berita) => {
                return (
                  <div
                    className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2"
                    key={berita._id}
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
                    <a href="#" className="font-weight-bold text-dark pt-2">
                      Read Article
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
