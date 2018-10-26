import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomerActions";
import { Button } from '@material-ui/core'
import { ListAlt } from '@material-ui/icons';

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
                        <div>
                            <img src={require("./../img/logo.png")} height={200} alt={"Logo"}/>
                            <CustomerActions>
                                <Button variant="extendedFab" aria-label="ListAlt" onClick={this.handleClick}>
                                    <ListAlt/>
                                    Listado de clientes
                                </Button>
                            </CustomerActions>
                        </div>
                    }/>
            </div>
        );
    }
}

//HomeContainer.propTypes = {};

export default withRouter(HomeContainer);