import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";
// import API from "../utils/API";

class Container extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=u")
    .then(res => this.setState({ results: res.data.results }));
  }

  componentDidUpdate() {
    console.log(this.state.results)
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

  handleSort = event => {
    const sortedResults = this.state.results.sort();
    console.log(sortedResults);
  }

  render() {
    return (
      <div>
        <Header />
          <SearchBar 
            search={this.state.search} 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}/>
          <EmployeeTable 
            results={this.state.results}
            handleSort={this.handleSort} />
      </div>
    );
  }
}

export default Container;