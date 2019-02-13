import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="About-main">
                <div className="AboutContainer">
                    <div className="AboutTitleContainer">
                        <h1 className="AboutTitle">L&amp;S - Introducing groudbreaking LED lighting technology</h1>
                    </div>
                    <div className="AboutSection AboutSection1">
                        <h3>About L&amp;S</h3>
                        <p>Korea, patents, research, vision</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet autem illo, nostrum velit quisquam quos fugit nihil optio rerum eaque ipsum soluta voluptas eveniet iusto asperiores unde ipsam earum adipisci.</p>
                    </div>
                    <div className="AboutSection AboutSection2">
                        <h3>Company Structure</h3>
                        <p>Containing more than 20 organizations, research centre, etc</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non hic maxime, sequi reiciendis consequuntur inventore quis, tenetur autem quas eligendi voluptatem ipsa atque quasi! Illum explicabo culpa debitis maxime?</p>
                    </div>
                    <div className="AboutSection AboutSection3">
                        <h3>Current Operations</h3>
                        <p>Contracts with Mexico and other countries</p>
                        <p>Television advertisements, photos etc</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis vero voluptatem quisquam id eius temporibus saepe, illum ab aliquid, dicta maxime dolorem, deleniti assumenda sunt suscipit at. Tenetur, minus.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;