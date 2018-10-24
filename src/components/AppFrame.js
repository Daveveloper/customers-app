import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";
import {Card, CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        minWidth: 275,
    }
};

const AppFrame = ({header, body}) => {
    return (

        <div>
            <Card>
                <CardContent>
                    <div className="app-frame">
                        <h1><i><strong>Custo</strong>merk</i></h1>
                        <AppHeader title={header}/>
                        <div>{body}</div>
                        <div className="footer">Customers React App &copy; </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default withStyles(styles)(AppFrame);