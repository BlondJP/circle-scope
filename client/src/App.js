import React, { Component } from 'react';
import './App.css';
import Scope from './components/scope/Scope'
import 'bulma/css/bulma.css'
import Calculator from './components/taxes/Calculator'
import EurlEarnings from './components/eurl-earnings/EurlEarnings'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showIrCalculator : false,
      showEurlEarnings : false
    }
  }

  chooseIrCalculator = (e) => {
    this.setState({
      showIrCalculator : true,
      showEurlEarnings : false
    })
  }
  chooseEurlEarnings = (e) => {
    this.setState({
      showIrCalculator : false,
      showEurlEarnings : true
    })
  }

  render() {

    const displayCalculator = this.state.showIrCalculator ? <Calculator /> : null
    const displayEurlEarnings = this.state.showEurlEarnings ? <EurlEarnings /> : null

    return (
          <div>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" >
                  <img src="https://bulma.io/images/bulma-logo.png"  width="112" height="28" />
                </a>
                <a class="navbar-item" onClick={this.chooseIrCalculator}>
                  Calcul de l'IR
                </a>
                <a class="navbar-item" onClick={this.chooseEurlEarnings}>
                  EURL salaire net
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>

                </div>
              </nav><br />

            {displayCalculator}
            {displayEurlEarnings}

          </div>
          );
  }

}

export default App;
