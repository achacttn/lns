import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer-main">
                <div className="FooterSitemap">Sitemap</div>
                <div className="FooterLegal">
                    <p className="FooterText">Copyright or patent information</p>
                    <p className="FooterText">Cookie and Privacy Policy</p>
                </div>
            </div>
        )
    }
}

export default Footer;