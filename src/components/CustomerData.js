import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@material-ui/core';
import CustomerActions from "./CustomerActions";
import {accessControl} from "../helpers/accessControl";
import {CUSTOMER_VIEW} from "../constants/permissions";

const CustomerData = (
    {   //Props
        id,
        name,
        age,
        dni,
        onBack,
        isDeleteAllow,
        onDelete,
    }) => {
    return (
            <div>
                <div className="customer-data">
                    <h2>Datos del cliente</h2>
                    <div><strong>Nombre:</strong> <i>{name}</i></div>
                    <div><strong>Edad:</strong> <i>{age}</i></div>
                    <div><strong>DNI:</strong> <i>{dni}</i></div>
                </div>
                <div>
                    <CustomerActions>
                        <Tooltip placement={"left"} title={"Regresar"}>
                            <Button variant={"fab"} onClick={onBack} mini={true}><i className="material-icons">arrow_back</i></Button>
                        </Tooltip>
                        {
                            isDeleteAllow &&
                            <Tooltip placement={"right"} title={"Eliminar"}>
                                <Button variant={"fab"} mini={true} onClick={() => onDelete(id)}>
                                    <i className="material-icons">delete</i>
                                </Button>
                            </Tooltip>
                        }
                    </CustomerActions>
                </div>
            </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);