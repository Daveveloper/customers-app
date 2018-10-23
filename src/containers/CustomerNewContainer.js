import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import AppFrame from "../components/AppFrame";
import {insertCustomer} from "../actions/insertCustomer";
import {SubmissionError} from "redux-form";

class CustomerNewContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values).then(r=>{
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        });
    };
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    };
    handleOnBack = () =>{
      this.props.history.goBack();
    };

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                             onSubmitSuccess={this.handleOnSubmitSuccess}
                             onBack={this.handleOnBack}/>
    };

    render() {
        return (
            <div>
                <AppFrame body={this.renderBody()} header={`Nuevo cliente`}/>
            </div>
        );
    }
}

CustomerNewContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null,{ insertCustomer })(CustomerNewContainer));