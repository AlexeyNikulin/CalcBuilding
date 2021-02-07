import React, {Component} from 'react';
import Header from '../Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OneStep from '../One-Step';
import TwoStep from '../Two-Step';
import ThreeStep from '../Three-Step';
import FourStep from '../Four-Step';
import CalcService from '../../services/Calc-Service';
import Result from '../Result';
import './App.css';

export default class App extends Component {

  state = {
    building: null,
    height: null,
    material: null,
    sizex: null,
    sizey: null,
    step: 1,
    data: null,
  }

  calcService = new CalcService()

  componentDidUpdate() {
    const { building, material, sizex, sizey, data } = this.state;
    if (building && material && sizex && sizey && !data) {
      this.onFetchCalcData(this.onСalculate());
    }
  }

  onСalculate = () => {
    const { building, height, material, sizex, sizey } = this.state;
    const getHeight = height ? `&height=${height}` : '';
    return `?building=${building}${getHeight}&material=${material}&sizex=${sizex}&sizey=${sizey}`;
  };

  onFetchCalcData = (url) => {
    this.calcService.getResource(url)
      .then(data => {
        this.setState({data})
      })
  };

  onSelectBuilding = (building) => {
    this.setState({building})
  };

  onSelectHeight = (height) => {
    this.setState({height})
  };

  onSelectMaterial = (material) => {
    this.setState({material})
  };

  onSelectSize = (sizex, sizey) => {
    this.setState({sizex, sizey});
  };

  onChangeStep = (step) => {
    this.setState({step})
  };

  onCancel = () => {
    this.setState(state => {
      return {
        building: null,
        height: null,
        material: null,
        sizex: null,
        sizey: null,
        step: 1,
        data: null,
      }
    })
  }

  render() {
    const { building, height, material, step, data } = this.state;

    return (
      <Router>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/" render={() => <OneStep 
              onSelectBuilding={this.onSelectBuilding} 
              onCancel={this.onCancel}
              onChangeStep={this.onChangeStep} 
              step={step}/>}/>
            <Route exact path="/height" render={() => <TwoStep 
              house={building}
              onSelectHeight={this.onSelectHeight} 
              onCancel={this.onCancel}
              onChangeStep={this.onChangeStep} 
              step={step}/>} />
            <Route exact path="/material" render={() => <ThreeStep 
              height={height}
              onSelectMaterial={this.onSelectMaterial} 
              onCancel={this.onCancel}
              onChangeStep={this.onChangeStep} 
              step={step} 
              house={building}/>}/>
            <Route exact path="/size" render={() => <FourStep 
              material={material}
              onCancel={this.onCancel}
              onSelectSize={this.onSelectSize} 
              step={step}/>}/>
            <Route path="/success" render={() => <Result
              onCancel={this.onCancel}
              data={data}
              onChangeStep={this.onChangeStep}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

