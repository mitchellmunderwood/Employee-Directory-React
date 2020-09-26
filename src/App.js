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

    console.log("value:", value);

    const selectedEmployees = employees.filter((employee) => {
      if (
        employee.name.first.includes(value) ||
        employee.name.last.includes(value) ||
        employee.email.includes(value) ||
        employee.phone.includes(value) ||
        employee.dob.date.includes(value)
      ) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      ...this.state,
      search: value,
      selected: selectedEmployees,
    });

    console.log("Selected", selectedEmployees);
  };

  handleFilter = (collection, criteria) => {};

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <SearchBar OnSearch={this.handleSearch} />
          <EmployeeTable selected={this.state.selected} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
