import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavigationBar />
          <Content />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
