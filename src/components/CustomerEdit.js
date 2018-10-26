import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";
import CustomerActions from "./CustomerActions";
import {Prompt} from "react-router-dom";
import { Tooltip, Button } from '@material-ui/core';

/*const isRequired = value => (
    !value && "Campo requerido"
);*/
const validate = (values) => {
    const error ={};

    if(!values.name){
        error.name = "El campo nombre es requerido";
    }
    if(!values.dni){
        error.dni = "El campo Identificacion es requerido";
    }

    return error;
};
const isNumber = value => (
    isNaN(Number(value)) && "El dato debe ser numerico"
);

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();

class CustomerEdit extends Component {

    componentDidMount() {
        if(this.txt)
            this.txt.focus();
    }

    renderField = ({input, meta, type, label,name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label><br/>
            <input { ...input }
                   type={!type ? "text" : type}
                   ref={withFocus && (txt => this.txt = txt)}/><br/>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );

    render(){
        const {handleSubmit, submitting, onBack, pristine, submitSucceeded} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="dni"
                        component={this.renderField}
                        type="text"
                        label="Identificación"
                       />

                    <Field name="name"
                           component={this.renderField}
                           type="text"
                           label="Nombre"
                           parse={toUpper} format={toLower}/>

                    <Field name="age"
                           component= {this.renderField}
                           type="number"
                           validate={isNumber}
                           label="Edad"
                            parse={toNumber}/>

                    <CustomerActions>
                        <Button variant={"contained"} type="submit" disabled={pristine || submitting}>Aceptar</Button>
                        <Button variant={"contained"} type="button" onClick={onBack} disabled={ submitting }>Cancelar</Button>
                    </CustomerActions>

                    <Prompt
                        when={ !pristine && !submitSucceeded }
                        message="Esta a punto de avandonar esta pagina!"/>

                </form>
            </div>
        );
    }
}

CustomerEdit.propTypes={
    dni: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func,
};

const customerEditForm = reduxForm(
    {
        form: 'customerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(customerEditForm);

/*
* Forma anterior al High Order Component setPropsAsInitial
connect(
    (state, props) => (
        {initialValues: props}
    ))
 */