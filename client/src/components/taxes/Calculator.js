import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {earnings: 0};
  }

  handleEarningChange = (e) => {
    this.setState({
      earnings: e.target.value
    });
  }

  handleMonthlyEarningChange = (e) => {
    this.setState({
      earnings: e.target.value * 12
    });
  }

  calculateTaxes = (earnings) => {

    if (earnings < 0) {
      return 0
    }

    let taxes = 0;

    const bearings = [
      {id: 1, min: 0, max: 9807, taxation: 0},
      {id: 2, min: 9808, max: 27086, taxation: 14},
      {id: 3, min: 27087, max: 72617, taxation: 30},
      {id: 4, min: 72618, max: 153783, taxation: 41},
      {id: 5, min: 153783, taxation: 45},
    ]

    bearings.forEach(bearing => {
      let moneyToEval;

      if (earnings > bearing.max) {
        moneyToEval = bearing.max
      } else {
        moneyToEval = earnings
      }

      if (moneyToEval > 0) {
        taxes += (moneyToEval * bearing.taxation / 100)
      }

      earnings -= moneyToEval;
    });



    return taxes;
  }


  render() {
    const taxes = this.calculateTaxes(this.state.earnings);
    const generalTaxation = taxes / (this.state.earnings|1) * 100
    console.log(taxes)

    return (
      <div className="container">
        <h1>Estimation de l'IR</h1><br />

        <div className="notification">
        <div className='IR Calculator'>



          <form>
            <label className="label">Revenu Annuel Net</label>
            <input className="input is-primary" label="Annuel Net" type="number" placeholder="Revenus Net Annuel" value={this.state.earnings} onChange={this.handleEarningChange}/>

            <label className="label">Revenu Mensuel Net</label>
            <input className="input is-primary" label="Mensuel Net" type="number" placeholder="Revenus Net Annuel" value={this.state.earnings / 12} onChange={this.handleMonthlyEarningChange}/>
          </form><br />

          <h2>{taxes} € d'IR à payer.</h2><br />
          <h2>Votre taux d'imposition est de {generalTaxation} %</h2>
        </div>
        </div>
      </div>

    )
  }

}

export default Calculator;
