import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="NavigationBar-main">
                <p className="NavigationHeader">L&amp;S LED Australia NZ Pty Ltd</p>
                <ul className="NavigationListContainer">
                    <li className="NavigationListElement NavigationListElement1"><NavLink to="/">Home</NavLink></li>
                    <li className="NavigationListElement NavigationListElement2"><NavLink to="/about">About L&amp;S</NavLink></li>
                    <li className="NavigationListElement NavigationListElement3"><NavLink to="/products">Products</NavLink></li>
                    <li className="NavigationListElement NavigationListElement4"><NavLink to="/Tech">Technology</NavLink></li>
                    <li className="NavigationListElement NavigationListElement5"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;