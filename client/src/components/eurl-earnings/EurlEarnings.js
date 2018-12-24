import React, { Component } from 'react';
import estimateYearSalary from '../../utils/estimateYearSalary'

class EurlEarnings extends Component {

  constructor(props) {
    super(props);
    this.state = {tjm: 0, vacationWeeks: 0, unSoldDays: 20};
  }

  // changes handlers
  handleTjmChange           = (e) => {this.setState({tjm: e.target.value});}
  handleVacationWeeksChange = (e) => {this.setState({vacationWeeks: e.target.value});}
  handleUnsoldDaysChange    = (e) => {this.setState({unSoldDays: e.target.value});}

  render() {
    const amountOfExpenditure = localStorage.getItem('amountOfEsxpenditure') ? localStorage.getItem('amountOfEsxpenditure') : 0
    const annualSalary = estimateYearSalary(this.state.tjm, this.state.vacationWeeks, this.state.unSoldDays, amountOfExpenditure)
    const monthlySalary = Math.trunc(annualSalary / 12)

    return (
      <div className="container">
        <h1 className="title is-3">Revenu en EURL (prestation service)</h1>

        <div className="notification">
        <div className='IR Calculator'>
          <form>
            <label className="label">TJM (€)</label>
            <input className="input is-primary" type="number" placeholder="TJM (€)" value={this.state.tjm} onChange={this.handleTjmChange}/>

            <label className="label">Semaines de Vacances</label>
            <input className="input is-primary" type="number" placeholder="Semaines de Vacances" value={this.state.vacationWeeks} onChange={this.handleVacationWeeksChange}/>

            <label className="label">Jours Interco</label>
            <input className="input is-primary" type="number" placeholder="Jours Interco" value={this.state.unSoldDays} onChange={this.handleUnsoldDaysChange}/>
          </form><br />
          <h3>{parseFloat(amountOfExpenditure).toFixed(2)} € de dépenses</h3><br />
          <h2>{annualSalary.toFixed(2)} € à verser sur l'année</h2><br />
          <h2>{monthlySalary.toFixed(2)} € à verser chaque mois</h2><br />
        </div>
        </div>
      </div>
    )
  }
}

export default EurlEarnings;
