import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from "./CustomerListItem";
import {Tooltip} from "@material-ui/core";
import {accessControl} from "../helpers/accessControl";
import {CUSTOMER_VIEW} from "../constants/permissions";

const CustomersList = ({ customers, url }) => {

    return (
            <div className="customers-list">
                {customers.map( c =>
                    <CustomerListItem
                    key={c.dni}
                    dni={c.dni}
                    name={c.name}
                    editAction={
                        <Tooltip title="Editar" placement="right">
                        <i className="material-icons">edit</i>
                        </Tooltip>
                    }
                    delAction={
                        <Tooltip title="Eliminar" placement="right">
                        <i className="material-icons">delete</i>
                        </Tooltip>
                    }
                    url={url}/>)
                }
            </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_VIEW])(CustomersList);