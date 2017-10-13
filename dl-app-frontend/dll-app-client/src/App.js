import React, {Component} from 'react';
//import logo from './logo.svg';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Definitive logic</Link>

              {/* <header className="App-header">
                <img
                  src="https://www.ensighten.com/wp-content/uploads/2015/07/analytics-big-data-personalization.png"
                  className="App-logo"
                  alt="logo"/>
                <h1 className="App-title">Definitive Logic Microservice Demo</h1>
              </header>
              < div className="App"></div> */}
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>

            {/* <Navbar.NavItem href="/signup">Signup</Navbar.NavItem>
              <Navbar.NavItem href="/login">Login</Navbar.NavItem> */}

          </Navbar.Collapse>

        </Navbar>

        <Routes/>
      </div >
    );
  }
}
export default App;