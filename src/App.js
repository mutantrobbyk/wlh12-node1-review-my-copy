import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import People from './People'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: []
    }
  }
  getAllPeople () {
    axios.get(`/api/people`).then(res => (
      this.setState({people: res.data})
    )).catch(err => {
      alert('could not find people')
    })
  }
  getFemales() {
    axios.get(`/api/people/females`).then(res => (
      this.setState({people: res.data})
    )).catch(err => {
      alert('could not find only females')
    })
  }
  getMales() {
    axios.get(`/api/people/males`).then(res => (
      this.setState({people: res.data})
    )).catch(err => {
      alert('could not find only males')
    })
  }
  render() {
    console.log(this.state.people)
    return (
      <div className='outer-app'>
      <button onClick={() => this.getAllPeople()}>Get All People</button>
      <button onClick={() => this.getFemales()}>Females</button>
      <button onClick={() => this.getMales()}>Males</button>
        <div className="App">
      {this.state.people.map(el => (
      <People key={el.id} data={el}/>
      ))}
      </div>
      </div>
    );
  }
}

export default App;
