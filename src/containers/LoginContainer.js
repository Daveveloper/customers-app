import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserLogin from "../components/UserLogin";
import AppFrame from "../components/AppFrame";

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame
                    body={
                        <UserLogin/>
                    }
                    header={"Login"}/>
            </div>
        );
    }
}

LoginContainer.propTypes = {};

export default LoginContainer;