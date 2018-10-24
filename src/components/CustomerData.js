import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from "./CustomerActions";

const CustomerData = (
    {   //Props
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
                    <button onClick={onBack}>Go Back</button>
                    {
                        isDeleteAllow && <button onClick={onDelete}>Eliminar</button>
                    }
                </CustomerActions>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;