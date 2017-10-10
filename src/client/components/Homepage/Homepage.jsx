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
            <div style={{padding: '10px'}} />
            <h1 className="shop-name">Afiaora</h1>
            <h3 className="brand-title">Building bridges, connecting people...</h3>
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
