import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return(
      <div className="container-fluid layout">
        <div className="row section-banner bg-danger">
          <div className="banner-overlay"/>
          <div className="chevron-down text-center">
            <a href="#mission">
              <i className="fa fa-chevron-down fa-5" aria-hidden="true"></i>
            </a>
          </div>
          <div className="hidden-sm hidden-xs col-md-6">
            <div className="image-wrapper">
              <img src={require('../../assets/img/africa.png')} alt="africa_logo"/>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 name-slogan text-center">
            <div className="visible-xs visible-sm small-screen"/>
            <div className="hidden-sm hidden-xs large-screen"/>
            <h1 className="text-uppercase name small-screen visible-xs visible-sm">Afiora</h1>
            <h1 className="text-uppercase name hidden-sm hidden-xs">Afiora</h1>
            <h4 className="slogan">Building bridges and communicating values through e-commerce.</h4>
          </div>
        </div>
        <div className="row section-mission" id="mission">
          <div className="row text-center"><h2>Afiora Right Now</h2></div>
          <div className="col-sm-12 col-md-4">
            <div className="mission-card">
              <div className="mission-img-holder">
                <img src={require('../../assets/img/placeholder.jpg')} alt=""/>
              </div>
              <div className="mission-desc">
                <h3>Caption</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="mission-card">
              <div className="mission-img-holder">
                <img src={require('../../assets/img/placeholder.jpg')} alt="mission_img"/>
              </div>
              <div className="mission-desc">
                <h3>Caption</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="mission-card">
              <div className="mission-img-holder">
                <img src={require('../../assets/img/placeholder.jpg')} alt=""/>
              </div>
              <div className="mission-desc">
                <h3>Caption</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row section-signup text-center">
          <div className="col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
            <h2 className="text-uppercase signup-callout">Become a merchant</h2>
            <button className="btn signup">Signup</button>
          </div>
        </div>
        <div className="row section-footer text-center">
          <p>&copy; 2017 Afiora Ltd.</p>
        </div>
      </div>
    );
  }
}

export default Layout;
