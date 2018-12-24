import React, { Component } from 'react';

class BillExpense extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      link: '',
      expenses : localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [],
      total : localStorage.getItem('amountOfEsxpenditure') ? localStorage.getItem('amountOfEsxpenditure') : 0
    }
    console.log(localStorage.getItem('expenses'))
  }

  handleExpenseSubmit = (e) => {
      e.preventDefault()
      const expense = {
        name: this.state.name,
        price: parseFloat(this.state.price),
        link: this.state.price
      }
      const expenses = [...this.state.expenses, expense];
      // save
      localStorage.setItem('expenses', JSON.stringify(expenses))
      this.setState({
        expenses : expenses
      })
      // reset form
      this.setState({
        name: '',
        price: 0,
        link: '',
      })
  }

  handleChangeName  = (e) => {this.setState({name: e.target.value})}
  handleChangePrice = (e) => {this.setState({price: e.target.value})}
  handleChangeLink  = (e) => {this.setState({link: e.target.value})}

  render() {

    const tableBody = this.state.expenses.map((expense, index) => {
      return (
        <tr>
          <th>{++index}</th>
          <td>{expense.name}</td>
          <td>{expense.price.toFixed(2)} €</td>
        </tr>
      )
    })

    const calculateTotalReducer = (accumulator, currentExpense) => accumulator + currentExpense.price
    const total = this.state.expenses.reduce(calculateTotalReducer, 0)
    localStorage.setItem('amountOfEsxpenditure', total)
    const displayTotal = (
        <tr>
          <th></th>
          <td>Total</td>
          <td>{total.toFixed(2)} €</td>
        </tr>
    )

    return (
      <div className="expense bill">
        <h1 className="title is-3">Dépenses de l'entreprise</h1>
        <table className="table is-striped is-hoverable">
          <thead>
            <tr>
              <th><abbr title="Numero">Numero</abbr></th>
              <th>Produit/Service</th>
              <th><abbr title="Prix HT(€)">Prix HT(€)</abbr></th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
          <tfoot>
            {displayTotal}
          </tfoot>
        </table><br />

        <h2 className="title is-4">Ajouter une dépense</h2>
        <form onSubmit={this.handleExpenseSubmit}>
          <input className="input is-primary" style={{width: 200}} type="text" placeholder="Nom" onChange={this.handleChangeName} value={this.state.name} />
          <input className="input is-primary" style={{width: 200}} type="number" placeholder="Prix HT(€)" onChange={this.handleChangePrice} value={this.state.price} />
          <input className="input is-primary" style={{width: 200}} type="text" placeholder="Lien" onChange={this.handleChangeLink} value={this.state.link} />
          <input className="button is-primary" type="submit" value="Ajouter aux Dépenses"/>
        </form>
      </div>
    )
  }
}

export default BillExpense;
