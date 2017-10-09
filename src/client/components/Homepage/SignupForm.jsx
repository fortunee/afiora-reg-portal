import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createMerchant } from '../../actions/SignUpActions';

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      businessName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      isVerified: false,
      admin: false,
      productCategories: ['General Merchandise'],
      address: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.createMerchant = this.createMerchant.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  createMerchant(e) {
    e.preventDefault();
    const productCategories = document.getElementsByClassName('filter-option')[0].innerText.split(' ,');
    this.setState((prevState) => {
      return {
        productCategories: prevState.productCategories = productCategories
      }
    });
    this.props.createMerchant(this.state);
  }

  render() {
    return (
      <div className="signup">
        <h3>Register</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control signup"
              name="businessName"
              id="businessName"
              placeholder="Business name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control signup"
              name="address"
              placeholder="Adress"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control selectpicker"
              title="Select your product categories"
              multiple
              data-live-search="true"
              data-actions-box="true"
              name="productCategories"
              onClick={this.handleChange}
            >
              <option>General Merchandise</option>
              <option data-divider="true"></option>
              <option>Articles</option>
              <option>Stationary</option>
              <option data-divider="true"></option>
              <option>Fashion</option>
              <option>Home accessories</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control signup"
              name="email"
              placeholder="Email address"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control signup"
              name="phone"
              placeholder="Phone number"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control signup"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control signup"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-default btn-block signup"
              onClick={this.createMerchant}
            >Register</button>
          </div>
        </form>
      </div>
    );
  }
};

export default connect(null, { createMerchant })(SignupForm);
