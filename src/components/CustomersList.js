import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from "./CustomerListItem";

const CustomersList = ({ customers, url }) => {

    return (
        <div>
            <div className="customers-list">
                {customers.map( c =>
                    <CustomerListItem
                    key={c.dni}
                    dni={c.dni}
                    name={c.name}
                    editAction={'Editar'}
                    delAction={'Eliminar'}
                    url={url}/>)
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
};

export default CustomersList;