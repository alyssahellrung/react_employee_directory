import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=u")
    .then(res => this.setState({ results: res.data.results }));
  }

  componentDidUpdate() {
    console.log(this.state.search);
    console.log(this.state.results);
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    const filtered = this.state.results.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()));
    console.log(filtered);
    this.setState({ results: filtered });
  };

  handleSort = event => {
    const sortedResults = this.state.results.sort((a, b) => {
      return a.name.last > b.name.last ? 1 : -1;
    });
    this.setState({ results: sortedResults });
  }

  render() {
    return (
      <div>
        <Header />
          <SearchBar 
            search={this.state.search} 
            handleInputChange={this.handleInputChange}/>
          <EmployeeTable 
            results={this.state.results}
            handleSort={this.handleSort} />
      </div>
    );
  }
}

export default Container;