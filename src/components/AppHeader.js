import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = props => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AppHeader;