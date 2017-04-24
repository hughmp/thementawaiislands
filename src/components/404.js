import React from 'react';

import Header from './Header';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import './styles/about.css';

export default React.createClass({

    getInitialState() {
        return {
            transparentHeader: false
        };
    },

    setTransparent(bool) {
        this.setState({
            transparentHeader: bool
        });
    },

    render(){
        return (
            <div>
                <Header transparent={this.state.transparentHeader}>
                    <Menu />
                    <MobileMenu />
                </Header>

                <div className='about-content'>
                    404 - Page Not Found
                </div>

            </div>
        )
    }
});
