import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="NavigationBar-main">
                <div className="leftContainer">
                    <img className="companyLogoImage" src="data:image/png;base64,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" alt="Logo"/>
                    <p className="NavigationHeader">L&amp;S LED Australia NZ Pty Ltd</p>
                </div>
                <ul className="NavigationListContainer">
                    <li className="NavigationListElement NavigationListElement1"><NavLink to="/">Home</NavLink></li>
                    <li className="NavigationListElement NavigationListElement2"><NavLink to="/about">About L&amp;S</NavLink></li>
                    <li className="NavigationListElement NavigationListElement3"><NavLink to="/products">Products</NavLink></li>
                    <li className="NavigationListElement NavigationListElement4"><NavLink to="/tech">Technology</NavLink></li>
                    <li className="NavigationListElement NavigationListElement5"><NavLink to="/compare">Compare</NavLink></li>
                    <li className="NavigationListElement NavigationListElement6"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;
