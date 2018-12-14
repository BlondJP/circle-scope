import React, { Component } from 'react';

class EurlEarnings extends Component {

  constructor(props) {
    super(props);
    this.state = {tjm: 0, vacationWeeks: 0, unSoldDays: 20};
  }

  // changes handlers
  handleTjmChange = (e) => {
    this.setState({
      tjm: e.target.value
    });
  }
  handleVacationWeeksChange = (e) => {
    this.setState({
      vacationWeeks: e.target.value
    });
  }
  handleUnsoldDaysChange = (e) => {
    this.setState({
      unSoldDays: e.target.value
    });
  }

  estimateYearEarnings = (tjm, vacationWeeks, unSoldDays) => {
    const daysInYear = 304 // => 2018 example
    const workedDays = daysInYear - (5 * vacationWeeks) - unSoldDays
    const earnings = tjm * workedDays / 1.47
    return Math.trunc(earnings)
  }

  render() {

    const annualEarnings = this.estimateYearEarnings(this.state.tjm, this.state.vacationWeeks, this.state.unSoldDays)
    const monthlyEarnings = Math.trunc(annualEarnings / 12)

    return (
      <div className="container">
        <h1>Revenu en EURL (prestation service)</h1><br />

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

          <h2>{annualEarnings} € à verser sur l'année</h2><br />
          <h2>{monthlyEarnings} € à verser chaque mois</h2><br />
        </div>
        </div>
      </div>
    )
  }

}

export default EurlEarnings;
