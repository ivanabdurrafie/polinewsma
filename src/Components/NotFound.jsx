import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="error-wrap">
                <div class="error-title">404</div>
                <div class="error-sub-title">
                  Oops! That Page Can’t Be Found.
                </div>
                <p>Maybe Try to Navigate To Homepage.</p>

              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
