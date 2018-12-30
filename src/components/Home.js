import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home-main">
                <div className="HomeBanner">
                    <h1 className="HomeBannerTitle">L&amp;S LED Australia NZ Pty Ltd</h1>
                </div>
                <div>AC LED Technology</div>
                <div>Street light</div>
                <div>Bay light</div>
                <div>Tunnel light</div>
            </div>
        )
    }
}

export default Home;