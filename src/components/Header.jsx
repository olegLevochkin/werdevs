import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import classnames from "classnames";

import logo from '../assets/img/logo.jpg';

function Header() {
    const [url, setUrl] = React.useState();
    const location = useLocation();

    React.useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </Link>
                <ul className="nav" >
                    <Link to="/">
                        <li className="nav__item nav__item_active"><a className="nav__link" id="home" >Home</a></li>
                    </Link>
                    <Link to="/about">
                        <li className="nav__item"><a  className={classnames('nav__link', {
                            'active': url === '/about'
                        })} id="about">About us</a></li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
