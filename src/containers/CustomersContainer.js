import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import {fetchCustomers} from "../actions/fetchCustomers";
import {getCustomers} from "../selectors/customersSelectors";
import { Button, Tooltip } from "@material-ui/core";

class CustomersContainer extends Component {
    componentDidMount() {
        if(this.props.customers.length === 0) {
            this.props.fetchCustomers();
        }
    }

    handleAddNew = () => (
        this.props.history.push('/customers/new')
    );
    renderBody = customers => (
        <div>
            <CustomersList customers={customers} url={'customers/'}/>
            <CustomerActions>
                <Tooltip title="Agregar Cliente" placement={"right"}>
                <Button variant={"contained"} onClick={this.handleAddNew} mini={true}>
                    <i className="material-icons">person_add</i>
                </Button>
                </Tooltip>
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
    customers: getCustomers(state)
});

export default withRouter(connect(initMapStateToProps, initMapDispatchToProps)(CustomersContainer));