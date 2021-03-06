import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/footer'
import AccountList from './components/accountList'
import TransList from './components/transactionList'
import WelcomePage from './components/welcomePage'

class App extends Component {

  constructor(props) {
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

        <Route path='/transactions' render={() => (<TransList transactions={this.state.transactions}/>)} />

        <Route path='/accounts' render={() => (<AccountList {...this.state} />)} />


        <Footer />
      </div>
    );
  }
}

export default App;
