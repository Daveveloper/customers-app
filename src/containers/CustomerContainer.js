import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import {getCustomerByDni} from "../selectors/customersSelectors";
import {Route, withRouter} from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import {fetchCustomers} from "../actions/fetchCustomers";
import {updateCustomer} from "../actions/updateCustomer";
import {SubmissionError} from "redux-form";

class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        this.props.updateCustomer(id, values).then(r=>{
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        });
    };

    handleOnSubmitSuccess = () =>(
        this.props.history.goBack()
    );

    handleOnBack = () => (
        this.props.history.goBack()
    );

    renderCustomerControl = (isEdit) => {
        if(this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl { ...this.props.customer }
                                    onSubmit={this.handleSubmit}
                                    onSubmitSuccess = {this.handleOnSubmitSuccess}
                                    onBack={this.handleOnBack}/>
        }else{
            return null;
        }
    };
    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => this.renderCustomerControl(match)
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
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const initMapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props),
});


export default withRouter(connect(initMapStateToProps,
    {
        fetchCustomers,
        updateCustomer
    })(CustomerContainer));