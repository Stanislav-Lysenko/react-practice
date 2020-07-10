import React, { Component } from 'react';
import './App.module.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBounday';
import Counter from './counter/counter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {name:'Ford', year: 2018},
        // {name:'Mers', year: 2020},
        // {name:'Mazda 3', year: 2010},
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle
    })
  }

  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    })

  }

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1)
    this.setState({cars});
  }
  // handleInpit = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');
    const divStyle = {
      'textAlign': 'center'
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
              onChangeName={ event => this.onChangeName(event.target.value, index)}
              onDelete={this.deleteHandler.bind(this, index)}
            />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div>
        <div className="App" style={divStyle}>
          <h2 style={{color: 'blue', fontSize: '60px'}}>{this.state.pageTitle}</h2>
          <h3 style={{color: 'blue', fontSize: '60px'}}>{this.props.title}</h3>
          {/* <input type="text" onChange={this.handleInpit}/> */}

          <Counter />
          <button
            style={{marginTop: 20}}
            className={'AppButton'}
            onClick={this.toogleCarsHandler}>Toogle cars</button>
        </div>

      <div style={{
        width: 400,
        margin: 'auto',
        paddintTop: '20px'
      }}>
      { cars }
      </div>

      {/* <Car
        name={cars[0].name}
        year={cars[0].year}
        onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
      />
      <Car
        name={cars[1].name}
        year={cars[1].year}
        onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
      />
      <Car
        name={cars[2].name}
        year={cars[2].year}
        onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
      /> */}
      </div>

    );
  }

}

export default App;
