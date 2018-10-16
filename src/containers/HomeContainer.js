import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomerActions";

class HomeContainer extends Component {
    handleClick = () => (
        this.props.history.push('/customers')
    );
    render() {
        return (
            <div>
                <AppFrame
                    header={'Home container'}
                    body={
                        <CustomerActions>
                            <button onClick={this.handleClick}>
                                Listado de clientes
                            </button>
                        </CustomerActions>
                    }/>
            </div>
        );
    }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);