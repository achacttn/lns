import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Tech from './Tech';
import Home from './Home';
import './Content.css';

class Content extends React.Component {
    render() {
        return (
            <div className="Content-main">
            <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/tech" component={Tech}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
            </div>
        )
    }
}

export default Content;