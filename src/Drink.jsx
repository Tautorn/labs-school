import React, { Component } from 'react'

class Drink extends Component {

  constructor(props) {
    super(props)

    console.log("comida", props)

    this.state = {
      clock: 3000,
      copo: 'água',
      food: props.food
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo, food } = this.state
    console.log('rerender')
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
        Comida: {food}
      </div>
    )
  }
}

export default Drink