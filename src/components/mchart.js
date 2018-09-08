import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import mstyles from '../layouts/msite.module.css';

export default class Mchart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartData: {}
    }
  }
  componentWillMount() {

    this.setState({

      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40,0]
          }
      ]
      }
    })

  }

  render() {
    return (
      <div className={mstyles.chart}>
        <div className={mstyles.d200}>
          <Bar
            data={this.state.chartData}
          />
        </div>

        <div className={mstyles.d200}>
          <Pie
            data={this.state.chartData}
          />
        </div>
        <div className={mstyles.d200}>
         <Line data={this.state.chartData} />
        </div>

      </div>
    )
  }
}
