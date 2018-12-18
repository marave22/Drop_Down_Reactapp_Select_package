import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';

//This React app created with npm create-react-app, it contain npm package also npm react-select
//DropDowns are built with Select tag from react-select package

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      selectedCountry: {}, //this the empty object for rendering country array
      selectedCity: {} //this the empty object for rendering city array
    }
  };

//handle function will change every selected country name
  handleChange1 = (selectedCountry) => {
    this.setState({selectedCountry});
  };

  //handle function will change every selected city name depend on country name
  handleChange2 = (selectedCountry) => {
    this.setState({selectedCity: selectedCountry})
  };

  render() {

    const country = [
      {value: 'eng', label: 'England'},
      {value: 'fr', label: 'France'},
      {value: 'it', label: 'Italy'},
      {value: 'sp', label: 'Spain'}
    ];

    const city = [
      {value: 'london', label: "London", link: "eng"},
      {value: 'liverpool', label: "Liverpool", link: 'eng'},
      {value: 'manchester', label: 'Manchester', link: 'eng'},
      {value: 'paris', label: 'Paris', link: 'fr'},
      {value: 'lyon', label: 'Lyon', link: 'fr'},
      {value: 'cannes', label: 'Cannes', link: 'fr'},
      {value: 'rome', label: 'Rome', link: 'it'},
      {value: 'venice', label: 'Venice', link: 'it'},
      {value: 'milan', label: 'Milan', link: 'it'},
      {value: 'madrid', label: 'Madrid', link: 'sp'},
      {value: 'valencia', label: 'Valencia', link: 'sp'},
      {value: 'granada', label: 'Granada', link: 'sp'}
    ];

    //citySelected element return array, comparing city links and with country value
    const citySelected = city.filter((o) => o.link === this.state.selectedCountry.value);

    return (
      <div className="App">
        <h1>Drop-Down for Countries!!!</h1>
        <Select
             placeholder={this.state.selectedCountry.label}
             value={this.state.selectedCountry.value}
             onChange={this.handleChange1}
             options={country}>Country</Select>
        <Select
             placeholder={this.state.selectedCity.label}
             value={this.state.selectedCity.value}
             onChange={this.handleChange2}
             options={citySelected}/>
      </div>
    );
  }
}

export default App;
