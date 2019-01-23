import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className='header-line'>
                  <div className="text-info header-text-container shadow shadow-lg">
                        <strong className='header-text shadow-lg shadow '>{this.props.text}</strong>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;