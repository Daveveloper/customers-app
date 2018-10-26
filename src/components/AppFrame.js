import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";
import {Card, CardContent} from '@material-ui/core';

const AppFrame = ({header, body}) => {
    return (
           
        <div className="app-frame">
            <h1><strong>Custo</strong>merk</h1>
            <AppHeader title={header}/>
            <div>{body}</div>
            <div className="footer">Customers React App &copy; </div>
        </div>   
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;