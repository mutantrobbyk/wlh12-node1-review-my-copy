import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import People from "./People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      country: "",
      genre: ""
    };
  }
  countryChange(e) {
    this.setState({
      country: e
    });
  }
  genreChange(e) {
    this.setState({
      genre: e
    });
  }
  getAllPeople() {
    axios
      .get(`/api/people`)
      .then(res => this.setState({ people: res.data }))
      .catch(err => {
        alert("could not find people");
      });
  }
  getFemales() {
    axios
      .get(`/api/people/females`)
      .then(res => this.setState({ people: res.data }))
      .catch(err => {
        alert("could not find only females");
      });
  }
  getMales() {
    axios
      .get(`/api/people/males`)
      .then(res => this.setState({ people: res.data }))
      .catch(err => {
        alert("could not find only males");
      });
  }
  searchByCountry(count) {
    axios
      .get(`/api/people/country?count=${count}`)
      .then(res => this.setState({ people: res.data }))
      .catch(err => {
        alert("cannot search by country");
      });
  }
  searchByGenre(gen) {
    axios
      .get(`/api/people/genre?gen=${gen}`)
      .then(res => this.setState({ people: res.data }))
      .catch(err => {
        alert("cannot search by genre");
      });
  }
  render() {
    console.log(this.state.country);
    return (
      <div className="outer-app">
        <div className="nav">
          <button onClick={() => this.getAllPeople()}>Get All People</button>
          <button onClick={() => this.getFemales()}>Females</button>
          <button onClick={() => this.getMales()}>Males</button>
          <div>
            <input
              value={this.state.country}
              onChange={e => this.countryChange(e.target.value)}
              type="text"
              placeholder="...type a country"
            />
            <button
              onClick={e => {
                this.searchByCountry(this.state.country);
                this.setState({ country: "" });
              }}
            >
              Submit Country
            </button>
          </div>
          <div>
            <input
              value={this.state.genre}
              onChange={e => this.genreChange(e.target.value)}
              type="text"
              placeholder="...type a movie genre"
            />
            <button
              onClick={e => {
                this.searchByGenre(this.state.genre);
                this.setState({ genre: "" });
              }}
            >
              Submit Genre
            </button>
          </div>
        </div>
        <div className="App">
          {this.state.people.map(el => (
            <People key={el.id} data={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
