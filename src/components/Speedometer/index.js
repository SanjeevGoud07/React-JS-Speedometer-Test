// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        console.log(`Previous State Value is ${prevState.count}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onBrake = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => {
        console.log('Hello')
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="Speed">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="but">
          <button type="button" onClick={this.onAccelerate} className="button">
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.onBrake}
            className="button button2"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
