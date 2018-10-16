import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";

class App extends Component {
    renderCustomerContainer = () => <h1>Customers container</h1>;
    renderCustomersListContainer = () => <h1>Customers List container</h1>;
    renderCustomersNewContainer = () => <h1>Customer New container</h1>;
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path="/customers" component={CustomersContainer}/>
              <Switch>
                  <Route path="/customers/new" component={this.renderCustomersNewContainer}/>
                  <Route path="/customers/:dni" component={this.renderCustomerContainer}/>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
