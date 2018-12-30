import React from 'react';
import './Products.css';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }

        this.displayProductsTab = this.displayProductsTab.bind(this);
    }

    displayProductsTab(event){
        let arrayOfButtons;
        if( event.currentTarget && event.currentTarget.parentNode && event.currentTarget.parentNode.children ){
            arrayOfButtons = [...event.currentTarget.parentNode.children];
        }
        let currentPosition = arrayOfButtons.indexOf(event.target);
        this.setState(state => ({
            currentTab: currentPosition
        }));
    }

    render() {

        function productTabRenderer(index){
            switch (index) {
                case 0:
                    return <div className="ProductsSquare Product0">Street Lights</div>
                case 1:
                    return <div className="ProductsSquare Product1">Highway Lights</div>
                case 2:
                    return <div className="ProductsSquare Product2">Tunnel Lights</div>
                case 3:
                    return <div className="ProductsSquare Product3">Parking Lot Lights</div>
                case 4:
                    return <div className="ProductsSquare Product4">Sports Lights</div>
                case 5:
                    return <div className="ProductsSquare Product5">IoT - Smart Lights</div>
                default:
                    return <div className="ProductsSquare Product0">Street Lights</div>
            }
        }

        return (
            <div className="Products-main">
                <div className="ProductsTitleContainer">
                    <h1 className="ProductsTitle">Outdoor lights for every situation</h1>
                </div>
                <div className="ProductsImageContainer"></div>
                <div className="ProductsGrid">
                    <div className="ProductsGrid-ButtonContainer">
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Street Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Highway Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Tunnel Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Parking Lot Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>Sports Lights</button>
                        <button className="ProductsButton" onClick={this.displayProductsTab}>IoT - Smart Lights</button>
                    </div>
                    {productTabRenderer(this.state.currentTab)}
                </div>
            </div>
        )
    }
}

export default Products;
