import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Dashboard extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       news: [],
    //     };
    //   }
    //   componentDidMount() {
    //     const url = "http://localhost:8000/api/news";
    //     axios
    //       .get(url, {
    //         params: {

    //         },
    //       })
    //       .then((news) => {
    //         console.log(news.data.data);
    //         this.setState({
    //           news: news.data.data,
    //         });
    //       });
    //   }
    render() {
      return (
        <div>
            {/* <Navbar/>
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
                      <span className="thumb-title">{berita.title}</span>
                    </div>
                    <h5 className="font-weight-bold mt-3">{berita.topic}</h5>
                    <p className="fs-15 font-weight-normal">{berita.publisher}</p>
                    <a href="#" className="font-weight-bold text-dark pt-2">
                      Read Article
                    </a>
                  </div>
                );
              })} */}
        </div>


      );
    }
  }