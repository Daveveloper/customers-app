import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {connect} from "react-redux";

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="dni">DNI:</label>
                    <Field name="dni" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <Field name="age" component="input" type="number" />
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const customerEditForm = reduxForm({ form: 'customerEdit' })(CustomerEdit);

export default connect(
    (state, props) => (
        {initialValues: props}
    ))(customerEditForm);