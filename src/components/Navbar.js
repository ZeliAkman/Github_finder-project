import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}

Navbar.defaultProps ={ //default parametresi bunu yazınca app.js dekı tanımlamaları geri cektık 
    title:" Github Finder",
    icon:"fab fa-github "
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
     //yukarda bunu ımport ettık,zorunlu kıldık parametreleri
     
}





export default Navbar;
