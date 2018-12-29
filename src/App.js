import React from 'react';
// import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavigationBar />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
