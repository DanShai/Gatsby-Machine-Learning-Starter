import React from 'react'
import Link from 'gatsby-link'
import ReactDOM from 'react-dom';
import Model from '../components/model';
import Train from '../components/train';
import Layer from '../components/layer'

export default class Testpage extends React.Component {
  constructor(props){
    super(props)

  }
  
  *trainDataGenerator() {
    yield { x: 1, y: 1 };
    yield { x: 4, y: 4 };
    yield { x: 8, y: 8 };
  }

  render() {
    return (
      <div>
        <Train
          trainData={this.trainDataGenerator}
          epochs={15}
          batchSize={3}
          samples={3}
          onTrainEnd={model => model.describe()}
          train
          display
        >
          <Model optimizer='sgd' loss='meanSquaredError'>
            <Layer lname={"Dense"} units={1} inputShape={[1]} />
          </Model>
        </Train>
      </div>
    );
  }
}

