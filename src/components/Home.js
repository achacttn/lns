import React from 'react';
import settingsSvg from '../assets/gen/settings.svg';
import flashSvg from '../assets/gen/flash.svg';
import cloudComputingSvg from '../assets/gen/cloud-computing.svg';
import homeBanner from '../assets/gen/lit-bridge.jpg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (

            <div className="Container">
                <div className="Home-main">
                    <div className="HomeBanner">
                        <img className="BannerImage" src={homeBanner} alt="Home Banner"/>
                        <h1 className="HomeBannerTitle">L&amp;S LED Australia NZ Pty Ltd</h1>
                    </div>
                    {/* <div className="tripleBanner">
                        <div className="banner banner1">
                            <div className="banner-img-container banner1-img-container">
                                <img src={flashSvg} alt="Company Logo" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner1-title">L&amp;S LED</h2>
                            <p className="banner-text banner1-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum optio aspernatur impedit. Esse at sunt perspiciatis, maxime ipsa soluta molestias laborum eveniet magnam a ipsum unde error placeat. Dolore!</p>
                        </div>
                        <div className="banner banner2">
                            <div className="banner-img-container banner2-img-container">
                                <img src={settingsSvg} alt="Gears" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner2-title">AC LED</h2>
                            <p className="banner-text banner2-text">Reliabl longer lifespan.<br/>Convenient installation and maintenance.<br/>60% more power efficient.<br/>Compact, lightweight, and flexible design.</p>
                        </div>
                        <div className="banner banner3">
                            <div className="banner-img-container banner3-img-container">
                                <img src={cloudComputingSvg} alt="IoT Logo" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner3-title">IoT</h2>
                            <p className="banner-text banner3-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus ullam distinctio deserunt hic, blanditiis ipsum facere aspernatur corporis dolores veritatis, cum debitis. Similique fugit eligendi modi harum cumque tempore?</p>
                        </div>
                    </div> */}
                    <div className="HomeGridContainer">
                        <div className="HomeGrid">
                            <div className="HomeGridRow HomeGridRow1">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>AC LED Technology</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum atque excepturi illo qui dolorum, molestiae saepe cumque quaerat. Consectetur alias molestiae repudiandae harum accusamus numquam optio doloremque adipisci recusandae!</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                            <div className="HomeGridRow HomeGridRow2">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>Smart Lights and IoT</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum atque excepturi illo qui dolorum, molestiae saepe cumque quaerat. Consectetur alias molestiae repudiandae harum accusamus numquam optio doloremque adipisci recusandae!</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                            <div className="HomeGridRow HomeGridRow3">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>Street Lights</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum atque excepturi illo qui dolorum, molestiae saepe cumque quaerat. Consectetur alias molestiae repudiandae harum accusamus numquam optio doloremque adipisci recusandae!</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                            <div className="HomeGridRow HomeGridRow4">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>Bay Lights</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum atque excepturi illo qui dolorum, molestiae saepe cumque quaerat. Consectetur alias molestiae repudiandae harum accusamus numquam optio doloremque adipisci recusandae!</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                            <div className="HomeGridRow HomeGridRow5">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>Tunnel Lights</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum atque excepturi illo qui dolorum, molestiae saepe cumque quaerat. Consectetur alias molestiae repudiandae harum accusamus numquam optio doloremque adipisci recusandae!</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                            <div className="HomeGridRow HomeGridRow6">
                                <div className="HomeSectionLeft HomeSection">
                                    <h3>Stadium Lights</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, voluptatum doloremque ab ipsa est optio odit hic debitis itaque dolores illum deleniti voluptate quam animi possimus placeat libero doloribus.</p>
                                </div>
                                <div className="HomeSectionRight HomeSection"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        )
    }
}

export default Home;
