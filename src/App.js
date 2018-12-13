import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/footer'
import AccountList from './components/accountList'
import TransList from './components/transactionList'
import WelcomePage from './components/welcomePage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      accounts: [],
      transactions: []
    }
  }
  componentDidMount() {
    this.loadUsers()
    this.loadAccounts()
    this.loadTransactions()
  }
  loadUsers = () => {
    fetch('https://banksdb.herokuapp.com/users')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          users: response
        })
      })
  }
  loadAccounts = () => {
    fetch('https://banksdb.herokuapp.com/accounts')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          accounts: response
        })
      })
  }
  loadTransactions = () => {
    fetch('https://banksdb.herokuapp.com/transactions')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          transactions: response
        })
      })
  }
  accountInfoClick = () => {

  }
  render() {
    return (
      <div className='siteBG'>
        <Header />
        <Route path='/' exact render={() => (<WelcomePage />)} />
        <Route path='/accounts' render={() => (<AccountList accountInfoClick={this.accountInfoClick} {...this.state} />)} />
        <Route path='/transactions/id/:id' render={(props) => (<TransList {...props} {...this.state} />)} />
        <Footer />
      </div>
    );
  }
}

export default App;
