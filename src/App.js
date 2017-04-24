/* styles (loaded first to allow overrides) */
import './App.css';

/* libraries */
import React from 'react';
import request from 'superagent';

/* project components */
import Header from './components/Header';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

export default React.createClass({

  getInitialState() {
    return {
      transparentHeader: true,
      isMenuOpen: false,
      form: {
        name: '',
        email: '',
        message: '',
        success: false,
        error: '',
        loading: false
      }
    };
  },

  setTransparent(bool) {
    this.setState({
      transparentHeader: bool
    });
  },

  handleMenuChange(state) {
    this.setState({
      isMenuOpen: state.isOpen
    });
  },

  getFormAtrb(event, atrb) {
    return event.target
      .querySelector(`#${atrb}`).value;
  },

  handleSubmitForm(event) {
    event.preventDefault();

    this.setState({
      form: {
        loading: true
      }
    });

    request
      .post('https://s5ry6lxrc8.execute-api.us-east-1.amazonaws.com/latest')
      .query({
        name: this.getFormAtrb(event, 'name'),
        email: this.getFormAtrb(event, 'email')
      })
      .set('Content-Type', 'text/plain')
      .send(this.getFormAtrb(event, 'message'))
      .then(res => {
        this.setState({
          form: {
            success: res.body,
            loading: false
          }
        })
      })
      .catch(err => {
        console.log(err.response);
        let res;
        if (err.status >= 400) {
          res = err.response.body.error;
        } else {
          res = 'Connection error, please try again.';
        }
        this.setState({
          form: {
            error: res,
            loading: false
          }
        })
      });
  },

  render() {
    return (
      <div className='app-wrapper'>
        <Header
          transparent={
            this.props.location.pathname === '/' ?
              this.state.transparentHeader :
              false
          }
        >
          <Menu />
          <MobileMenu
            isMenuOpen={this.state.isMenuOpen}
            handleMenuChange={this.handleMenuChange}
          />
        </Header>

        {React.cloneElement(this.props.children,
          { setTransparent: this.setTransparent })}

        {['/brochure'].findIndex(route =>
          this.props.location.pathname !== route) ?
          null :
          <Footer
            form={this.state.form}
            handleSubmitForm={this.handleSubmitForm}
          />
        }

      </div>
    );
  }

});