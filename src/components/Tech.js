import React from 'react';
import './Tech.css';

class Tech extends React.Component {
    render() {
        return (
            <div className="Tech-main">
                <div className="TechTitleContainer">
                    <h1 className="TechTitle">Our Tech</h1>
                </div>
                <ul>
                    <li>What is AC LED</li>
                    <li>Business flow</li>
                    <li>L&amp;S LED</li>
                    <li>R&amp;D</li>
                    <li>Next generation</li>
                </ul>
            </div>
        )
    }
}

export default Tech;