import React, { Component } from 'react';
import './App.css';
import Scope from './components/scope/Scope'
import 'bulma/css/bulma.css'
import Calculator from './components/taxes/Calculator'
import EurlEarnings from './components/eurl-earnings/EurlEarnings'
import ExpenseBill from './components/expense-bill/ExpenseBill'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showIrCalculator : false,
      showEurlEarnings : false,
      showCircleScope : false,
      showExpensesCalculator: true
    }
  }
  chooseExpensesCalculator = (e) => {
    this.setState({
      showIrCalculator : false,
      showEurlEarnings : false,
      showCircleScope : false,
      showExpensesCalculator: true
    })
  }
  chooseIrCalculator = (e) => {
    this.setState({
      showIrCalculator : true,
      showEurlEarnings : false,
      showCircleScope : false,
      showExpensesCalculator: false
    })
  }
  chooseEurlEarnings = (e) => {
    this.setState({
      showIrCalculator : false,
      showEurlEarnings : true,
      showCircleScope : false,
      showExpensesCalculator: false
    })
  }
  chooseCircleScope = (e) => {
    this.setState({
      showIrCalculator : false,
      showEurlEarnings : false,
      showCircleScope : true,
      showExpensesCalculator: false
    })
  }

  render() {

    const displayCalculator = this.state.showIrCalculator ? <Calculator /> : null
    const displayEurlEarnings = this.state.showEurlEarnings ? <EurlEarnings /> : null
    const displayCircleScope = this.state.showCircleScope ? <Scope /> : null
    const displayExpenseBill = this.state.showExpensesCalculator ? <ExpenseBill /> : null

    return (
          <div>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" >
                  <img src="https://bulma.io/images/bulma-logo.png"  width="112" height="28" />
                </a>
                <a className="navbar-item" onClick={this.chooseExpensesCalculator}>
                  Calcul des dépenses
                </a>
                <a className="navbar-item" onClick={this.chooseIrCalculator}>
                  Calcul de l'IR
                </a>
                <a className="navbar-item" onClick={this.chooseEurlEarnings}>
                  EURL salaire net
                </a>
                <a className="navbar-item" onClick={this.chooseCircleScope} style={{align: "left"}}>
                  Circle Scope
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>

                </div>
              </nav>

            {displayCalculator}
            {displayEurlEarnings}
            {displayCircleScope}
            {displayExpenseBill}

          </div>
          );
  }

}

export default App;
