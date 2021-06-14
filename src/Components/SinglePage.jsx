import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

export default function SinglePage() {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // console.log(idBerita);
    const url = `http://localhost:8000/api/news/${id}`;
    console.log(news.data);
    axios
      .get(url, {
        params: {},
      })
      .then((berita) => {
       setNews(berita.data)
      });
  });
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="news-post-wrapper">
              <div className="news-post-wrapper-sm ">
                <h1 className="text-center">{news.title}</h1>
                <div className="text-center">
                  <a href="#" className="btn btn-dark font-weight-bold mb-4">
                    {news.topic}
                  </a>
                </div>
                <p className="fs-15 d-flex justify-content-center align-items-center m-0">
                  {news.date}
                </p>
              </div>
              <img
                src={news.image}
                alt="news"
                className="img-fluid mb-4"
              />
              <div className="news-post-wrapper-sm ">
                {ReactHtmlParser(news.isi)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

