import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";

const customers = [
    {
        "name":"Deivid Araya C.",
        "dni":"114410391",
        "age": 28
    },
    {
        "name":"Manuel Medrano",
        "dni":"514410391",
        "age": 26
    }
];

class CustomersContainer extends Component {
    handleAddNew = () => (
        this.props.history.push('/customers/new')
    );
    renderBody = customers => (
        <div>
            <CustomersList customers={customers} url={'customers/'}/>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Agregar cliente</button>
            </CustomerActions>
        </div>
    );
    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                          body={this.renderBody(customers)}/>
            </div>
        );
    }
}

CustomersContainer.propTypes = {};

export default withRouter(CustomersContainer);