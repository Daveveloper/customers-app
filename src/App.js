import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
import CustomerNewContainer from "./containers/CustomerNewContainer";
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
    renderCustomerContainer = () => <h1>Customers container</h1>;
    renderCustomersListContainer = () => <h1>Customers List container</h1>;
    renderCustomersNewContainer = () => <h1>Customer New container</h1>;
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact path="/" component={LoginContainer}/>
              <Route exact path="/home" component={HomeContainer}/>
              <Route exact path="/customers" component={CustomersContainer}/>
              <Switch>
                  <Route path="/customers/new" component={CustomerNewContainer}/>
                  <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
