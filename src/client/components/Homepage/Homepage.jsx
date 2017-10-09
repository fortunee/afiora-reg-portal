import React, { Component } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar'
import { SignupForm } from './SignupForm';
import Footer from '../Footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="row center-block">
        <NavigationBar />
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
