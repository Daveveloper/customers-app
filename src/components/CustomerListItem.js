import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Button} from "@material-ui/core";
import { Edit } from '@material-ui/icons';

class CustomerListItem extends Component{

    handleDelete = () => (
        this.props.history.push('customers/:dni/del')
    );

    render() {
        const {name, editAction, delAction, url, dni} = this.props;
        return (
                <div className="customers-list-item">
                    <div className="field">
                        <Link to={`${url}${dni}`}><strong>{name}</strong></Link>
                    </div>
                    <div className="field">
                        <Link to={`${url}${dni}/edit`}>{editAction}</Link>
                    </div>
                    <div className="field">
                        <Link to={`${url}${dni}/del`}>{delAction}</Link>
                    </div>
                </div>
        );
    }
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
};

export default withRouter(CustomerListItem);