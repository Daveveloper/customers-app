import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';
import { Done } from '@material-ui/icons';

const UserLogin = props => {
    return (
        <div>
            <div>
                <form action="">
                    <div>
                        <TextField
                            id="user"
                            label="User"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Password"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <Button variant="extendedFab" type="submit">
                            <Done/> Ingresar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UserLogin.propTypes = {};

export default UserLogin;