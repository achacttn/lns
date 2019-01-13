import React from 'react';
import './Products.css';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            currentSubTab: 0,
        }

        this.displayProductsTab = this.displayProductsTab.bind(this);
        this.submenuStateChanger = this.submenuStateChanger.bind(this);
    }

    displayCurrentTabName(tabNumber){
        switch (tabNumber) {
            case 1:
                return 'High Bay Lights';
            case 2:
                return 'Tunnel Lights';
            case 3:
                return 'Parking Lot Lights';
            case 4:
                return 'Sports Lights';
            case 5:
                return 'IoT - Smart Lights';
            default:
                return 'Street Lights';
        }
    }

    async displayProductsTab(event){
        try {
            let arrayOfButtons;
            if( event.currentTarget && event.currentTarget.parentNode && event.currentTarget.parentNode.children ){
                arrayOfButtons = [...event.currentTarget.parentNode.children];
                let currentPosition = arrayOfButtons.indexOf(event.target);
                this.setState(() => ({
                    currentTab: currentPosition,
                    currentSubTab: 0,
                }));
            }
        } catch (error) {
            console.log('Error in displayProductsTab: ', error);
            throw new Error(error);
        }
    }

    async submenuStateChanger(event){
        try {
            let arrayOfButtons;
            if (event.currentTarget && event.currentTarget.parentNode && event.currentTarget.parentNode.children) {
                arrayOfButtons = [...event.currentTarget.parentNode.children];
                let currentPosition = arrayOfButtons.indexOf(event.target);
                this.setState(() => ({
                    currentSubTab: 0,
                }));
                this.setState(() => ({
                    currentSubTab: currentPosition,
                }));
            }
        } catch (error) {
            console.log('Error in submenuStateChanger: ', error);
            throw new Error(error);
        }
    }

    displayDecider(tabNum){
        if( tabNum === this.state.currentTab ){
            return { visibility: 'visible' }
        }
        else {
            return { visibility: 'hidden' }
        }
    }

    productDisplayDecider(tabNum, subTabNum){
        if( tabNum === this.state.currentTab && subTabNum === this.state.currentSubTab ){
            return { visibility: 'visible' }
        } else {
            return { visibility: 'hidden' }
        }
    }

    render() {
        return (
            <div className="Products-main">
                <div className="ProductsTitleContainer">
                    <h1 className="ProductsTitle">Outdoor lights for every situation</h1>
                </div>
                <div className="ProductsImageContainer">
                    <h2 className="SpecificProductTitle">{ this.displayCurrentTabName(this.state.currentTab) }</h2>
                </div>
                <div className="ProductsGrid">
                    <div className="ProductsGrid-ButtonContainer">
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Street Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>High Bay Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Tunnel Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Parking Lot Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Sports Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>IoT - Smart Lights</button>
                    </div>
                    <div className="ProductsGrid-SubmenuContainer">
                        <div style={this.displayDecider(0)} className="ProductsSubmenu ProductsSubmenu0">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>1.0</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>1.5</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.0</button>
                        </div>
                        <div style={this.displayDecider(1)} className="ProductsSubmenu ProductsSubmenu1">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>1.0</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.0</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.0 canopy</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.5</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>HR</button>
                        </div>
                        <div style={this.displayDecider(2)} className="ProductsSubmenu ProductsSubmenu2">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>1.5 Long</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>1.5 Short</button>
                        </div>
                        <div style={this.displayDecider(3)} className="ProductsSubmenu ProductsSubmenu3">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.0 Parking Lot</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>2.0 Parking Garage</button>
                        </div>
                        <div style={this.displayDecider(4)} className="ProductsSubmenu ProductsSubmenu4">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>AC</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>DC</button>
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>Flood</button>
                        </div>
                        <div style={this.displayDecider(5)} className="ProductsSubmenu ProductsSubmenu5">
                            <button className="SubmenuButton" onClick={this.submenuStateChanger}>Smart</button>
                        </div>
                    </div>
                    <div className="ProductsSquareContainer">
                        <div className="ProductsSquare ItemTab0 ItemSubTab0" style={this.productDisplayDecider(0,0)}></div>
                        <div className="ProductsSquare ItemTab0 ItemSubTab1" style={this.productDisplayDecider(0,1)}></div>
                        <div className="ProductsSquare ItemTab0 ItemSubTab2" style={this.productDisplayDecider(0,2)}></div>
                        <div className="ProductsSquare ItemTab1 ItemSubTab0" style={this.productDisplayDecider(1,0)}></div>
                        <div className="ProductsSquare ItemTab1 ItemSubTab1" style={this.productDisplayDecider(1,1)}></div>
                        <div className="ProductsSquare ItemTab1 ItemSubTab2" style={this.productDisplayDecider(1,2)}></div>
                        <div className="ProductsSquare ItemTab1 ItemSubTab3" style={this.productDisplayDecider(1,3)}></div>
                        <div className="ProductsSquare ItemTab1 ItemSubTab4" style={this.productDisplayDecider(1,4)}></div>
                        <div className="ProductsSquare ItemTab2 ItemSubTab0" style={this.productDisplayDecider(2,0)}></div>
                        <div className="ProductsSquare ItemTab2 ItemSubTab1" style={this.productDisplayDecider(2,1)}></div>
                        <div className="ProductsSquare ItemTab3 ItemSubTab0" style={this.productDisplayDecider(3,0)}></div>
                        <div className="ProductsSquare ItemTab3 ItemSubTab1" style={this.productDisplayDecider(3,1)}></div>
                        <div className="ProductsSquare ItemTab4 ItemSubTab0" style={this.productDisplayDecider(4,0)}></div>
                        <div className="ProductsSquare ItemTab4 ItemSubTab1" style={this.productDisplayDecider(4,1)}></div>
                        <div className="ProductsSquare ItemTab4 ItemSubTab2" style={this.productDisplayDecider(4,2)}></div>
                        <div className="ProductsSquare ItemTab5 ItemSubTab0" style={this.productDisplayDecider(5,0)}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;
