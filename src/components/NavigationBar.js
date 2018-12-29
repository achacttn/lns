import React from 'react';
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="NavigationBar-main">
                <p className="NavigationHeader">L&amp;S LED A-NZ Pty Ltd</p>
                <ul className="NavigationListContainer">
                    <li className="NavigationListElement NavigationListElement1">Products</li>
                    <li className="NavigationListElement NavigationListElement2">About</li>
                    <li className="NavigationListElement NavigationListElement3">Contact</li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;