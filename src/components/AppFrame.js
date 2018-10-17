import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";

const AppFrame = ({header, body}) => {
    return (
        <div>
            <div className="app-frame">
                <h1><i><strong>Custo</strong>merk</i></h1>
                <AppHeader title={header}/>
                <div>{body}</div>
                <div>Customers React App &copy; </div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;