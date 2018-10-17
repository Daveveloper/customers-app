import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import {getCustomerByDni} from "../selectors/customersSelectors";
import {Route} from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

class CustomerContainer extends Component {

    //`Nombre: ${this.props.customer.name}`

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => { // DRY Don´t Repeat Yourself
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl { ...this.props.customer }/>
            }
        }/>
    );
    render() {
        return (
            <div>
                <AppFrame
                    header={'Edición'}
                    body={this.renderBody()}/>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const initMapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default connect(initMapStateToProps, null)(CustomerContainer);