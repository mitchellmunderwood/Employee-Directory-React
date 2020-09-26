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

  handleFilter = (event) => {
    const criteria = event.target.id;
    let filteredEmployees = [];

    console.log("Criteria", criteria);

    if (criteria === "name") {
      filteredEmployees = this.state.selected.sort((a, b) => {
        if (a.name.first > b.name.first) return 1;
        if (b.name.first > a.name.first) return -1;
        return 0;
      });
    } else if (criteria === "dob") {
      filteredEmployees = this.state.selected.sort((a, b) => {
        if (a[criteria].date > b[criteria].date) return 1;
        if (b[criteria].date > a[criteria].date) return -1;
        return 0;
      });
    } else {
      filteredEmployees = this.state.selected.sort((a, b) => {
        if (a[criteria] > b[criteria]) return 1;
        if (b[criteria] > a[criteria]) return -1;
        return 0;
      });
    }

    this.setState({
      ...this.state,
      selected: filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <SearchBar OnSearch={this.handleSearch} />
          <EmployeeTable
            selected={this.state.selected}
            OnFilter={this.handleFilter}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
