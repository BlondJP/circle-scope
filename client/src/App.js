import React, { Component } from 'react';
import './App.css';
import Scope from './components/scope/Scope'
import 'bulma/css/bulma.css'
import Calculator from './components/taxes/Calculator'
class App extends Component {

  render() {
    return (

          <div>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png"  width="112" height="28" />
              </a>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>

            </div>
          </nav><br />

          <Calculator />
          </div>



          );
  }

}

export default App;
