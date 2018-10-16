import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import {fetchCustomers} from "../actions/fetchCustomers";

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }

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
                          body={this.renderBody(this.props.customers)}/>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
};

const initMapDispatchToProps = { fetchCustomers };

const initMapStateToProps = state => ({
    customers: state.customers
});

export default withRouter(connect(initMapStateToProps, initMapDispatchToProps)(CustomersContainer));