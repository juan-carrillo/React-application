import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>prop number is: {this.props.propNumber}</h3>
          <h3>prop number is: {this.props.propString}</h3>
          <h3>prop number is: {this.props.propObject.obj1}</h3>
          <Parent />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number,
}

App.defaultProps = {
  propNumber: 3,
  propString: "THis is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-CITY', 's-AUDI']
    };

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({carse: this.state.cars.reverse()})
  }
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Juist some info</h2>
        <Cars msg='cars are cool' model="666" coolCars={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'CITY', 'AUDI']
}

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}</div>
      </div>
    );
  }
}

export default App;
