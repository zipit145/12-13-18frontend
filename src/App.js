import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/footer'
import AccountList from './components/accountList'
import TransList from './components/transactionList'
import WelcomePage from './components/welcomePage'

class App extends Component {
  render() {
    return (
      <div className="siteBG">
        <Header />
        <WelcomePage />
        <AccountList />
        <TransList />
        <Footer />
      </div>
    );
  }
}

export default App;
