import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import axios from "axios";
// import API from "../utils/API";

class Container extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=u")
    .then(res => this.setState({ employees: res.data }));
  }

  // componentDidMount() {
  //   this.search();
  // }

  // search = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Header />
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results} />
      </div>
    );
  }
}

export default Container;