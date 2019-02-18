import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="NavigationBar-main">
                <div className="imgContainer">
                    <img className="companyLogoImage" src="" alt=""/>
                </div>
                <ul className="NavigationListContainer">
                    <li className="NavigationListElement NavigationListElement1"><NavLink className="NavigationLink" to="/">Home</NavLink></li>
                    <li className="NavigationListElement NavigationListElement2"><NavLink className="NavigationLink" to="/about">About</NavLink></li>
                    <li className="NavigationListElement NavigationListElement3"><NavLink className="NavigationLink" to="/products">Products</NavLink></li>
                    <li className="NavigationListElement NavigationListElement4"><NavLink className="NavigationLink" to="/tech">Technology</NavLink></li>
                    <li className="NavigationListElement NavigationListElement5"><NavLink className="NavigationLink" to="/compare">Compare</NavLink></li>
                    <li className="NavigationListElement NavigationListElement6"><NavLink className="NavigationLink" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;
