import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import API from "./util/API";
import SearchBar from "./components/SearchBar/searchBar";
import EmployeeTable from "./components/EmployeeTable/employeeTable";

class App extends Component {
  state = {
    employees: [],
    search: "",
    selected: [],
  };

  componentDidMount() {
    API.getNumUsers(10).then((res) => {
      console.log("Employees", res.data.results);
      this.setState({
        employees: res.data.results,
        selected: res.data.results,
      });
      console.log("selected", this.state.selected);
    });
  }

  handleSearch = (event) => {
    const value = event.target.value;
    const employees = this.state.employees;

    const selectedEmployees = employees.filter((employee) => {
      employee.name.first.search(value) ||
        employee.name.last.search(value) ||
        employee.email.search(value) ||
        employee.phone.search(value) ||
        employee.dob.date.search(value);
    });

    this.setState({
      ...this.state,
      search: value,
      selected: selectedEmployees,
    });
  };

  handleFilter = (collection, criteria) => {};

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <SearchBar />
          <EmployeeTable selected={this.state.selected} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
