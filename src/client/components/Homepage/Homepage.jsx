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
        <Footer />
      </div>
    );
  }
}
