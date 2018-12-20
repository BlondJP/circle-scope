import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {earnings: 0, taxRebate: 0};
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

  handleTaxRebateChange = (e) => {
    this.setState({
      taxRebate: e.target.value
    });
  }

  calculateTaxes = (earnings) => {

    let earningsToTax = earnings - (earnings * (this.state.taxRebate/100));

    //console.log(earningsToTax, )

    if (earningsToTax < 0) {
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

      if (earningsToTax > bearing.max) {
        moneyToEval = bearing.max
      } else {
        moneyToEval = earningsToTax
      }

      if (moneyToEval > 0) {
        taxes += (moneyToEval * bearing.taxation / 100)
      }

      earningsToTax -= moneyToEval;
    });

    return taxes;
  }


  render() {
    const taxes = this.calculateTaxes(this.state.earnings);
    const generalTaxation = Math.round(taxes / (this.state.earnings|1) * 100)
    console.log(taxes)

    return (
      <div className="container">
        <h1>Estimation de l'IR</h1><br />

        <div className="notification">
        <div className='IR Calculator'>

          <form>
            <label className="label">Revenus Annuel Net(€)</label>
            <input className="input is-primary" label="Revenus Annuel Net(€)" type="number" placeholder="Revenus Annuel Net(€)" value={this.state.earnings} onChange={this.handleEarningChange}/>

            <label className="label">Revenus Mensuel Net(€)</label>
            <input className="input is-primary" label="Revenus Mensuel Net(€)" type="number" placeholder="Revenus Mensuel Net(€)" value={this.state.earnings / 12} onChange={this.handleMonthlyEarningChange}/>

            <label className="label">Abattement Fiscal(%)</label>
            <input className="input is-primary" label="Abattement Fiscal(%)" type="number" placeholder="Abattement Fiscal(%)" value={this.state.taxRebate} onChange={this.handleTaxRebateChange}/>

          </form><br />

          <h2><b>{taxes} €</b> d'IR à payer.</h2><br />
          <h2>Votre taux d'imposition est de {generalTaxation} %</h2>
        </div>
        </div>
      </div>

    )
  }

}

export default Calculator;
