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
      hasError: false,
      registrationSuccessful: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.createMerchant = this.createMerchant.bind(this);
  }

  handleChange(e) {
    /**
     * clear error if all required fields are filled
     */
    if (
      this.state.businessName !== '' &&
      this.state.email !== '' &&
      this.state.username !== '' &&
      this.state.password !== ''
    ) {
      this.setState((prevState) => {
        return {
          hasError: prevState.hasError = false
        }
      });
    }
    this.setState({[e.target.name]: e.target.value});
  }

  createMerchant(e) {
    e.preventDefault();
    /**
     * show error if all required fields are not filled
     */
    if (
      this.state.businessName === '' ||
      this.state.email === '' ||
      this.state.username === '' ||
      this.state.password === ''
    ) {
      return this.setState((prevState) => {
        return {
          hasError: prevState.hasError = true
        }
      });
    } else {
      const productCategories = document.getElementsByClassName('filter-option')[0].innerText.split(' ,');
      this.setState((prevState) => {
        return {
          productCategories: prevState.productCategories = productCategories
        }
      });
      this.props.createMerchant(this.state);
      
      if (this.props.created) {
        this.setState((prevState) => {
          return {
            businessName: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            isVerified: false,
            admin: false,
            productCategories: ['General Merchandise'],
            address: '',
            hasError: false,
            registrationSuccessful: prevState.registrationSuccessful = true
          }
        });
      }
    }
  }

  render() {
    return (
      <div className="signup">
        { this.state.registrationSuccessful ?
          <div>
            <h4 className="text-success">Thank You for registering with us!</h4>
            <p className="text-info">Please check your email to <strong>verify your account.</strong></p>
            <p className="text-warning">We'll keep you posted on new developments and our luch date.</p>
          </div> :
          <form>
            <h3 className="signup-title">Register Now!!!</h3>
            { this.state.hasError ? <h5 className="text-danger">All fields must be filled.</h5> : null}

            <h5 className="text-danger">{this.props.createMerchantError}</h5>

            <div className="form-group">
              <input
                type="text"
                className="form-control signup"
                name="businessName"
                id="businessName"
                placeholder="Business name"
                onChange={this.handleChange}
                value={this.state.businessName}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control signup"
                name="address"
                placeholder="Address"
                onChange={this.handleChange}
                value={this.state.address}
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
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control signup"
                name="phone"
                placeholder="Phone number"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control signup"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control signup"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
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
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    created: state.MerchantStore.created,
    createMerchantError: state.MerchantStore.error,
  }
}

export default connect(mapStateToProps, { createMerchant })(SignupForm);
