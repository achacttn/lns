import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-main">
                <div className="FooterSitemap">
                    <h4>Sitemap</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className="FooterLegal">
                    <p className="FooterText">Copyright or patent information</p>
                    <p className="FooterText">Cookie and Privacy Policy</p>
                </div>
            </div>
        )
    }
}

export default Footer;