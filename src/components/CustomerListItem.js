import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CustomerListItem = ({name, editAction, delAction, url, dni}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${url}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${url}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${url}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
};

export default CustomerListItem;