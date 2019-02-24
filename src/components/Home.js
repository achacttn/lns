import React from 'react';
import gearSvg from '../assets/gen/gears.svg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (

            <div className="Container">
                <div className="Home-main">
                    {/* <img src="/static/media/lit-bridge.d17851d5.jpg" alt="Background" className="Home-image"/> */}
                    <div className="HomeBanner">
                        <h1 className="HomeBannerTitle">L&amp;S LED Australia NZ Pty Ltd</h1>
                    </div>
                    <div className="tripleBanner">
                        <div className="banner banner1">
                            <div className="banner-img-container banner1-img-container">
                                <img alt="Company Logo" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner1-title">L&amp;S LED</h2>
                            <p className="banner-text banner1-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum optio aspernatur impedit. Esse at sunt perspiciatis, maxime ipsa soluta molestias laborum eveniet magnam a ipsum unde error placeat. Dolore!</p>
                        </div>
                        <div className="banner banner2">
                            <div className="banner-img-container banner2-img-container">
                                <img src={gearSvg} alt="Gears" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner2-title">AC LED</h2>
                            <p className="banner-text banner2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa, perferendis unde repellat eos eligendi quos quidem ut deleniti repellendus quas iure illum aliquam dignissimos itaque porro ipsam dolores laboriosam.</p>
                        </div>
                        <div className="banner banner3">
                            <div className="banner-img-container banner3-img-container">
                                <img alt="IoT Logo" height="240px" width="240px"/>
                            </div>
                            <h2 className="banner-title banner3-title">IoT</h2>
                            <p className="banner-text banner3-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus ullam distinctio deserunt hic, blanditiis ipsum facere aspernatur corporis dolores veritatis, cum debitis. Similique fugit eligendi modi harum cumque tempore?</p>
                        </div>
                    </div>
                    {/* <div className="brief1">
                        <h3>Brief of AC LED</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod esse provident modi, itaque est officia sint? Distinctio, vel, illo consectetur rerum atque fuga earum quae quo maxime ex suscipit?</p>
                    </div>
                    <div className="brief2">
                        <h3>Brief of IOT</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente earum numquam cupiditate nam saepe eveniet aperiam praesentium reprehenderit. Enim molestiae alias quo deleniti maiores laboriosam suscipit voluptatem, iusto blanditiis?</p>
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
