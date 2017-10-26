import React, { Component } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar.jsx'
import SignupForm from './SignupForm.jsx';
import Footer from '../Footer/Footer.jsx';

export default class Homepage extends Component {
  render() {
    return (
      <div className="row center-block">
        <div className="space" />

        <div className="col-md-4">
          <div className="text-center">
            <img className="hidden-xs hidden-sm" src={require('../../assets/img/africa.png')} alt="africa" height="300" />
            <div className="pad-10" />
            <h1 className="shop-name">Afiora</h1>
            <h3 className="brand-title">Building bridges, communicating values.</h3>
          </div>
        </div>

        <div className="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
          <div className="sign-in-wrapper text-center">
            <SignupForm />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="space" />
            <div className="col-md-12 about">
              <div className="col-sm-12">boo</div>
              <h3 className="text-center">About Us</h3>
              <div className="row">
                <div className="col-md-6">
                  <h4>Vision</h4>
                  <p>To be the one stop shop for everything made in Africa.</p>
                </div>
                <div className="col-md-6">
                  <h4>Mission</h4>
                  <p>Building bridges and communicating African values in form
                    of product and services to the world through E-commerce.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>Belief</h4>
                  <p>We believe that Africa the birthplace of humanity will one day
                    be the world’s largest economy and we have a major role to play in that.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>Afiora Today</h4>
                  <ul>
                    <li>The first African indigenous mall</li>
                    <li>Products available from African countries</li>
                    <li>Shoppers favourite for everything made in Africa</li>
                    <li>We sell only Authentic products</li>
                    <li>Unbeatable price</li>
                  </ul>
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
